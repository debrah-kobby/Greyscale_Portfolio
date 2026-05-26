/* =============================================================
   blog.js — Greyscale Portfolio Blog Page
   Handles: filtering, search, counts, newsletter, navbar,
            scroll animations, card stagger
   ============================================================= */

// ---- DOM refs ----
const blogFilterItems = document.querySelectorAll(".blog_filter_item");
const blogPostCards = document.querySelectorAll(".blog_post_card");
const blogSearchInput = document.getElementById("blog_search_input");
const postsShowingLabel = document.getElementById("posts_showing_label");
const postsCountBadge = document.getElementById("posts_count_badge");
const totalPostsCount = document.getElementById("total_posts_count");
const blogEmptyState = document.getElementById("blog_empty_state");
const blogPostsGrid = document.getElementById("blog_posts_grid");
const blogSubscribeBtn = document.getElementById("blog_subscribe_btn");
const blogEmailInput = document.getElementById("blog_email_input");
const blogNewsletterMsg = document.getElementById("blog_newsletter_msg");
const navbar = document.getElementById("navbar");
const hamburgerBtn = document.getElementById("hamburger_btn");
const navLinksList = document.getElementById("nav_links_list");

// ---- State ----
let currentFilter = "all";
let currentSearch = "";

// ============================================================
// INIT
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
  updatePostCount();
  updateTotalCount();
  attachStaggerDelay();
  initScrollNavbar();
  initHamburger();
  initFilterListeners();
  initSearchListener();
  initNewsletterForm();
});

// ============================================================
// POST COUNT + LABELS
// ============================================================
function updateTotalCount() {
  if (totalPostsCount) {
    totalPostsCount.textContent = blogPostCards.length;
  }
}

function updatePostCount() {
  const visibleCards = [...blogPostCards].filter(
    (card) => card.style.display !== "none",
  );
  const count = visibleCards.length;

  if (postsCountBadge) {
    postsCountBadge.textContent = `${count} article${count !== 1 ? "s" : ""}`;
  }

  if (blogEmptyState) {
    blogEmptyState.style.display = count === 0 ? "block" : "none";
  }
}

// ============================================================
// CARD STAGGER ANIMATION
// ============================================================
function attachStaggerDelay() {
  blogPostCards.forEach((card, i) => {
    card.style.animationDelay = `${i * 0.07}s`;
  });
}

// Re-stagger visible cards after filter
function restaggerVisible() {
  let index = 0;
  blogPostCards.forEach((card) => {
    if (card.style.display !== "none") {
      card.style.animationDelay = `${index * 0.06}s`;
      card.classList.remove("card_fadein_trigger");
      void card.offsetWidth; // force reflow
      card.classList.add("card_fadein_trigger");
      index++;
    }
  });
}

// ============================================================
// FILTER
// ============================================================
function initFilterListeners() {
  blogFilterItems.forEach((item) => {
    item.addEventListener("click", () => {
      currentFilter = item.dataset.filter;

      blogFilterItems.forEach((f) => f.classList.remove("active_filter"));
      item.classList.add("active_filter");

      const labelMap = {
        all: "All posts",
        frontend: "Frontend",
        css: "CSS",
        javascript: "JavaScript",
        bitcoin: "Bitcoin",
        career: "Career",
        tools: "Tools",
      };
      if (postsShowingLabel) {
        postsShowingLabel.textContent = labelMap[currentFilter] || "All posts";
      }

      applyFilterAndSearch();
    });
  });
}

// ============================================================
// SEARCH
// ============================================================
function initSearchListener() {
  if (!blogSearchInput) return;
  blogSearchInput.addEventListener("input", () => {
    currentSearch = blogSearchInput.value.toLowerCase().trim();
    applyFilterAndSearch();
  });
}

// ============================================================
// FILTER + SEARCH COMBINED
// ============================================================
function applyFilterAndSearch() {
  blogPostCards.forEach((card) => {
    const category = card.dataset.category || "";
    const title =
      card.querySelector(".post_card_title")?.textContent.toLowerCase() || "";
    const excerpt =
      card.querySelector(".post_card_excerpt")?.textContent.toLowerCase() || "";

    const matchesFilter = currentFilter === "all" || category === currentFilter;
    const matchesSearch =
      currentSearch === "" ||
      title.includes(currentSearch) ||
      excerpt.includes(currentSearch) ||
      category.includes(currentSearch);

    if (matchesFilter && matchesSearch) {
      card.style.display = "flex";
    } else {
      card.style.display = "none";
    }
  });

  updatePostCount();
  restaggerVisible();
}

// ============================================================
// NAVBAR SCROLL BEHAVIOUR
// ============================================================
function initScrollNavbar() {
  if (!navbar) return;
  window.addEventListener("scroll", () => {
    if (window.scrollY > 60) {
      navbar.style.background = "rgba(13,13,13,0.97)";
      navbar.style.boxShadow = "0 2px 20px rgba(0,0,0,0.35)";
    } else {
      navbar.style.background = "";
      navbar.style.boxShadow = "";
    }
  });
}

// ============================================================
// HAMBURGER / MOBILE NAV
// ============================================================
function initHamburger() {
  if (!hamburgerBtn || !navLinksList) return;
  hamburgerBtn.addEventListener("click", () => {
    navLinksList.classList.toggle("active");
  });

  // Close nav when link clicked (mobile)
  navLinksList.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinksList.classList.remove("active");
    });
  });
}

// ============================================================
// NEWSLETTER FORM
// (Reuses same /.netlify/functions/subscribe endpoint)
// ============================================================
function initNewsletterForm() {
  if (!blogSubscribeBtn || !blogEmailInput) return;

  blogSubscribeBtn.addEventListener("click", async () => {
    const email = blogEmailInput.value.trim();

    if (!email || !isValidEmail(email)) {
      showNewsletterMsg("Please enter a valid email address.", "error");
      return;
    }

    blogSubscribeBtn.disabled = true;
    blogSubscribeBtn.textContent = "Subscribing...";

    try {
      const response = await fetch("/.netlify/functions/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        showNewsletterMsg(
          "You're in! Check your inbox for a confirmation.",
          "success",
        );
        blogEmailInput.value = "";
      } else if (response.status === 409) {
        showNewsletterMsg("You're already subscribed!", "error");
      } else {
        showNewsletterMsg(
          data.message || "Something went wrong. Try again.",
          "error",
        );
      }
    } catch (err) {
      showNewsletterMsg("Network error. Please try again.", "error");
    } finally {
      blogSubscribeBtn.disabled = false;
      blogSubscribeBtn.innerHTML =
        'Subscribe <i class="fa-solid fa-paper-plane"></i>';
    }
  });
}

function showNewsletterMsg(text, type) {
  if (!blogNewsletterMsg) return;
  blogNewsletterMsg.textContent = text;
  blogNewsletterMsg.className = "blog_newsletter_msg";
  if (type === "success") blogNewsletterMsg.classList.add("success_msg");
  if (type === "error") blogNewsletterMsg.classList.add("error_msg");

  setTimeout(() => {
    blogNewsletterMsg.textContent = "";
    blogNewsletterMsg.className = "blog_newsletter_msg";
  }, 5000);
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// ============================================================
// SCROLL REVEAL (cards entering viewport)
// ============================================================
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 },
);

blogPostCards.forEach((card) => {
  revealObserver.observe(card);
});
