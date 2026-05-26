// ── Element References ──
const blogFilterItems = document.querySelectorAll(".blog_filter_item");
const blogPostCards = document.querySelectorAll(".blog_post_card");
const blogSearchInput = document.getElementById("blog_search_input");
const postsShowingLabel = document.getElementById("posts_showing_label");
const postsCountBadge = document.getElementById("posts_count_badge");
const totalPostsCount = document.getElementById("total_posts_count");
const blogEmptyState = document.getElementById("blog_empty_state");
const blogSubscribeBtn = document.getElementById("blog_subscribe_btn");
const blogEmailInput = document.getElementById("blog_email_input");
const blogNewsletterMsg = document.getElementById("blog_newsletter_msg");

// ── State ──
let currentFilter = "all";
let currentSearch = "";
let currentPostId = null;

// ── Build postData map from the DOM ──
const postData = {};
blogPostCards.forEach((card) => {
  const id = parseInt(card.dataset.postid);
  postData[id] = {
    id,
    title: card.querySelector(".post_card_title").textContent,
    excerpt: card.querySelector(".post_card_excerpt").textContent,
    category: card.dataset.category,
    date: card.querySelector(".post_card_date").textContent,
    readTime: card.querySelector(".post_read_time").textContent,
    tagEl: card.querySelector(".post_tag").outerHTML,
  };
});

// ── Init ──
document.addEventListener("DOMContentLoaded", () => {
  updatePostCount();
  updateTotalCount();
  attachStaggerDelay();
  initFilterListeners();
  initSearchListener();
  initNewsletterForm();

  // Clicking anywhere on a card (outside the button) also opens the post
  blogPostCards.forEach((card) => {
    card.addEventListener("click", (e) => {
      if (!e.target.closest(".post_read_link")) {
        openPost(parseInt(card.dataset.postid));
      }
    });
    card.style.cursor = "pointer";
  });
});

// ── Count helpers ──
function updateTotalCount() {
  if (totalPostsCount) totalPostsCount.textContent = blogPostCards.length;
}

function updatePostCount() {
  const visibleCards = [...blogPostCards].filter(
    (c) => c.style.display !== "none",
  );
  const count = visibleCards.length;
  if (postsCountBadge)
    postsCountBadge.textContent = `${count} article${count !== 1 ? "s" : ""}`;
  if (blogEmptyState)
    blogEmptyState.style.display = count === 0 ? "block" : "none";
}

// ── Stagger animation ──
function attachStaggerDelay() {
  blogPostCards.forEach((card, i) => {
    card.style.animationDelay = `${i * 0.07}s`;
  });
}

// ── Filter ──
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
      if (postsShowingLabel)
        postsShowingLabel.textContent = labelMap[currentFilter] || "All posts";

      applyFilterAndSearch();
    });
  });
}

// ── Search ──
function initSearchListener() {
  if (!blogSearchInput) return;
  blogSearchInput.addEventListener("input", () => {
    currentSearch = blogSearchInput.value.toLowerCase().trim();
    applyFilterAndSearch();
  });
}

// ── Combined filter + search ──
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

    card.style.display = matchesFilter && matchesSearch ? "flex" : "none";
  });
  updatePostCount();
}

// ── Open / close post ──
function openPost(id) {
  currentPostId = id;
  const post = postData[id];
  if (!post) return;

  document.getElementById("post_view_tag").innerHTML = post.tagEl;
  document.getElementById("post_view_read_time").textContent = post.readTime;
  document.getElementById("post_view_date").textContent = post.date;
  document.getElementById("post_view_title").textContent = post.title;

  document.getElementById("post_view_body").innerHTML = `
    <p>${post.excerpt}</p>
    <p>This is where the full article will go. Replace this placeholder with the real content once you have it written.</p>
    <h2>Getting Started</h2>
    <p>Structure your article with clear sections to keep readers engaged. Each heading gives them an anchor to return to.</p>
    <div class="post_code_block">
      <div class="post_code_block_header">
        <span class="post_code_label">Code Example</span>
        <button class="post_code_copy" onclick="copyCode(this)">Copy Code</button>
      </div>
      <pre><code>// Replace with your real code example
const example = () => {
  return "Hello from ${post.title}";
};</code></pre>
    </div>
    <p>Continue with more content here. Your real articles will fill this out completely.</p>
    <h3>Key Takeaway</h3>
    <p>End with the most important thing the reader should take away. Keep it clear and direct.</p>
  `;

  // Sidebar "more posts" links
  const sidebarLinks = document.getElementById("post_sidebar_links");
  if (sidebarLinks) {
    sidebarLinks.innerHTML = Object.values(postData)
      .filter((p) => p.id !== id)
      .slice(0, 4)
      .map(
        (p) => `
        <div class="post_nav_link_item" onclick="openPost(${p.id})">
          <div class="post_nav_link_tag">${p.category}</div>
          <div class="post_nav_link_title">${p.title}</div>
        </div>
      `,
      )
      .join("");
  }

  // Prev / Next visibility
  const prevBtn = document.getElementById("prev_post_btn");
  const nextBtn = document.getElementById("next_post_btn");
  const ids = Object.keys(postData).map(Number);
  const idx = ids.indexOf(id);
  if (prevBtn) prevBtn.style.visibility = idx > 0 ? "visible" : "hidden";
  if (nextBtn)
    nextBtn.style.visibility = idx < ids.length - 1 ? "visible" : "hidden";

  document.getElementById("blog_view").style.display = "none";
  document.getElementById("post_view").style.display = "block";
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function closePost() {
  document.getElementById("blog_view").style.display = "block";
  document.getElementById("post_view").style.display = "none";
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function navPost(dir) {
  const ids = Object.keys(postData).map(Number);
  const idx = ids.indexOf(currentPostId);
  const newIdx = idx + dir;
  if (newIdx >= 0 && newIdx < ids.length) openPost(ids[newIdx]);
}

// ── Code copy ──
function copyCode(btn) {
  const code = btn
    .closest(".post_code_block")
    .querySelector("pre code").textContent;
  navigator.clipboard.writeText(code).then(() => {
    btn.textContent = "Copied!";
    setTimeout(() => {
      btn.textContent = "Copy Code";
    }, 2000);
  });
}

// ── Newsletter ──
function initNewsletterForm() {
  if (!blogSubscribeBtn || !blogEmailInput) return;

  blogSubscribeBtn.addEventListener("click", async () => {
    const email = blogEmailInput.value.trim();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
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
