// Your code goes here
// Variables
const funBus = document.querySelector(".logo-heading");
const funBusTitle = document.querySelector("title");
const header = document.querySelector(".main-navigation");
const img = document.querySelectorAll("img");
const footer = document.querySelector("footer");
const body = document.querySelector("body");
// Added mouse enter event listener
funBus.addEventListener("mouseenter", function () {
  funBus.style.color = "blue";
  funBus.style.fontSize = "5em";
});
// Added mouse leave event listener
funBus.addEventListener("mouseleave", function () {
  funBus.style.color = "black";
  funBus.style.fontSize = "10em";
});
// Stopped Nav items from refreshing the page
Array.from(document.links).forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
  });
});
// Added mouse double click
body.addEventListener("dblclick", () => {
  body.style.color = "crimson";
  funBusTitle.textContent = "WELCOME TO PARADISE";
});

// Added key down
body.addEventListener("keydown", () => {
  body.style.backgroundColor = "gold";
  header.style.backgroundColor = "gold";
  footer.style.backgroundColor = "gold";
});

// Added key up
body.addEventListener("keyup", () => {
  body.style.color = "white";
  body.style.fontWeight = "bold";
});

// Added scroll
document.addEventListener("scroll", () => {
  funBusTitle.textContent = "👀👀 I see you scrolling 👀👀";
});
// Added Keypress
img.addEventListener("keyboardpress", () => {
  img.style.borderRadius = "900px";
  event.stopPropagation();
});
img.addEventListener("keyboardpress", () => {
  img.style.border = "none";
});
