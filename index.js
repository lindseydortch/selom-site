"use strict"

// HERO TITLE BOX ANIMATION 

// HERO LEADER ANIMATION


// SKILLSET ANIMATION 
const skills = document.querySelectorAll('.skills')

skills.forEach((skill, index) => {
  skill.style.transform = `translateX(${index * 100}%)`
})

// current slide counter
let curSlide = 0
let maxSlide = skills.length - 1

// select next slide button
const nextSlide = document.querySelector(".btn-next")
const prevSlide = document.querySelector(".btn-prev")

// add event listener and next slide functionality
nextSlide.addEventListener("click", function () {
  // check if current slide is the last and reset current slide
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  skills.forEach((skill, index) => {
    skill.style.transform = `translateX(${100 * (index - curSlide)}%)`
  })
})

prevSlide.addEventListener("click", function () {
  // check if current slide is the first and reset current slide to last
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--
  }

  //   move slide by 100%
  skills.forEach((skill, index) => {
    skill.style.transform = `translateX(${100 * (index - curSlide)}%)`
  })
})