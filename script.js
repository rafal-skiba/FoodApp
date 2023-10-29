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

    // scroll to other links

    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // close mobile navigation if we clicked on link
    if (link.classList.contains("nav-link")) {
      headerEl.classList.toggle("nav-open");
    }
  });
});

// Sticky nav if we don't see visible of hero section

const sectionHeroEl = document.querySelector(".section-hero");

const observer = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (!ent.isIntersecting) {
      document.querySelector(".header").classList.add("sticky");
      sectionHeroEl.style.marginTop = "8rem";
    }
    if (ent.isIntersecting) {
      document.querySelector(".header").classList.remove("sticky");
      sectionHeroEl.style.marginTop = "0";
    }
  },
  {
    // in the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
observer.observe(sectionHeroEl);
