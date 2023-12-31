$(document).ready(function () {
  $(".gallery").each(function () {
    // the containers for all your galleries
    $(this).magnificPopup({
      delegate: "a", // the selector for gallery item
      type: "image",
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        arrowMarkup:
          '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button
        tPrev: "Previous (Left arrow key)", // title for left button
        tNext: "Next (Right arrow key)", // title for right button
        tCounter: '<span class="mfp-counter">%curr% of %total%</span>',
        titleSrc: "title", // markup of counter
      },
    });
  });
});
