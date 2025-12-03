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
  ".get_in_touch_button_on_first_page"
);
const getInTouchModal = document.querySelector(".getintouchmodalonfirstpage");
const downloadResumeBtn = document.querySelectorAll(".downloadresume");
const toastForResumeDownloaded = document.querySelector(
  ".toastforresumedownloaded"
);
const individualTabs = document.querySelectorAll(".individualtab");
const individualTabContent = document.querySelectorAll(".individualtabcontent");

individualTabs.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log("Tab clicked ");
    const contentTarget = btn.dataset.tab;

    individualTabs.forEach((t) => {
      t.classList.remove("active_skill_tab");
    });
    btn.classList.add("active_skill_tab");

    individualTabContent.forEach((c) =>
      c.classList.remove("active_tab_content")
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
