let btn = document.querySelector(".btn");
let img1 = document.querySelector(".img1");
let img2 = document.querySelector(".img2");
let result = document.querySelector(".result");
value1 = "";
value2 = "";

function randomNumber() {
  let randomValue = Math.floor(Math.random() * 6) + 1;
  return randomValue;
}

btn.addEventListener("click", () => {
  //   debugger;
  value1 = randomNumber();
  value2 = randomNumber();

  //result

  if (value1 > value2) {
    result.innerHTML = "player 1 winner";
  } else if (value1 < value2) {
    result.innerHTML = "player 2 winner";
  } else {
    result.innerHTML = "Both player winner";
  }
  // adding image by the value
  img1.src = `/img/${value1}.png`;
  img2.src = `/img/${value2}.png`;

  // adding rotation animation on each click
  img1.classList.toggle("rotate");
  img2.classList.toggle("rotate");
});

// by deafult on lode site :

document.addEventListener("DOMContentLoaded", (e) => {
  value1 = randomNumber();
  value2 = randomNumber();

  //result

  if (value1 > value2) {
    result.innerHTML = "player 1 winner";
  } else if (value1 < value2) {
    result.innerHTML = "player 2 winner";
  } else {
    result.innerHTML = "Both player winner";
  }
  // adding image by the value
  img1.src = `/img/${value1}.png`;
  img2.src = `/img/${value2}.png`;

  // adding rotation animation on each click
  img1.classList.toggle("rotate");
  img2.classList.toggle("rotate");
});
