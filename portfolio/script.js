document.addEventListener("DOMContentLoaded", () => {
  // mobile nav toggle
  const menuBtn = document.getElementById("menuBtn");
  const nav = document.getElementById("nav");
  if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => {
      nav.style.display = (nav.style.display === "block") ? "" : "block";
    });
  }

  // smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener("click", e => {
      const href = a.getAttribute("href");
      if (!href || href === "#") return;
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) target.scrollIntoView({ behavior: "smooth" });
      if (window.innerWidth < 900 && nav) nav.style.display = "";
    });
  });

  // contact form demo
  const form = document.getElementById("contactForm");
  const formMsg = document.getElementById("formMsg");
  if (form) {
    form.addEventListener("submit", e => {
      e.preventDefault();
      if (formMsg) formMsg.textContent = "Message captured (demo only)";
      form.reset();
    });
  }

  // profile: show image if it loads, else show SVG icon
  const img = document.getElementById("profileImg");
  const wrapper = document.getElementById("profileWrapper");
  if (img && wrapper) {
    img.addEventListener("load", () => {
      wrapper.classList.remove("show-svg");
      wrapper.classList.add("show-img");
      console.log("Profile image loaded.");
    });
    img.addEventListener("error", () => {
      wrapper.classList.remove("show-img");
      wrapper.classList.add("show-svg");
      console.warn("Profile image failed — showing SVG icon.");
    });
    // small timeout check (cached images)
    setTimeout(() => {
      if (img.naturalWidth && img.naturalWidth > 0) {
        wrapper.classList.add("show-img");
        wrapper.classList.remove("show-svg");
      } else {
        wrapper.classList.add("show-svg");
        wrapper.classList.remove("show-img");
      }
    }, 200);
  } else if (wrapper) {
    // if no img present at all, show the SVG
    wrapper.classList.add("show-svg");
  }
});
