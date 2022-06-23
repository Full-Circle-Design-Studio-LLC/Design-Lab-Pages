const hamburgerMenu = document.querySelector(".hamburger-menu");
const hamburgerTopLine = document.querySelector(".hamburger-menu-top-line");
const hamburgerBottomLine = document.querySelector(".hamburger-menu-bottom-line");
const navItems = document.querySelector(".nav-items");



// nav item dropdowns
const navItem1 = document.querySelector(".nav-item-1");
const navItem2 = document.querySelector(".nav-item-2");
const navItem3 = document.querySelector(".nav-item-3");
const nav1Img = document.querySelector(".nav-1-img");
const nav2Img = document.querySelector(".nav-2-img");
const nav3Img = document.querySelector(".nav-3-img");
const nav1Sub = document.querySelector(".nav-1-sub-items");
const nav2Sub = document.querySelector(".nav-2-sub-items");
const nav3Sub = document.querySelector(".nav-3-sub-items");

i = 0;
c = 0;
f = 0;


// opens mobile nav menu and triggers
function openNavMenu() {
  navItems.classList.remove("nav-items-initial");
  navItems.classList.toggle("nav-items-show");

  // if nav item is currently open, close it
  if (navItem1.classList.contains("nav-item-orange")) {
    nav1();
  }
  if (navItem2.classList.contains("nav-item-orange")) {
    nav2();
  }
  if (navItem3.classList.contains("nav-item-orange")) {
    nav3();
  }


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


function nav1() {
  if (i < 1) {
    nav1Img.classList.toggle("nav-item-rotate");
    navItem1.classList.toggle("nav-item-orange");
    nav1Sub.classList.toggle("show-sub-items");
    i += 1;
  } else {
    nav1Img.classList.toggle("nav-item-rotate");
    nav1Img.classList.toggle("nav-rotate-back");
    navItem1.classList.toggle("nav-item-orange");
    nav1Sub.classList.toggle("show-sub-items");

  }
  navItem2.classList.toggle("slide-off");
  navItem3.classList.toggle("slide-off");
}

function nav2() {
  if (c < 1) {
    nav2Img.classList.toggle("nav-item-rotate");
    navItem2.classList.toggle("nav-item-orange");
    navItem2.classList.toggle("move-up");
    nav2Sub.classList.toggle("show-sub-items");
    c += 1;
  } else {
    nav2Img.classList.toggle("nav-item-rotate");
    nav2Img.classList.toggle("nav-rotate-back");
    navItem2.classList.toggle("nav-item-orange");
    navItem2.classList.toggle("move-up");
    nav2Sub.classList.toggle("show-sub-items");

  }
  navItem1.classList.toggle("slide-off");
  navItem3.classList.toggle("slide-off");
}

function nav3() {
  if (f < 1) {
    nav3Img.classList.toggle("nav-item-rotate");
    navItem3.classList.toggle("nav-item-orange");
    navItem3.classList.toggle("move-up-far");
    nav3Sub.classList.toggle("show-sub-items");
    f += 1;
  } else {
    nav3Img.classList.toggle("nav-item-rotate");
    nav3Img.classList.toggle("nav-rotate-back");
    navItem3.classList.toggle("nav-item-orange");
    navItem3.classList.toggle("move-up-far");
    nav3Sub.classList.toggle("show-sub-items");
  }
  navItem1.classList.toggle("slide-off");
  navItem2.classList.toggle("slide-off");
}
