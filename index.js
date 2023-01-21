let slides = document.querySelectorAll(".slide");
const previous = document.querySelector(".previous");
const next = document.querySelector(".next");

let currentSlide = 0;

// hide all slider
slides.forEach((slide) => {
  slide.style.display = "none";
});

// show current slide
slides[currentSlide].style.display = "block";

function changeSlide() {
  slides[currentSlide].style.display = "none";
  // increment current slide
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].style.display = "block";
}

// changeing slide after 3 sec
setInterval(changeSlide, 3000);

// slide changeing by button //

// previous button
previous.addEventListener("click", function () {
  slides[currentSlide].style.display = "none";
  currentSlide = (currentSlide + slides.length - 1) % slides.length;
  slides[currentSlide].style.display = "block";
});

// next button
next.addEventListener("click", function () {
  slides[currentSlide].style.display = "none";
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].style.display = "block";
});

// left and right for sction

const leftBtns = document.querySelectorAll(".left-btn");
const rightBtns = document.querySelectorAll(".right-btn");

const secCards = document.querySelectorAll(".sec-cards");
// const clWidth = document.querySelector(".sec-cards").clientWidth;


for (let i = 0; i < leftBtns.length; i++) {
  // left
  leftBtns[i].addEventListener("click", function () {
    // secCard.scrollLeft+=-clWidth;
    let cardWidth=0;
    let intervalId = setInterval(function () {
      if (cardWidth+50 > secCards[i].clientWidth) {
        clearInterval(intervalId);
      }
      cardWidth += 50;
      secCards[i].scrollLeft += -50;
    }, 50);
  });

  // right
  rightBtns[i].addEventListener("click", function () {
    // secCard.scrollLeft+=clWidth;
    let cardWidth=0;
    let intervalId = setInterval(function () {
      if (cardWidth+50 > secCards[i].clientWidth) {
        clearInterval(intervalId);
      }
      cardWidth += 50;
      secCards[i].scrollLeft += 50;
    }, 50);

  });

}

// SIDE NAV 

const cross=document.querySelector('.cross');
const bars=document.querySelector('.bars');
const sideNav=document.querySelector('.side-nav');

cross.addEventListener('click',function(){
  sideNav.style.width=`${0}px`;
});
bars.addEventListener('click',function(){
  sideNav.style.width='70%';
});