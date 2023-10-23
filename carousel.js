//Set slideIndex to 1 by default
let carIndex = 1;
showCar(carIndex);

//Set modal image to the same image as what is clicked
function currentCar(n) {
  showCar((carIndex = n));
}

function showCar(n) {
  const carImgs = document.getElementsByClassName("carousel-image");

  //If number is greater than number of images, cycle back to the first
  if (n > carImgs.length) {
    carIndex = 1;
  }

  //If number is less than the first image, cycle to the last image in the index
  if (n < 1) {
    carIndex = carImgs.length;
  }

  //Set all images to display: none
  for (let i = 0; i < carImgs.length; i++) {
    carImgs[i].style.display = "none";
  }

  //Set correct image to display in main container
  carImgs[carIndex - 1].style.display = "block";
}
