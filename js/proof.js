const hamburgerMenu = document.querySelector(".hamburger-menu");
const hamburgerTopLine = document.querySelector(".hamburger-menu-top-line");
const hamburgerBottomLine = document.querySelector(".hamburger-menu-bottom-line");
const navItems = document.querySelector(".nav-items");
const eachNavItem = document.querySelectorAll(".nav-item");
let menu;

searchDiv = document.querySelector(".search");



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
const eachNavSubItem = document.querySelectorAll(".nav-subs");

i = 0;
c = 0;
f = 0;
menuCounter = 1;


// opens mobile nav menu and triggers
function openNavMenu() {
  navItems.classList.remove("nav-items-initial");
  navItems.classList.toggle("nav-items-show");

  // this block of code sets limit to one menu click every .3s
  hamburgerMenu.onclick = "";
  setTimeout(() => {
    hamburgerMenu.onclick = function onclick(event) {openNavMenu()};
  }, 300)

  if (menu === "closed") {
    eachNavItem.forEach(item => item.style.display = "block");
  }

  // opening menu or closing menu if statement
  if (menuCounter % 2 === 1) {
  } else  /*closing menu*/ {
    if (navItem1.classList.contains("nav-item-orange") || navItem2.classList.contains("nav-item-orange") || navItem3.classList.contains("nav-item-orange")) {
      eachNavItem.forEach(item => item.style.display = "none");
      menu = "closed";
    }

    // set sub-item display to none, then back to grid for less jumpy transition
    eachNavSubItem.forEach(item => {
      item.style.display = "none";
      setTimeout(() => {
        item.style.display = "grid"
      }, 400)
    })
  }

  // if display is none for nav items, set back to block
  if (navItem1.style.display === "none") {
    eachNavItem.forEach(item => item.style.display = "block");
  }

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

  // if search menu is open, close it and reset nav items
  if (searchDiv.classList.contains("search-show")) {
    searchDiv.classList.toggle("search-show");

    // set nav items to display none, then wait and set them back to block
    eachNavItem.forEach((item) => {
      item.style.display = "none";

      // setTimeout(() => {
      //   item.style.display = "block";
      // }, 400)
    });

    navItem1.classList.toggle("slide-off");
    navItem2.classList.toggle("slide-off");
    navItem3.classList.toggle("slide-off");
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
  menuCounter += 1;
}


// open/close nav item 1
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


function closeNavItems() {

}

// open/close nav item 2
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

// open/close nav item 3
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



function search() {

  searchDiv.classList.toggle("search-show");

  // if a single nav item is open, close it
  // else (if none are open) close nav items
  navItem1.classList.toggle("slide-off");
  navItem2.classList.toggle("slide-off");
  navItem3.classList.toggle("slide-off");
}
