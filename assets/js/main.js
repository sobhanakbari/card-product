const blueBtn = document.getElementById("blue");
const redBtn = document.getElementById("red");
const blackBtn = document.getElementById("black");

let itemImages = document.getElementsByTagName("img");

blueBtn.addEventListener("click", () => {
  itemImages[0].classList.add("active");
  itemImages[1].classList.remove("active");
  itemImages[2].classList.remove("active");
});
redBtn.addEventListener("click", () => {
  itemImages[1].classList.add("active");
  itemImages[0].classList.remove("active");
  itemImages[2].classList.remove("active");
});
blackBtn.addEventListener("click", () => {
  itemImages[0].classList.remove("active");
  itemImages[1].classList.remove("active");
  itemImages[2].classList.add("active");
});
