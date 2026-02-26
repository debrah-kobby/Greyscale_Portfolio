/* document.addEventListener("DOMContentLoaded", function () { ... }) */

const variableText = document.querySelector(".variabletext");
const getInTouchButton = document.querySelector(
  ".get_in_touch_button_on_first_page",
);
const getInTouchModal = document.querySelector(".getintouchmodalonfirstpage");
const downloadResumeBtn = document.querySelectorAll(".downloadresume");
const toastForResumeDownloaded = document.querySelector(
  ".toastforresumedownloaded",
);
const individualTabs = document.querySelectorAll(".individualtab");
const individualTabContent = document.querySelectorAll(".individualtabcontent");
const ellipsissmallScreen = document.querySelector(".elipseonsmallscreens");
const ellipsisContent = document.querySelector(".elipsecontentonsmallscreens");

const firstPage = document.getElementById("firstpage");
const aboutMePage = document.getElementById("about_me");
const navBar = document.getElementById("mainnavnav");
const navBarHeight = navBar.offsetHeight;
const aboutMePageHeight = aboutMePage.offsetHeight;
console.log(aboutMePageHeight);
const firstSocialIcons = document.querySelector(".social_on_first_page");
const secondSocialIcons = document.querySelector(".modsforsocilaicons");
const letsTalkButton = document.querySelector(".lets_talk_button_on_LT");
const homeonNav = document.querySelector(".home_on_nav");
const aboutonNav = document.querySelector(".aboutme_on_nav");
const projectonNav = document.querySelector(".projects_on_nav");
const skillsonNav = document.querySelector(".skills_on_mid_nav");
const postsonNav = document.querySelector(".posts_on_nav");
const skillsPage = document.getElementById("skills");
const projectPage = document.getElementById("prrojectsection");
const postsPage = document.querySelector("#recentPostsAriticle");

window.addEventListener("scroll", () => {
  const firstPageRect = firstPage.getBoundingClientRect();

  if (firstPageRect.bottom <= 609.6875) {
    firstSocialIcons.classList.add("hideDisplay");
    secondSocialIcons.classList.add("showDisplay");
    /* Fix: ensure pointer-events are restored on the fixed social icons */
    secondSocialIcons.style.pointerEvents = "all";
  } else {
    firstSocialIcons.classList.remove("hideDisplay");
    secondSocialIcons.classList.remove("showDisplay");
    secondSocialIcons.style.pointerEvents = "none";
  }
});

window.addEventListener("scroll", () => {
  const aboutMePageRect = aboutMePage.getBoundingClientRect();
  const skillsPageRect = skillsPage.getBoundingClientRect();
  const projectPageRect = projectPage.getBoundingClientRect();
  const firstPageRect = firstPage.getBoundingClientRect();
  const postsPageRect = postsPage.getBoundingClientRect();

  if (firstPageRect.top <= 0) {
    aboutonNav.removeAttribute("id");
    homeonNav.id = "home_link_on_nav";
  }
  if (aboutMePageRect.top <= 125.34375) {
    homeonNav.removeAttribute("id");
    aboutonNav.id = "home_link_on_nav";
    skillsonNav.removeAttribute("id");
  }
  if (skillsPageRect.top <= 128.125) {
    aboutonNav.removeAttribute("id");
    skillsonNav.id = "home_link_on_nav";
  }
  if (projectPageRect.top <= 128.453125) {
    skillsonNav.removeAttribute("id");
    projectonNav.id = "home_link_on_nav";
  } else {
    projectonNav.removeAttribute("id");
  }
  if (postsPageRect.top <= 128.453125) {
    projectonNav.removeAttribute("id");
    skillsonNav.removeAttribute("id");
    if (postsonNav) postsonNav.id = "home_link_on_nav";
  } else {
    if (postsonNav) postsonNav.removeAttribute("id");
  }
});

ellipsissmallScreen.addEventListener("click", () => {
  ellipsisContent.classList.toggle("active");
});
document.addEventListener("click", (e) => {
  if (
    !ellipsissmallScreen.contains(e.target) &&
    !ellipsisContent.contains(e.target)
  ) {
    ellipsisContent.classList.remove("active");
  }
});

individualTabs.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log(`${btn} clicked`);
    const contentTarget = btn.dataset.tab;

    individualTabs.forEach((t) => {
      t.classList.remove("active_skill_tab");
    });
    btn.classList.add("active_skill_tab");

    individualTabContent.forEach((c) =>
      c.classList.remove("active_tab_content"),
    );

    document.getElementById(contentTarget).classList.add("active_tab_content");
  });
});

downloadResumeBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    setTimeout(() => {
      toastForResumeDownloaded.style.display = "flex";
    }, 4000);
    setTimeout(() => {
      toastForResumeDownloaded.style.display = "none";
    }, 9000);
  });
});

getInTouchButton.addEventListener("click", () => {
  getInTouchModal.style.display = "flex";
  document.body.style.overflow = "hidden";
  document.body.style.height = "90vh";
});
letsTalkButton.addEventListener("click", () => {
  getInTouchModal.style.display = "flex";
  document.body.style.overflow = "hidden";
  document.body.style.height = "90vh";
});

getInTouchModal.addEventListener("click", (e) => {
  if (e.target === getInTouchModal) {
    closeModal();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && getInTouchModal.style.display === "flex") {
    closeModal();
  }
});

function closeModal() {
  getInTouchModal.style.display = "none";
  document.body.style.overflow = "auto";
  document.body.style.height = "auto";
}

const variableTextLoad = () => {
  setTimeout(() => {
    variableText.textContent = "a Web Developer";
  }, 0);
  setTimeout(() => {
    variableText.textContent = "a UI/UX Designer";
  }, 6000);
  setTimeout(() => {
    variableText.textContent = "an Entrepreneur";
  }, 12000);
  setTimeout(() => {
    variableText.textContent = "a Videographer";
  }, 18000);
};
variableTextLoad();
setInterval(variableTextLoad, 24000);

/* ── PROJECT CARD FULL DISPLAY ── */
const projectcardsNodelist = document.querySelectorAll(
  ".individualprojectcards",
);

projectcardsNodelist.forEach((project) => {
  const projectDataset = project.dataset;

  project.addEventListener("click", () => {
    const FPCDoverlay = document.createElement("div");
    FPCDoverlay.classList.add("project_card_overlay");

    const fullProjectCardDisplay = document.createElement("div");
    fullProjectCardDisplay.classList.add(
      "overall_div_for_full_project_card_display",
    );

    const projectStackParsed = JSON.parse(projectDataset.stack);

    const stackMap = {
      html: "html5-plain-wordmark",
      css: "css3-plain-wordmark",
      js: "javascript-plain",
      git: "git-plain-wordmark",
      github: "github-original",
      boot: "bootstrap-plain",
      figma: "figma-plain",
      trello: "trello-plain",
      canva: "canva-original",
      notion: "notion-plain",
    };

    const stackIconsHTML = projectStackParsed
      .map((tech) => `<i class="devicon-${stackMap[tech]} colored"></i>`)
      .join(" ");

    fullProjectCardDisplay.innerHTML = `
      <button class="FPCD_close_btn" aria-label="Close">
        <i class="fa-solid fa-xmark"></i>
      </button>
      <div class="logo_of_project">
        <img src="${projectDataset.logo}" alt="" />
      </div>
      <div class="laptop_and_mobile_view_for_projects_div">
        <div class="latop_view_for_full_project_card_display">
          <div class="pc_view_text_on_FPCD"><p>PC view</p></div>
          <div class="pc_image_on_FPCD">
            <img src="${projectDataset.pcview}" alt="" class="mainindividualprojectimage"  width="350"
              height="350"/>
          </div>
        </div>
        <div class="mobile_view_for_ful_project_card_display">
          <div class="mobile_view_text_on_FCPD"><p>Mobile view</p></div>
          <div class="mobile_image_on_FPCD">
            <img src="${projectDataset.mobileview}" alt="" width="70" height="70" />
          </div>
          <div class="stack_on_FPCD_mobile">${stackIconsHTML}</div>
        </div>
      </div>
      <div class="category_and_stack_div_on_FPCD">
        <div class="category_on_FPCD">${projectDataset.projectcategory}</div>
        <div class="stack_on_FPCD">${stackIconsHTML}</div>
      </div>
      <div class="name_and_tagline_on_FPCD">
        <div class="name_on_FPCD">${projectDataset.projectname}</div>
        <div class="tagline_on_FPCD">${projectDataset.projecttagline}</div>
      </div>
      <div class="short_description_on_FPCD">${projectDataset.projectdescription}</div>
      <div class="youtube_and_live_icons_on_FPCD">
        <a href="${projectDataset.projectyoutubelink}" target="_blank" class="youtube_on_FPCD">
          <i class="fa-brands fa-youtube"></i>
          <p>View Demo</p>
        </a>
        <a href="${projectDataset.projectlivelink}" target="_blank" class="live_on_FPCD">
          <i class="fa-solid fa-globe"></i>
          <p>View Live</p>
        </a>
      </div>
    `;

    FPCDoverlay.appendChild(fullProjectCardDisplay);
    document.body.appendChild(FPCDoverlay);
    document.body.style.overflow = "hidden";

    /* Close button */
    fullProjectCardDisplay
      .querySelector(".FPCD_close_btn")
      .addEventListener("click", () => {
        closeFPCD(FPCDoverlay);
      });

    /* Click outside */
    FPCDoverlay.addEventListener("click", (e) => {
      if (e.target === FPCDoverlay) closeFPCD(FPCDoverlay);
    });

    /* Escape key */
    document.addEventListener("keydown", function closeOnEsc(e) {
      if (e.key === "Escape") {
        closeFPCD(FPCDoverlay);
        document.removeEventListener("keydown", closeOnEsc);
      }
    });
  });
});

function closeFPCD(overlay) {
  overlay.remove();
  document.body.style.overflow = "auto";
}

/* ── RECENT POSTS ── */
const recentPosts = [
  {
    date: "Jan 2",
    readTime: "2 min",
    category: " Design",
    heading: "What happens when a non tech savvy gets into Tech",
    content: `I didn't enter the tech space because it was trendy or because I had everything figured out. I wasn't "computer-savvy" in the way people often imagine. I started with curiosity and a lot of uncertainty........`,
    link: "https://www.linkedin.com/posts/princesam_frontenddevelopment-learninginpublic-techjourney-activity-7407470390718943232-KxSd?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFy-PasBXHhOpYhdLH76gGSacedHh5RZhS4",
  },
  {
    date: "Feb 7",
    readTime: "10 min",
    category: " Build",
    heading: "The \u201cOne-Line\u201d Breakthrough: Building Luna Commerce",
    content: `I set a challenge for myself: build a high-level custom project for every major industry. I started with E-commerce, and that became Luna Commerce. Before writing a single line of code, I spent days wireframing, redesigning, and ......`,
    link: "https://www.linkedin.com/posts/princesam_webdevelopment-softwareengineering-vanillajs-activity-7426973959927123968-Ig2E?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFy-PasBXHhOpYhdLH76gGSacedHh5RZhS4",
  },
];

const overaldivforRecent = document.querySelector(
  ".actual_recent_posts_cards_div",
);

recentPosts.forEach((post) => {
  const card = document.createElement("div");
  card.classList.add("individual_recent_posts_cards");
  card.innerHTML = `
    <div class="date_read_time_category_on_RP">
      ${post.date} - ${post.readTime} read -
      <span class="category_on_RP">
        <i class="fa-solid fa-paintbrush"></i>${post.category}
      </span>
    </div>
    <div class="heading_on_RP">
      <h4>${post.heading}</h4>
    </div>
    <div class="short_text_on_RP">
      ${post.content}
    </div>
    <div class="see_n_the_social_on_RP">
      <p>View on</p>
      <div class="icon_for_social_on_RP">
        <a href="${post.link}" target="_blank">
          <i class="devicon-linkedin-plain-wordmark colored"></i>
        </a>
      </div>
    </div>
  `;
  overaldivforRecent.appendChild(card);
});

/* ── EMAILJS ── */
emailjs.init({
  publicKey: "N1VLNY8bYVWgG269X",
  blockHeadless: true,
  limitRate: {
    id: "newsletter",
    throttle: 10000,
  },
});

const form = document.querySelector(".newsletter_form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm("service_2vc5rzk", "template_arca4cm", this).then(
    function (response) {
      console.log("SUCCESS!", response.status, response.text);
      alert("Subscribed successfully!");
      form.reset();
    },
    function (error) {
      console.error("FAILED...", error);
    },
  );
});
