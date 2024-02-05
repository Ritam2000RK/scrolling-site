// Dynamic Date
const date = document.getElementById('copyrightDate');

const currentDate = new Date();
console.log(currentDate.getFullYear());
date.innerHTML = `${currentDate.getFullYear()}`;

//
const toggleBtn = document.querySelector('.nav-toggle');
const displayContainer = document.querySelector('.link-container');
const links = document.querySelector('.links');

toggleBtn.addEventListener('click', () => {
    // if(!displayLinks.classList.contains('show-links')) {
    //     displayLinks.classList.add('show-links');
    // }else{
    //     displayLinks.classList.remove('show-links');
    // }
    const containerHeight = displayContainer.getBoundingClientRect().height;
    const linkHeight = links.getBoundingClientRect().height;
    if(containerHeight === 0) {
        displayContainer.style.height = `${linkHeight}px`;
    }else{
        displayContainer.style.height = `0px`;
    }
})

