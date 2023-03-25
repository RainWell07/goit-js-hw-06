const ColorButton = document.querySelector(".change-color");
const ColorSpan = document.querySelector(".color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changeBackgroundColor() {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  ColorSpan.textContent = randomColor;
}

ColorButton.addEventListener("click", changeBackgroundColor);