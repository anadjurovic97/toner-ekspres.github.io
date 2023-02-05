const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar_menu");

//Display Mobile Menu

function mobileMenu() {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
}

menu.addEventListener("click", mobileMenu);

const open = document.getElementById("open");
const modal_container = document.getElementById("modal_container");
const close = document.getElementById("close");

open.addEventListener("click", () => {
  modal_container.classList.add("show");
});

close.addEventListener("click", () => {
  modal_container.classList.remove("show");
});
