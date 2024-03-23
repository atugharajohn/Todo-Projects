let heightVal = document.querySelector(".height");
let weightVal = document.querySelector(".weight");
let ageVal = document.querySelector(".age");
let totalval = document.querySelector(".totalVal");
let resultMsg = document.querySelector(".resultMsg");
let submit = document.querySelector(".submit");
let form = document.getElementById("form");
let result = document.querySelector(".result");
let resulted = document.querySelector(".resulted");
form.addEventListener("submit", (value) => {
  let heightData = eval(heightVal.value / 100);
  let heightResult = heightData * heightData;
  let bmiVal = eval(weightVal.value / heightResult).toFixed(2);

  totalval.innerHTML = `${bmiVal}`;

  if (bmiVal >= 18.5 && bmiVal <= 24.9) {
    totalval.style.color = "#DFFF00";
    result.classList.add("active");
    resultMsg.innerHTML = "you are normal";
  } else if (bmiVal >= 25.0 && bmiVal <= 29.9) {
    totalval.style.color = "#FF5733";
    result.classList.add("active");
    resultMsg.innerHTML = "you are overweight";
  } else if (bmiVal >= 30.0) {
    totalval.style.color = "#FF0000";
    result.classList.add("active");
    resultMsg.innerHTML = "you are Obese";
  } else {
    result.classList.add("active");
    totalval.style.color = "#FFEA00";
    resultMsg.innerHTML = "you are underweight";
  }
});
