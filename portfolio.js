document.addEventListener("DOMContentLoaded", function () {
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
