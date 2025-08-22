// js/theme.js
document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;

  themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark");
    body.classList.toggle("light");

    // Animate icon change
    if (body.classList.contains("dark")) {
      themeToggle.textContent = "☀️";
    } else {
      themeToggle.textContent = "🌙";
    }

    // Save preference in localStorage
    localStorage.setItem("theme", body.classList.contains("dark") ? "dark" : "light");
  });

  // Load preference
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    body.classList.remove("light", "dark");
    body.classList.add(savedTheme);
    themeToggle.textContent = savedTheme === "dark" ? "☀️" : "🌙";
  }
});
