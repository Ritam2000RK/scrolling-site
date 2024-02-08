// Dynamic Date
const date = document.getElementById("copyrightDate");

const currentDate = new Date();
console.log(currentDate.getFullYear());
date.innerHTML = `${currentDate.getFullYear()}`;

//
const toggleBtn = document.querySelector(".nav-toggle");
const displayContainer = document.querySelector(".link-container");
const links = document.querySelector(".links");
const videoContainer = document.querySelector(".video-container");
const navHeader = document.querySelector(".nav-header");
// const mainContent = document.getElementById("main");
const navCenter = document.querySelector(".nav-center");
const nav = document.getElementById("nav");

let navHeaderHeight;
let linkHeight;
let containerHeight;
//totalHeight has problem because if values are null in linkHeight and navHeaderHeight then it can lead to NaN. I'will fix this later.
// let totalHeight = navHeaderHeight + linkHeight;

toggleBtn.addEventListener("click", () => {
  // if(!displayLinks.classList.contains('show-links')) {
  //     displayLinks.classList.add('show-links');
  // }else{
  //     displayLinks.classList.remove('show-links');
  // }
  navHeaderHeight = navHeader.getBoundingClientRect().height;
  containerHeight = displayContainer.getBoundingClientRect().height;

  if (containerHeight === 0) {
    linkHeight = links.getBoundingClientRect().height;
    // let totalHeight = navHeaderHeight + linkHeight;

    displayContainer.style.height = `${linkHeight}px`;
    // videoContainer.style.marginTop = `${totalHeight}px`;
    // mainContent.style.marginTop = `${totalHeight}px`;
  } else {
    displayContainer.style.height = 0;
    // videoContainer.style.marginTop = `${navHeaderHeight}px`;
    // mainContent.style.marginTop = `${navHeaderHeight}px`;
  }
});

window.addEventListener("scroll", () => {
  const arrowBtn = document.getElementById("arrowBtn");
  const scrollTop = window.scrollY;
  const linkHeight = navCenter.getBoundingClientRect().height;
  if (scrollTop >= linkHeight) {
    nav.classList.add("fixed-nav");
  } else {
    nav.classList.remove("fixed-nav");
  }

  if (scrollTop > 500) {
    arrowBtn.classList.add("show-arrowBtn");
  } else {
    arrowBtn.classList.remove("show-arrowBtn");
  }

  arrowBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});

const scrollLink = document.querySelectorAll(".scroll-link");

// hopping through all the links with the help of foreach iterator

scrollLink.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    const id = event.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);

    const navHeight = nav.getBoundingClientRect().height;
    const containerHeight = displayContainer.getBoundingClientRect().height;
    const fixedNav = nav.classList.contains("fixed-nav");
    let position = element.offsetTop - navHeight;

    if (!fixedNav) {
      // 18 is just a calculative number I will fix this later
      position = position - 18;
    }

    if(navHeight > 82) {
      position = position + containerHeight;
    }

    window.scrollTo({
      left: 0,
      top: position,
    });
    displayContainer.style.height = 0;
  });
});
