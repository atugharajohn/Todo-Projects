let msgDisplay = document.querySelector(".msgDisplay");
let btn = document.querySelector(".btn");
let form = document.querySelector(".form");

let color = "";
let randomColor = [
  "red",
  "yellow",
  "blue",
  "pink",
  "black",
  "voilet",
  "linkblue",
  "green",
  "aqua",
  "aquamarine",
  "blueviolet",
  "chartreuse",
  "coral",
  "cornflowerblue",
  "crimson",
  "darkmagenta",
  "darkorchid",
  "darkturquoise",
  "darkviolet",
  "deeppink",
  "deepskyblue",
  "dodgerblue",
  "fuchsia",
  "gold",
  "greenyellow",
  "hotpink",
  "indigo",
  "lavender",
  "lawngreen",
  "lightblue",
  "lightcoral",
  "lightgreen",
  "lightpink",
  "lightsalmon",
  "lightseagreen",
  "lightskyblue",
  "lime",
  "limegreen",
  "magenta",
  "mediumaquamarine",
  "mediumblue",
  "mediumorchid",
  "mediumpurple",
  "mediumseagreen",
  "mediumslateblue",
  "mediumspringgreen",
  "mediumturquoise",
  "mediumvioletred",
  "orangered",
  "orchid",
  "palegreen",
  "palevioletred",
  "plum",
  "powderblue",
  "rebeccapurple",
  "royalblue",
  "seagreen",
  "skyblue",
  "slateblue",
  "springgreen",
  "steelblue",
  "teal",
  "tomato",
  "turquoise",
  "violet",
  "whitesmoke",
  "yellowgreen",
];
random = () => {
  let randomValue = Math.floor(Math.random() * randomColor.length);
  return randomValue;
};
BackgroundShow = () => {
  color = random();
  // change the body of color
  document.querySelector("body").style.background = `${randomColor[color]}`;
  // display messages in the message box
  msgDisplay.innerHTML = `Background - color : ${randomColor[color]}`;
};
form.addEventListener("submit", (e) => {
  BackgroundShow();
});

document.addEventListener("DOMContentLoaded", (e) => {
  BackgroundShow();
});
