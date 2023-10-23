let lightbox = document.getElementById("lightboxOverlay");
let closeLightboxBtn = document.getElementById("closeLightbox");

function openLightbox() {
  lightbox.style.display = "flex";
  closeLightboxBtn.focus();
  document.documentElement.style.overflow = "hidden";
}

function closeLightbox() {
  lightbox.style.display = "none";
  document.documentElement.style.overflow = "auto";
}

//Set slideIndex to 1 by default
let slideIndex = 1;
showSlides(slideIndex);

//Calculate index when next/previous clicked in modal
function changeSlide(n) {
  showSlides((slideIndex += n));
}

//Set modal image to the same image as what is clicked
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  const slides = document.getElementsByClassName("slide-image");

  //If number is greater than number of images, cycle back to the first
  if (n > slides.length) {
    slideIndex = 1;
  }

  //If number is less than the first image, cycle to the last image in the index
  if (n < 1) {
    slideIndex = slides.length;
  }

  //Set all images to display: none
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  //Set correct image to displau in main container
  slides[slideIndex - 1].style.display = "block";
}
