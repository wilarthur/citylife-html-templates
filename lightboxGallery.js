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
