// Changes year in copyright function

const copyright = document.querySelector(".copyright-year");

copyright.textContent = new Date().getFullYear();

// Hamburger menu nav function

const btnNav = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

function changer() {
  headerEl.classList.toggle("nav-open");
}

btnNav.addEventListener("click", changer);
