(function () {
  var path = (location.pathname || "/").replace(/\/index\.html$/, "/");
  if (path.length > 1 && path.endsWith("/")) { /* keep */ }
  function active(href) {
    var h = href.replace(/\/$/, "") || "/";
    var p = path.replace(/\/$/, "") || "/";
    if (h === "/") return p === "/";
    return p === h || p.indexOf(h + "/") === 0;
  }
  var links = [
    { href: "/", label: "Home" },
    { href: "/enter/", label: "Enter" },
    { href: "/free/", label: "Free Pack" },
    { href: "/shop/", label: "Shop" },
    { href: "/club/", label: "Club" },
    { href: "/courses/ai-made-simple/", label: "Courses" },
    { href: "/tools/", label: "Tools" }
  ];
  var navHtml = links.map(function (l) {
    return '<li><a href="' + l.href + '"' + (active(l.href) ? ' class="active"' : "") + ">" + l.label + "</a></li>";
  }).join("") +
    '<li><a class="nav-cta" href="https://aicaption.ai" target="_blank" rel="noopener">AI Caption</a></li>';

  var header = document.getElementById("site-header");
  if (header) {
    header.innerHTML =
      '<a class="skip-link" href="#main">Skip to content</a>' +
      '<div class="container nav">' +
      '<a class="logo" href="/">Kenjy <span>Optimistic</span></a>' +
      '<ul class="nav-links">' + navHtml + "</ul></div>";
  }

  var footer = document.getElementById("site-footer");
  if (footer) {
    footer.innerHTML =
      '<div class="container">' +
      '<p><strong class="neon-text">Kenjy Optimistic</strong> — Teach beginners to make money with AI</p>' +
      '<p class="tagline" style="letter-spacing:0.08em;margin:0.5rem 0">LEARN AI. BUILD YOUR BRAND. CREATE CONTENT. MAKE MONEY.</p>' +
      '<div class="footer-links">' +
      '<a href="/enter/">Enter</a>' +
      '<a href="/free/">Free Pack</a>' +
      '<a href="/club/">AI Money Club</a>' +
      '<a href="/shop/">Shop</a>' +
      '<a href="/tools/">Tools</a>' +
      '<a href="/website-package/">Website Package</a>' +
      '<a href="https://www.tiktok.com/@kenjy_optimistic" target="_blank" rel="noopener">TikTok</a>' +
      '<a href="mailto:askkenjy@gmail.com">askkenjy@gmail.com</a>' +
      "</div>" +
      '<div class="footer-disclosure">' +
      '<a class="footer-disclosure-link" href="/affiliates/">Affiliate Disclosure</a>' +
      '<p>This website may contain affiliate links. If you buy through them, Kenjy Optimistic may earn a commission at no extra cost to you. <a href="/affiliates/">Read the full disclosure</a>.</p>' +
      "</div>" +
      "<p style=\"font-size:0.8rem;margin-top:1rem\">© " + new Date().getFullYear() + " Kenjy Optimistic. Results not guaranteed. Educational content only.</p>" +
      "</div>";
  }

  /* Wire Stripe / affiliate placeholders from config */
  document.querySelectorAll("[data-config]").forEach(function (el) {
    var key = el.getAttribute("data-config");
    var cfg = window.KENJY_CONFIG || {};
    var url = cfg[key];
    if (url && url !== "#") {
      if (el.tagName === "A") {
        el.setAttribute("href", url);
        if (key.indexOf("AFFILIATE_") === 0) {
          el.setAttribute("rel", "noopener sponsored");
          el.setAttribute("target", "_blank");
        }
      }
    }
  });
})();
