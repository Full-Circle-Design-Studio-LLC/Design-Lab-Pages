const hamburgerMenu = document.querySelector(".hamburger-menu");
const hamburgerTopLine = document.querySelector(".hamburger-menu-top-line");
const hamburgerBottomLine = document.querySelector(".hamburger-menu-bottom-line");
const navItems = document.querySelector(".nav-items");

function openNavMenu() {
  navItems.classList.remove("nav-items-initial");
  navItems.classList.toggle("nav-items-show");
  if (hamburgerTopLine.classList.length === 1) {
    hamburgerTopLine.classList.toggle("hamburger-menu-top-line-x");
    hamburgerBottomLine.classList.toggle("hamburger-menu-bottom-line-x");
  } else {
    hamburgerTopLine.classList.toggle("hamburger-menu-top-line-revert");
    hamburgerBottomLine.classList.toggle("hamburger-menu-bottom-line-revert");
    hamburgerTopLine.classList.toggle("hamburger-menu-top-line-x");
    hamburgerBottomLine.classList.toggle("hamburger-menu-bottom-line-x");
  }




}
