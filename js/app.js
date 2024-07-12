// navBar responsive 
let menuBtn = document.querySelector(".menuBtn");
let navBar = document.querySelector("nav");
function menuButton(){

    navBar.classList.add("active");




}

menuBtn.addEventListener("click", menuButton);
let cancelBtn = document.querySelector(".cancelBtn");
let background = document.querySelector(".background");
function cancelButton(){
    navBar.classList.remove("active");

}
cancelBtn.addEventListener("click", cancelButton);
background.addEventListener("click", cancelButton);


// bannerSlider

let nextBtn = document.querySelector(".nextBtn");
let bannerSlider = document.querySelector(".bannerSlider");
let bannerImages = document.querySelectorAll(".bannerSlide");
let count = 0;
let length = bannerImages.length;

function nextButton () {

    count++;
    bannerSlider.style.transform = `translateX(-${count*100}%)`;
    bannerSlider.style.transition = `0.5s`;


    if(count == length){
        count = 0;
        bannerSlider.style.transform = `translateX(0%)`;
    }

}

nextBtn.addEventListener("click", nextButton);

let prevBtn = document.querySelector(".prevBtn");

function prevButton () {
    if(count == 0){
        count = length - 1;
        bannerSlider.style.transform = `translateX(-${count*100}%)`;

    } else{
        count--;
        bannerSlider.style.transform = `translateX(-${count*100}%)`;
        bannerSlider.style.transition = `0.5s`;

    }

}


prevBtn.addEventListener("click", prevButton);