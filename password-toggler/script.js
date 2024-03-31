let input = document.querySelector("#input");
let toggler = document.querySelector("#toggler");
let signUp = document.querySelector("#signUp");
let form = document.querySelector("#form");

// toggler hide/show icon
toggler.addEventListener("click", () => {
  if (toggler.classList == "fa-regular fa-eye-slash") {
    input.type = "text";
    toggler.classList = "fa-regular fa-eye";
  } else {
    input.type = "password";
    toggler.classList = "fa-regular fa-eye-slash";
  }
});

// check input field and blank or not / implement some functionallity :-
input.addEventListener("keyup", (e) => {
  if (input.value.length > 0) {
    signUp.disabled = false;
    toggler.style.display = "block";
    signUp.style.cursor = "pointer";
    signUp.style.backgroundColor = "#2760ff";
  } else {
    signUp.disabled = true;
    toggler.style.display = "none";
    signUp.style.backgroundColor = "#5f8aff";
    signUp.style.cursor = "not-allowed";
  }
});
