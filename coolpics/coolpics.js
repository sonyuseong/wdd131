document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu-links");

  toggle.addEventListener("click", () => {
    menu.classList.toggle("show");
  });
  const gallery = document.querySelector(".gallery");
  const modal = document.querySelector("#modal");
  const modalImage = document.querySelector("#modal-image");
  const closeButton = document.querySelector(".close-viewer");

  gallery.addEventListener("click", (event) => {
    const clickImg = event.target.closest("img");
    if (!clickImg) return;

    const smallImg = clickImg.getAttribute("src");
    const fullImg = smallImg.split("-")[0] + "-full.jpeg";

    modalImage.src = fullImg;
    modalImage.alt = clickImg.alt;

    modal.showModal();
  });

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.close();
    }
  });
});
