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

// Scroll behavior: smooth

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const href = link.getAttribute("href");

    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
  });
});
