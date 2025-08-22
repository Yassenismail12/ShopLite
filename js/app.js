// js/app.js
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-link");
  const pages = document.querySelectorAll(".page");

  // Page switching with animation
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.dataset.page;

      // Update active link
      navLinks.forEach((lnk) => lnk.classList.remove("active"));
      link.classList.add("active");

      // Animate page transition
      pages.forEach((page) => {
        if (page.id === targetId) {
          page.classList.add("fade-in");
          page.classList.add("active");
        } else {
          page.classList.remove("active");
          page.classList.remove("fade-in");
        }
      });
    });
  });
});
