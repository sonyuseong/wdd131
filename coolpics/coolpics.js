document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu-links");

  toggle.addEventListener("click", () => {
    menu.classList.toggle("show");
  });
});
