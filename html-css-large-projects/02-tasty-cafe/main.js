// main.js
window.addEventListener("scroll", () =>
  document.querySelector("nav").classList.toggle("scrolled", window.scrollY > 10)
);
