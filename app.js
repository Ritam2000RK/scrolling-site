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
const mainContent = document.getElementById("main");

toggleBtn.addEventListener("click", () => {
  // if(!displayLinks.classList.contains('show-links')) {
  //     displayLinks.classList.add('show-links');
  // }else{
  //     displayLinks.classList.remove('show-links');
  // }
  const navHeaderHeight = navHeader.getBoundingClientRect().height;
  const containerHeight = displayContainer.getBoundingClientRect().height;

  if (containerHeight === 0) {
    const linkHeight = links.getBoundingClientRect().height;

    const totalHeight = navHeaderHeight + linkHeight;

    displayContainer.style.height = `${linkHeight}px`;
    videoContainer.style.marginTop = `${totalHeight}px`;
    mainContent.style.marginTop = `${totalHeight}px`;
  } else {
    displayContainer.style.height = `0px`;
    videoContainer.style.marginTop = `${navHeaderHeight}px`;
    mainContent.style.marginTop = `${navHeaderHeight}px`;
  }
});
