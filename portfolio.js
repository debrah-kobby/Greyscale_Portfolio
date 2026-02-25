/* document.addEventListener("DOMContentLoaded", function () {
  function setupScrollAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        }
      });
    }, observerOptions);

    
    const skillItems = document.querySelectorAll(
      ".language-name-on-skills-page"
    );
    skillItems.forEach((item) => observer.observe(item));

   
    const projectItems = document.querySelectorAll(
      ".novera-project-img-and-text-div"
    );
    projectItems.forEach((item) => observer.observe(item));

    
    const aboutSection = document.querySelector(".about_me_paragraphs");
    if (aboutSection) observer.observe(aboutSection);
  }

  
  function enhanceProjectImages() {
    const projectImages = document.querySelectorAll(
      ".novera-hotel-img-on-left img"
    );

    projectImages.forEach((img) => {
      const container = img.closest(".novera-hotel-img-on-left");

      img.addEventListener("mouseenter", () => {
        img.style.transform = "scale(1.05)";
        img.style.transition = "transform 0.3s ease";
        container.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.2)";
        container.style.transition = "box-shadow 0.3s ease";
      });

      img.addEventListener("mouseleave", () => {
        img.style.transform = "scale(1)";
        container.style.boxShadow = "none";
      });
    });
  }

 
  setupScrollAnimations();
  enhanceProjectImages();
});


const styleSheet = document.createElement("style");
styleSheet.textContent = `
    .animate-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
        transition: all 0.8s ease;
    }
    
    .language-name-on-skills-page,
    .novera-project-img-and-text-div,
    .about_me_paragraphs {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.8s ease;
    }
`;

document.head.appendChild(styleSheet);
 */

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
const homeonNav = document.querySelector(".home_on_nav");
const aboutonNav = document.querySelector(".aboutme_on_nav");
const projectonNav = document.querySelector(".projects_on_nav");
const skillsonNav = document.querySelector(".skills_on_mid_nav");
const skillsPage = document.getElementById("skills");
const projectPage = document.getElementById("prrojectsection");
window.addEventListener("scroll", () => {
  const firstPageRect = firstPage.getBoundingClientRect();
  /* console.log("firstPage bottom:", firstPageRect.bottom, "navH:", navBarHeight); */

  if (firstPageRect.bottom <= 609.6875) {
    firstSocialIcons.classList.add("hideDisplay");
    secondSocialIcons.classList.add("showDisplay");
  } else {
    firstSocialIcons.classList.remove("hideDisplay");
    secondSocialIcons.classList.remove("showDisplay");
  }
});

window.addEventListener("scroll", () => {
  const aboutMePageRect = aboutMePage.getBoundingClientRect();
  const skillsPageRect = skillsPage.getBoundingClientRect();
  const projectPageRect = projectPage.getBoundingClientRect();
  const firstPageRect = firstPage.getBoundingClientRect();
  /* console.log("Skills Page:", firstPageRect.top, "navH:", navBarHeight); */
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
  document.body.style.height = "90vh"; // ensure no vertical scroll
});
// Close modal when clicking outside the modal content
getInTouchModal.addEventListener("click", (e) => {
  if (e.target === getInTouchModal) {
    // click was on overlay, not content
    closeModal();
  }
});

// Close modal when pressing Escape
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && getInTouchModal.style.display === "flex") {
    closeModal();
  }
});

// Helper function to close modal
function closeModal() {
  getInTouchModal.style.display = "none";
  document.body.style.overflow = "auto";
  document.body.style.height = "auto"; // restore scrolling
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

// Add scroll effect to navbar
/* window.addEventListener("scroll", function () {
  const nav = document.querySelector(".main-nav");
  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
}); */

const projectcardsNodelist = document.querySelectorAll(
  ".individualprojectcards",
);
projectcardsNodelist.forEach((project) => {
  /*  console.log(project.dataset); */
  const projectDataset = project.dataset;
  /* console.log(projectDataset.logo); */
  project.addEventListener("click", () => {
    const FPCDoverlay = document.createElement("div");
    FPCDoverlay.classList.add("project_card_overlay");

    console.log("Project Card Clicked");
    const fullProjectCardDisplay = document.createElement("div");
    fullProjectCardDisplay.classList.add(
      "overall_div_for_full_project_card_display",
    );
    const projectStack = projectDataset.stack;

    const projectStackParsed = JSON.parse(projectStack);

    fullProjectCardDisplay.innerHTML = `
    <div class="logo_of_project">
        <img src="${projectDataset.logo}" alt="" />
      </div>
      <div class="laptop_and_mobile_view_for_projects_div">
        <div class="latop_view_for_full_project_card_display">
          <div class="pc_view_text_on_FPCD"><p>PC view</p></div>
          <div class="pc_image_on_FPCD">
            <img
              src="${projectDataset.pcview}"
              alt=""
              width="350"
              height="350"
              class="mainindividualprojectimage"
            />
          </div>
        </div>
        <div class="mobile_view_for_ful_project_card_display">
          <div class="mobile_view_text_on_FCPD"><p>Mobile view</p></div>
          <div class="mobile_image_on_FPCD">
            <img src="${projectDataset.mobileview}" alt="" width="70" height="70" />
          </div>
        </div>
      </div>
      <div class="category_and_stack_div_on_FPCD">
        <div class="category_on_FPCD">${projectDataset.projectcategory}</div>
        <div class="stack_on_FPCD"></div>
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

    // Close when clicking the dark overlay (outside the card)
    FPCDoverlay.addEventListener("click", (e) => {
      if (e.target === FPCDoverlay) {
        FPCDoverlay.remove();
        document.body.style.overflow = "auto";
      }
    });

    // Close on Escape
    document.addEventListener("keydown", function closeOnEsc(e) {
      if (e.key === "Escape") {
        FPCDoverlay.remove();
        document.body.style.overflow = "auto";
        document.removeEventListener("keydown", closeOnEsc);
      }
    });
    stackContainer = fullProjectCardDisplay.querySelector(".stack_on_FPCD");

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

    stackContainer.innerHTML = projectStackParsed
      .map(
        (tech) =>
          `<i class="devicon-${stackMap[tech]} colored"></i>
    `,
      )
      .join(" ");
    document.body.style.overflow = "hidden";
  });
});
