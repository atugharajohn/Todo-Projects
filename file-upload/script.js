let file = document.getElementById("myFile");
let fileSelect = document.querySelector(".fileSelect");
let fileSection = document.querySelector(".file_uploader__fileSection");
let fileNameAdd = document.querySelector(".file_uploader__fileName");
let fileSizeAdd = document.querySelector(".file_uploader__fileSize");
let fileSectionWrapper = document.querySelector(".file_uploader__wrapper");
let btn = document.getElementsByTagName("button")[0];
let form = document.querySelector("form");
form.addEventListener("click", (e) => {
  file.value = "";
  file.click();

  console.log(file.files.length);
});

file.addEventListener("change", () => {
  console.log("intital start");
  if (file.files.length) {
  }
  let fileName = file.files[0].name.split(" ").pop();
  let fileSize = file.files[0].size / 1024 / 1024;
  fileSize = fileSize.toFixed("2");
  fileNameAdd.innerHTML = `${fileName}`;
  fileSizeAdd.innerHTML = `${fileSize} mb`;
  console.log("running");
  if (file.files.length > 0) {
    fileSectionWrapper.classList.remove("none");
  }

  console.log("delete trigger");

  btn.addEventListener("click", () => {
    console.log(file.files[0]);
    file.files[0].name = "";
    fileSectionWrapper.classList.add("none");
  });
});
