let celcius = document.querySelector("#celcius");
let fahrenheit = document.querySelector("#fahrenhiet");

// focus on celcius input when page loads
window.addEventListener("load", () => {
  celcius.focus();
});

celcius.addEventListener("input", (e) => {
  // convert celcius to farhenhiet
  fahrenheit.value = celcius.value * (9 / 5) + 32;
  // clear celcius value when fahrenhiet is empty
  celcius.value == "" ? (fahrenheit.value = "") : celcius.value;
});

fahrenheit.addEventListener("input", (e) => {
  // convert celcius to farhenhiet
  celcius.value = ((fahrenheit.value - 32) * 5) / 9;
  // clear celcius value when fahrenhiet is empty
  fahrenheit.value == "" ? (celcius.value = "") : fahrenheit.value;
});
