let leftBtn = document.querySelector(".left-btn");
let rightBtn = document.querySelector(".right-btn");
let generateBtn = document.querySelector(".generate-btn");
let codeVal = document.querySelector(".code-container");

let rgb1 = "";
let rgb2 = "";

let myHexValues = () => {
  let hexValue = "0123456789abcdef";
  let color = "#";
  for (i = 0; i < 6; i++) {
    color = color + hexValue[Math.floor(Math.random() * hexValue.length)];
  }
  return color;
};

function randomGenerate() {
  let color1 = myHexValues();
  let color2 = myHexValues();
  document.body.style.backgroundImage = `linear-gradient(to right, ${color1},  ${color2}`;
  codeVal.innerHTML = ` background-image: linear-gradient(To Right, ${color1}, ${color2});`;
  leftBtn.innerHTML = `${color1}`;
  rightBtn.innerHTML = `${color2}`;
  // console.log(color1, color2);

  console.log(rgb1);
}
leftBtn.addEventListener("click", () => {
  rgb1 = myHexValues();
  document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
  codeVal.innerHTML = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
  leftBtn.innerHTML = `${rgb1}`;
});

rightBtn.addEventListener("click", () => {
  rgb2 = myHexValues();
  document.body.style.backgroundImage = `linear-gradient(to right,${rgb2}, ${rgb1} )`;
  codeVal.innerHTML = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
  rightBtn.innerHTML = `${rgb2}`;
});

generateBtn.addEventListener("click", () => {
  return randomGenerate();
});

codeVal.addEventListener("click", () => {
  navigator.clipboard.writeText(codeVal.innerText);
  alert("copied");
});

document.load = randomGenerate();
