const openBtn = document.querySelector("#open-btn");
const closeBtn = document.querySelector("#close-btn");
const nav = document.querySelector(".container");


openBtn.addEventListener("click", () => {
  nav.style.width = "100%";
  openBtn.style.transform = "rotate(90deg)";
});

closeBtn.addEventListener("click", () => {
  nav.style.width = "0%";
  openBtn.style.transform = "rotate(0deg)";
});