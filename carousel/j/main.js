let slideIndex = 1;  // for the first time     1 !!!!!!!!!!!  /// dounload (1)
let prev = slideIndex-1;    /// before  1 !!!!!!!!!!!
showSlides(slideIndex);                                       /// dounload (2)



// Next/previous controls
function plusSlides(n) {                  /// onClick     (1)
  slideIndex += n
  showSlides(slideIndex);
}

function showSlides(n) {                     ////   onClick (2)/// dounload (2)
  
  let slides = document.getElementsByClassName("mySlides");
  
  const caption = document.querySelector(".caption");
  

  if (n > slides.length) {
    slideIndex = 1;
  }
  else if (n < 1) {
    slideIndex = slides.length
  }

  slides[prev].classList.toggle("active");     // before  1 !!!!!!!!!!!
  slides[slideIndex-1].classList.toggle("active");          // !!!!!!!!!!
  caption.innerHTML = slides[slideIndex-1].alt;
  prev = slideIndex-1;
}