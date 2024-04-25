let getvalue = document.querySelector(".getValue");
let submit = document.querySelector(".submit");
let display = document.querySelector(".display");
let start = document.querySelector(".start");
let pause = document.querySelector(".pause");
let reset = document.querySelector(".reset");

let timer = null;
submit.addEventListener("click", () => {
  let minute = getvalue.value;
  console.log(minute);
  let [minutes, seconds] = [`${minute}`, 60];
  function countdownTimer() {
    seconds--;
    console.log(seconds);
    if (seconds == 0) {
      seconds = 59;
      minutes--;
    }
    // else if (minutes <= 0) {
    //   clearInterval(timer);
    // }
    let sec = seconds < 10 ? "0" + seconds : seconds;
    let min = minutes < 10 ? "0" + minutes : minutes;

    display.innerHTML = min + ":" + sec;
  }
  timer = setInterval(countdownTimer, 1000);
  pause.addEventListener("click", () => {
    clearInterval(timer);
  });
  start.addEventListener("click", () => {
    timer = setInterval(countdownTimer, 1000);
  });
  reset.addEventListener("click", () => {
    clearInterval(timer);
    [minutes, seconds] = [0, 0];

    display.innerHTML = "00" + ":" + "00";
  });
});
