const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
let currentSlide = 0;

function showSlide(n) {
  slides[currentSlide].classList.remove("current");
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add("current");
}

prevBtn.addEventListener("click", () => {
  showSlide(currentSlide - 1);
});

nextBtn.addEventListener("click", () => {
  showSlide(currentSlide + 1);
});
