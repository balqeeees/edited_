const burger = document.querySelector(".burger");
const center = document.querySelector(".center");

burger.addEventListener("click", () => {
  center.classList.toggle("active");
});

document.addEventListener("click", (e) => {
  if (!center.classList.contains("active")) return;
  const clickInside =
    e.target.closest(".center") || e.target.closest(".burger");
  if (!clickInside) center.classList.remove("active");
});

document.getElementById("year").textContent = new Date().getFullYear();

const slides = document.querySelectorAll(".carousel img");
let current = 0;
function showNextSlide() {
  slides[current].classList.remove("active");
  current = (current + 1) % slides.length;
  slides[current].classList.add("active");
}
setInterval(showNextSlide, 4000);

document.querySelector(".signup-btn").onclick = () => {
  window.location.href = "./signup.html";
};
document.querySelector(".login-btn").onclick = () => {
  window.location.href = "./login.html";
};
