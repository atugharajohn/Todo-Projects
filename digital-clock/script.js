let hours_num = document.querySelector(".hours_num");
let minutes_num = document.querySelector(".minutes_num");
let seconds_num = document.querySelector(".seconds_num");
let am_pm = document.querySelector(".am_pm");

setInterval(() => {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  hours = hours > 12 ? hours - 12 : hours;
  console.log(hours);
  hours < 10 ? (hours_num.innerText = "0" + hours) : hours;
  hours > 12 ? (am_pm.innerText = "AM") : (am_pm.innerText = "PM");
  hours_num.innerText = hours;

  minutes_num.innerText = minutes;

  minutes < 10 ? (minutes_num.innerText = "0" + minutes) : minutes;

  seconds_num.innerText = seconds;
  seconds < 10 ? (seconds_num.innerText = "0" + seconds) : seconds;
}, 1000);
