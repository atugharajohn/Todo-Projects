let display = document.querySelector(".display");
let start = document.querySelector(".start");
let reset = document.querySelector(".reset");

let timer = null;
start.addEventListener("click", () => {
  let [minutes, seconds] = [0, 0];
  function timer() {
    // seconds increment :-
    seconds++;
    if (seconds == 60) {
      seconds = 0;
      minutes++;
    }

    //  minutes and seconds are both below 10 it add 0 with it :-
    let min = minutes < 10 ? "0" + minutes : minutes;
    let sec = seconds < 10 ? "0" + seconds : seconds;
    display.innerHTML = min + ":" + sec;
  }
  // toggler
  if ((start.style.display = "block")) {
    start.style.display = "none";
    reset.style.display = "block";
  }
  // reset
  reset.addEventListener("click", () => {
    if ((reset.style.display = "block")) {
      reset.style.display = "none";
      start.style.display = "block";
      [minutes, seconds] = [0, 0];
      display.innerHTML = "00" + ":" + "00";
      clearInterval(timer);
    }
  });
  timer = setInterval(timer, 1000);
});
