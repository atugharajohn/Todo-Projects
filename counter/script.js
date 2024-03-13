let display = document.querySelector(".display");
let inputVal = document.querySelector("#inputVal");
function increment() {
  let countValue = parseInt(display.innerText);
  let changeBy = parseInt(inputVal.value);
  display.innerHTML = countValue + changeBy;
}

function decrement() {
  let countValue = parseInt(display.innerText);
  let changeBy = parseInt(inputVal.value);
  display.innerHTML = countValue - changeBy;
}

function reset() {
  display.innerHTML = "0";
}

// document.querySelector('input').onchange = inputChange();
