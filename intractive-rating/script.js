let stars = document.querySelectorAll(".stars");
let submit = document.querySelector(".submit");
let resultval = document.querySelector(".resultval");
let ratingComponentWrapper = document.querySelector(
  ".rating_component_wrapper"
);
let thankYouContainer = document.querySelector(".thankYou_Container");
let resultValue = "";

for (i = 0; i < stars.length; i++) {
  stars[i].dataset.rating = i + 1;

  ["click", "mouseover", "mouseout"].forEach(function (e) {
    stars[i].addEventListener(e, showOutput);
  });
}

function showOutput(e) {
  let type = e.type;
  let starValue = this.dataset.rating;
  // = starValue;
  if (type === "click") {
    resultValue = starValue;
  }

  stars.forEach(function (elem, ind) {
    if (type === "click") {
      if (ind < starValue) {
        elem.classList.add("star-filled");
      } else {
        elem.classList.remove("star-filled");
      }
    }
    if (type === "mouseover") {
      if (ind < starValue) {
        elem.classList.add("starMoveOut");
      } else {
        elem.classList.remove("starMoveOut");
      }
    }
    if (type === "mouseout") {
      elem.classList.remove("starMoveOut");
    }
  });
}

submit.addEventListener("click", (e) => {
  if (resultValue === "") {
    console.log(resultValue);
    return false;
  } else if (thankYouContainer.classList.contains("hide_section")) {
    resultval.innerText = resultValue;
    ratingComponentWrapper.classList.add("hide_section");
    thankYouContainer.classList.remove("hide_section");
  } else {
    console.log("aa rha hai");
  }
  console.log(resultValue);
});

$(document).ready(() => {
  // load data;
  $.getJSON("/data.json", (result) => {
    const $ul = $('<ul class="country-list" style="color: white"></ul>');
    result.forEach((item) => {
      $ul.append(`<li>${item.country_name}</li>`);
    });
    $("#country-list").html($ul);
  });
});
