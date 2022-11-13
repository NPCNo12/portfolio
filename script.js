const headerEl = document.querySelector(".navbar");
const linkEl = document.querySelectorAll(".header--link");
const projectContainer = document.querySelector(".project--grid");
const projectEl = document.querySelectorAll(".project");

// this code is to add effect for navbar, might need refactoring, but we all know we're not going to do it.
headerEl.addEventListener("mouseover", function (e) {
  const enter = e.target;
  if (enter.classList.contains("header--link")) {
    linkEl.forEach((link) => {
      link.classList.remove("active");
      enter.classList.add("active");
      if (!link.classList.contains("active")) {
        link.style.filter = `blur(2px)`;
      }
    });
  }
});

headerEl.addEventListener("mouseout", function (e) {
  const enter = e.target;
  if (enter.classList.contains("header--link")) {
    linkEl.forEach((link) => {
      link.classList.remove("active");
      enter.classList.add("active");
      if (!link.classList.contains("active")) {
        link.style.filter = `blur(0)`;
      }
    });
  }
});

// showing link when clicked
projectEl.forEach((project) =>
  project.addEventListener("click", function () {
    const link = project.querySelector(".project--link");
    link.classList.toggle("hidden");
  })
);

const proSectionEl = document.querySelector(".project--container");
const navEl = document.querySelector(".header-container");

const obsCallback = function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      navEl.classList.add("sticky");
    } else {
      navEl.classList.remove("sticky");
    }
  });
};
const obsOptions = {
  root: null,
  threshold: 0.1,
};
const obs = new IntersectionObserver(obsCallback, obsOptions);

obs.observe(proSectionEl);

const mobileBtn = document.querySelector(".setting-img");
const headerContainer = document.querySelector(".header-container");
mobileBtn.addEventListener("click", function () {
  headerContainer.classList.toggle("navbar-open");
});
