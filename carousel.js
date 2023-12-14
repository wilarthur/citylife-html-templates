$(document).ready(function () {
  $(".carousel").slick({
    accessibility: true,
    arrows: true,
    prevArrow:
      '<button class="slick-prev" aria-label="Previous slide"><img src="/images/icons/chevron-left.svg">',
    nextArrow:
      '<button class="slick-next" aria-label="Next slide"><img src="/images/icons/chevron-right.svg">',
  });
});
