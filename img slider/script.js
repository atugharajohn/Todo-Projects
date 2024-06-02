const slides = document.querySelectorAll('.slide');
console.log(slides)
const dotController = document.querySelector('.dot');
let slideIndex = 0;
let initializerId = null;
let value = 0;
document.addEventListener('DOMContentLoaded' , initializerSlide )

function initializerSlide(){

        if(slides.length > 0){
            slides[slideIndex].classList.add('active');
            //  initializerId = setInterval(next, 2000)
        }

}
function showSlide(index){
    if(slideIndex >= slides.length){
        console.log(slideIndex);
        slideIndex = 0;
    }
    else if(index < 0){
        slideIndex = slides.length - 1

    }
    slides.forEach(slider => {
        slider.classList.remove('active')
    })
    slides[slideIndex].classList.add('active');


    // dotController.forEach(dotShow  => {
    //     dotShow.classList.remove('dotbg');
    // })
    // dotController[slideIndex].classList.add('dotbg');
}

function prev(){
    slideIndex--;
    showSlide(slideIndex)
}

function next(){
    slideIndex++;
    showSlide(slideIndex)
    // console.log(slideIndex , value )
}

