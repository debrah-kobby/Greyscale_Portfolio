// ── Post Data ──
// Full post definitions. bodyHTML is the full article rendered in the post view.
const postData = {
  1: {
    id: 1,
    title: 'From Curiosity to "I Can Code" — My First Step Into Tech',
    excerpt:
      'I didn\'t enter the tech space because it was trendy or because I had everything figured out. I started with curiosity and a lot of uncertainty — and a classic "Hello World" that changed everything.',
    category: "career",
    date: "December 2025",
    readTime: "3 min read",
    tagLabel: "Career",
    tagClass: "tag_career",
    images: ["assets/pcbehind2PCS.jpeg"],
    linkedinUrl:
      "https://www.linkedin.com/posts/princesam_frontenddevelopment-learninginpublic-techjourney-activity-7407470390718943232-KxSd",
    author: "Debrah Kobby",
    authorRole: "Frontend Engineer",
    bodyHTML: `
      <p>What happens when someone who never planned to go into tech suddenly finds himself building with code?</p>

      <p>I've been on LinkedIn for a while — learning quietly, connecting, and paying attention. I chose to listen before I spoke, to observe before I posted, so that when I eventually did, it would come from experience, not excitement.</p>

      <img src="assets/pcbehind2PCS.jpeg" alt="Debrah Kobby at his desk" class="post_inline_img" />

      <p>I didn't enter the tech space because it was trendy or because I had everything figured out. I wasn't "computer-savvy" in the way people often imagine. I started with curiosity and a lot of uncertainty.</p>

      <h2>The First File</h2>
      <p>My first real step into coding was simple. I created my first HTML file — the classic "Hello World." It wasn't impressive, but it worked.</p>

      <div class="post_code_block">
        <div class="post_code_block_header">
          <span class="post_code_label">index.html</span>
          <button class="post_code_copy" onclick="copyCode(this)">Copy Code</button>
        </div>
        <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;My First Page&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Hello World&lt;/h1&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre>
      </div>

      <p>Not long after, I built an HTML-only page about myself. Nothing fancy. Just text, structure, and curiosity. Then I styled it with CSS, refreshed the page, and watched it change in front of me.</p>

      <p>I still remember the grin on my face when I finished and thought, <em>"Wait… I can actually do this."</em> Then I said it out loud: <strong>"I can code."</strong></p>

      <h2>What Came After</h2>
      <p>After that came small experiments that barely worked, layouts that broke for no clear reason, and bugs that taught me more than any tutorial ever could. Slowly, I realised I wasn't just learning syntax. I was learning how to <em>create</em>.</p>

      <p>That realisation pulled me in. I explored JavaScript, learned how to manage my work properly using Git and GitHub, and watched confusion turn into clarity. Interest turned into commitment.</p>

      <h3>Takeaway</h3>
      <p>So what happens to the non-tech-savvy person who finds his way into tech? This happens. Growth. Building. And a journey that's still unfolding.</p>

      <p>I'm Prince Debrah Bessah Sam, a Frontend Developer. This is my first post, but it's only the beginning. I'll be sharing my journey, lessons, and projects as I continue learning and building.</p>
    `,
  },

  2: {
    id: 2,
    title: 'The "One-Line" Breakthrough: Building Luna Commerce',
    excerpt:
      "Three weeks stuck on a brutal CSS layout bug. Five hours debugging. One deleted line of code. This is what building a full e-commerce platform from scratch with Vanilla JS actually teaches you.",
    category: "frontend",
    date: "February 2026",
    readTime: "4 min read",
    tagLabel: "Frontend",
    tagClass: "tag_frontend",
    images: [
      "assets/lunacommercescreenshot1.png",
      "assets/lunacommercemockup-portrait.png",
    ],
    linkedinUrl:
      "https://www.linkedin.com/posts/princesam_webdevelopment-softwareengineering-vanillajs-activity-7426973959927123968-Ig2E",
    author: "Debrah Kobby",
    authorRole: "Frontend Engineer",
    bodyHTML: `
      <p>I set a challenge for myself: build a high-level custom project for every major industry. I started with E-commerce — and that became <strong>Luna Commerce</strong>.</p>

      <p>Before writing a single line of code, I spent days wireframing, redesigning, and refining the UI until it felt intentional — not templated.</p>

      <img src="assets/lunacommercescreenshot1.png" alt="Luna Commerce screenshot" class="post_inline_img" />

      <h2>Why Vanilla?</h2>
      <p>For the build, I chose pure Vanilla: HTML5, CSS, and JavaScript with ES6 modules. No React. No Tailwind. I wanted to understand how things actually work under the hood — how a cart talks to a product grid, and how state is managed without a framework doing the magic.</p>

      <div class="post_code_block">
        <div class="post_code_block_header">
          <span class="post_code_label">cart.js — ES6 Module Pattern</span>
          <button class="post_code_copy" onclick="copyCode(this)">Copy Code</button>
        </div>
        <pre><code>// cart.js — simple state without a framework
const cart = (() => {
  let items = [];

  const add = (product) => {
    const existing = items.find(i => i.id === product.id);
    if (existing) {
      existing.qty += 1;
    } else {
      items.push({ ...product, qty: 1 });
    }
    render();
  };

  const remove = (id) => {
    items = items.filter(i => i.id !== id);
    render();
  };

  const render = () => {
    // update DOM from state
    document.getElementById('cart-count').textContent = items.length;
  };

  return { add, remove, getItems: () => items };
})();</code></pre>
      </div>

      <h2>Three Weeks on One Bug</h2>
      <p>Midway through, I hit a brutal CSS layout bug. It stalled me for three weeks. When I came back, I stopped patching and started isolating — commenting out blocks until I found the root cause.</p>

      <p>The fix? Deleting one line of code. Five hours. One line. Done.</p>

      <p>That moment taught me more about debugging than any course ever had. The lesson wasn't CSS — it was <em>methodology</em>. Stop patching symptoms. Find the root.</p>

      <img src="assets/lunacommercemockup-portrait.png" alt="Luna Commerce mockup" class="post_inline_img" />

      <h2>Where It Stands Now</h2>
      <p>Luna Commerce now runs with a custom cart system, wishlist functionality, and a smooth browsing experience. Next up is authentication and personalised dashboards.</p>

      <p>Building from scratch isn't about the flex. It's about mastering every moving part.</p>

      <h3>What's Next</h3>
      <p>With E-commerce laid down, I'm moving into Modern News &amp; Blogging, focusing on complex typography and high-performance content delivery.</p>

      <p>You can explore the current build: <a href="https://lnkd.in/d6xd5tmQ" target="_blank" rel="noopener">Luna Commerce Live</a></p>
    `,
  },

  3: {
    id: 3,
    title: '"Say Not, I Am a Child" — The Power of the Words You Tell Yourself',
    excerpt:
      "A post by Kwamena Ofori Bainn that stopped me mid-scroll. Words shape your inner world. Psychology calls it self-talk and the self-fulfilling prophecy. This is why it matters.",
    category: "career",
    date: "March 2026",
    readTime: "2 min read",
    tagLabel: "Career",
    tagClass: "tag_career",
    images: ["assets/bainseatedred.jpeg"],
    linkedinUrl:
      "https://www.linkedin.com/posts/bainn_%F0%9D%97%A6%F0%9D%97%AE%F0%9D%98%86-%F0%9D%97%BB%F0%9D%97%BC%F0%9D%98%81-%F0%9D%97%9C-%F0%9D%97%AE%F0%9D%97%BA-%F0%9D%97%AE-%F0%9D%97%B0%F0%9D%97%B5%F0%9D%97%B6%F0%9D%97%B9%F0%9D%97%B1-activity-7439542283328315392-ir6N",
    author: "Kwamena Ofori Bainn",
    authorRole: "Shared by Debrah Kobby",
    bodyHTML: `
      <p class="post_shared_notice"><i class="fa-solid fa-retweet"></i> This post was originally written by <strong>Kwamena Ofori Bainn</strong>. It resonated with me and I'm sharing it here.</p>

      <img src="assets/bainseatedred.jpeg" alt="Kwamena Ofori Bainn" class="post_inline_img" />

      <blockquote class="post_blockquote">
        "Say not, I am a child." — That is what God said to Jeremiah.
      </blockquote>

      <p>Do not say: <em>"I am dumb." "I am poor." "I am ugly."</em></p>
      <p>Rather say: <strong>"I am intelligent." "I am rich." "I am beautiful."</strong></p>

      <h2>Why Words Matter</h2>
      <p>Words have a direct effect on your being. In psychology, this is closely related to <strong>self-talk</strong> and the <strong>self-fulfilling prophecy</strong> — the idea that what you consistently tell yourself about yourself tends to become true, not through magic, but through the subtle way it shapes your behaviour, your confidence, and your decisions.</p>

      <p>This is why some people struggle with confidence today — because they were told negative things during their childhood, and those words took root.</p>

      <h2>The Practice</h2>
      <p>From today, speak positive words to yourself and to others. Not as hollow affirmations you don't believe, but as a deliberate choice to reframe how you see yourself — until the reframe becomes reality.</p>

      <h3>A Reminder Worth Saving</h3>
      <p>The words you say most often become the story you live. Choose them carefully.</p>
    `,
  },

  4: {
    id: 4,
    title:
      "I've Been Building Websites That Look Good — and Were Quietly Vulnerable",
    excerpt:
      "Several projects in, I realised knowing how to build something without knowing how it breaks is only half the skill. So I started studying the OWASP Top 10 — and now I'm breaking my own projects on purpose.",
    category: "security",
    date: "March 2026",
    readTime: "5 min read",
    tagLabel: "Security",
    tagClass: "tag_security",
    images: [
      "assets/potentialinjectionpointsavedfrom linkedin.jpeg",
      "assets/Screenshot (977).png",
      "assets/Screenshot (978).png",
    ],
    linkedinUrl:
      "https://www.linkedin.com/posts/princesam_websecurity-owasp-cybersecurity-activity-7440430976637251585-p-Iz",
    author: "Debrah Kobby",
    authorRole: "Frontend Engineer",
    bodyHTML: `
      <p>Several websites later, I finally started learning how to build them <em>securely</em>.</p>
      <p>They looked good. They worked. And they were quietly vulnerable. That changes now.</p>

      <h2>Why OWASP?</h2>
      <p>I've been studying the <strong>OWASP Top 10</strong> — the global standard for the most critical web application security risks. Not because a lecturer told me to. Because I realised that knowing how to build something without knowing how it breaks is only half the skill. And most developers never learn the other half.</p>

      <p><strong>Why I'm starting with 2021, not 2025:</strong> The 2025 list exists. But it assumes a level of security maturity I'm still building toward. The 2021 list is where the foundation lives.</p>

      <img src="assets/potentialinjectionpointsavedfrom linkedin.jpeg" alt="Potential injection points diagram" class="post_inline_img" />

      <h2>What I've Covered So Far</h2>

      <h3>A01 — Broken Access Control</h3>
      <p>Access control enforces what authenticated users can do. When it breaks, users can act outside their intended permissions.</p>
      <ul class="post_list">
        <li><strong>Vertical escalation</strong> — a regular user gaining admin privileges</li>
        <li><strong>Horizontal escalation</strong> — a user accessing another user's data</li>
        <li><strong>Context-dependent escalation</strong> — bypassing multi-step workflow rules</li>
      </ul>

      <div class="post_code_block">
        <div class="post_code_block_header">
          <span class="post_code_label">Broken Access Control — Example</span>
          <button class="post_code_copy" onclick="copyCode(this)">Copy Code</button>
        </div>
        <pre><code>// ❌ VULNERABLE: trusting client-side user ID
app.get('/account', (req, res) => {
  const userId = req.query.userId; // attacker can change this
  const data = db.getUserData(userId);
  res.json(data);
});

// ✅ FIXED: use the authenticated session
app.get('/account', requireAuth, (req, res) => {
  const userId = req.session.userId; // from server-side session
  const data = db.getUserData(userId);
  res.json(data);
});</code></pre>
      </div>

      <h3>A03 — Injection</h3>
      <p>Injection flaws occur when unvalidated input is sent to an interpreter as part of a command or query.</p>

      <div class="post_code_block">
        <div class="post_code_block_header">
          <span class="post_code_label">SQL Injection — Classic Example</span>
          <button class="post_code_copy" onclick="copyCode(this)">Copy Code</button>
        </div>
        <pre><code>// ❌ VULNERABLE: string concatenation in SQL
const query = \`SELECT * FROM users WHERE name = '\${userInput}'\`;
// If userInput = "' OR '1'='1", this returns ALL users.

// ✅ FIXED: parameterised queries
const query = 'SELECT * FROM users WHERE name = ?';
db.execute(query, [userInput]);</code></pre>
      </div>

      <img src="assets/Screenshot (977).png" alt="Security testing screenshot" class="post_inline_img" />
      <img src="assets/Screenshot (978).png" alt="Security testing screenshot 2" class="post_inline_img" />

      <h2>Testing My Own Projects</h2>
      <p>I'm now testing three of my own projects for real vulnerabilities:</p>
      <ul class="post_list">
        <li>🏨 <strong>Novera</strong> — Hotel booking app</li>
        <li>🛒 <strong>Luna Commerce</strong> — E-commerce platform</li>
        <li>🖥️ <strong>Portfolio</strong></li>
      </ul>

      <p>In the next posts, I'll share what I find — and how I fix it. The most honest way to learn security is to break something you built yourself.</p>

      <h3>Your Homework</h3>
      <p>If you're building for the web and haven't read the OWASP Top 10, that's your weekend reading: <a href="https://owasp.org/Top10" target="_blank" rel="noopener">owasp.org/Top10</a></p>
    `,
  },

  5: {
    id: 5,
    title: "What My GitHub Contribution Graph Actually Says About Me",
    excerpt:
      "208 contributions. 24 repositories. Some finished, some quietly abandoned. The commit history doesn't care about your intentions — only what you shipped. A brutally honest look at building in public.",
    category: "tools",
    date: "April 2026",
    readTime: "3 min read",
    tagLabel: "Tools",
    tagClass: "tag_tools",
    images: ["assets/Screenshot (1120).png", "assets/Screenshot (1121).png"],
    linkedinUrl:
      "https://www.linkedin.com/posts/princesam_github-opensource-webdevelopment-activity-7452721704612564992-3SBQ",
    author: "Debrah Kobby",
    authorRole: "Frontend Engineer",
    bodyHTML: `
      <p>My GitHub tells me more about myself than I'd sometimes like to admit.</p>

      <p><strong>208 contributions</strong> in the last year. <strong>24 repositories</strong>. Some finished, some quietly abandoned.</p>

      <img src="assets/Screenshot (1120).png" alt="GitHub contribution graph" class="post_inline_img" />

      <h2>The Pattern Doesn't Lie</h2>
      <p>I've got projects I'm proud of — Greyscale Portfolio, Luna Commerce, Project UniMart. And then there are the ones I started with energy and slowly ghosted.</p>

      <p>The ratio of finished to abandoned says more about my follow-through than any CV ever would. The contribution graph is easy to screenshot. The harder thing is sitting with what the gaps actually mean.</p>

      <img src="assets/Screenshot (1121).png" alt="GitHub repositories overview" class="post_inline_img" />

      <h2>What the Numbers Show</h2>
      <p>95% of my activity is commits — mostly building, rarely collaborating in the open. My push history doesn't care about my intentions. Only what I shipped.</p>

      <p>There's a version of "building in public" that's just aesthetics — green squares on a profile. And then there's the honest version, which involves acknowledging what you <em>didn't</em> finish and figuring out why.</p>

      <h2>What I'm Doing About It</h2>
      <p>I'm keeping fewer projects open at once. Finishing before starting. Treating a shipped feature as more valuable than a new repo.</p>

      <h3>A Question for You</h3>
      <p>What do you use to keep yourself honest about how much you're actually creating vs. just planning to?</p>
    `,
  },
};

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

// ── Init ──
document.addEventListener("DOMContentLoaded", () => {
  updatePostCount();
  updateTotalCount();
  attachStaggerDelay();
  initFilterListeners();
  initSearchListener();

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
        security: "Security",
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

  // Top bar
  document.getElementById("post_view_tag").innerHTML =
    `<span class="post_tag ${post.tagClass}">${post.tagLabel}</span>`;
  document.getElementById("post_view_read_time").textContent = post.readTime;
  document.getElementById("post_view_date").textContent = post.date;
  document.getElementById("post_view_title").textContent = post.title;

  // Body
  document.getElementById("post_view_body").innerHTML = post.bodyHTML;

  // Author sidebar
  const authorNameEl = document.getElementById("post_view_author_name");
  const authorRoleEl = document.getElementById("post_view_author_role");
  const authorImgEl = document.querySelector(".post_author_img");
  if (authorNameEl) authorNameEl.textContent = post.author;
  if (authorRoleEl) authorRoleEl.textContent = post.authorRole;
  if (authorImgEl) {
    // Use bainn image for post 3, default for others
    authorImgEl.src =
      id === 3 ? "assets/bainseatedred.jpeg" : "assets/IMG_4646.jpg";
    authorImgEl.alt = post.author;
  }

  // Sidebar "more posts" links
  const sidebarLinks = document.getElementById("post_sidebar_links");
  if (sidebarLinks) {
    sidebarLinks.innerHTML = Object.values(postData)
      .filter((p) => p.id !== id)
      .slice(0, 4)
      .map(
        (p) => `
        <div class="post_nav_link_item" onclick="openPost(${p.id})">
          <div class="post_nav_link_tag">${p.tagLabel}</div>
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

  // Share links
  const pageUrl = encodeURIComponent(window.location.href);
  const shareTitle = encodeURIComponent(post.title);
  const twitterLink = document.getElementById("share_twitter");
  const linkedinShareLink = document.getElementById("share_linkedin");
  const viewOnLinkedin = document.getElementById("view_on_linkedin");

  if (twitterLink)
    twitterLink.href = `https://twitter.com/intent/tweet?text=${shareTitle}&url=${pageUrl}`;
  if (linkedinShareLink)
    linkedinShareLink.href = `https://www.linkedin.com/sharing/share-offsite/?url=${pageUrl}`;
  if (viewOnLinkedin && post.linkedinUrl)
    viewOnLinkedin.href = post.linkedinUrl;

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
document
  .querySelector(".newsletter_form")
  .addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.querySelector(".newsletter_email").value;
    const btn = document.querySelector(".shared_subscribe_button");

    btn.textContent = "Checking...";
    btn.disabled = true;

    try {
      const response = await fetch("/.netlify/functions/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (data.status === "already_subscribed") {
        btn.textContent = "Subscribe";
        btn.disabled = false;
        alert("This email is already subscribed to the newsletter!");
        document.querySelector(".newsletter_email").value = "";
        return;
      }

      if (data.status === "subscribed") {
        btn.textContent = "Subscribed";
        btn.disabled = false;
        document.querySelector(".newsletter_email").value = "";
      } else {
        btn.textContent = "Subscribe";
        btn.disabled = false;
        alert("Something went wrong, please try again.");
      }
    } catch (err) {
      btn.textContent = "Subscribe";
      btn.disabled = false;
      alert("Network error, please try again.");
    }
  });
