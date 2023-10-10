const desktopSearchBtn = document.getElementById("open-desktop-search");
const mobileSearchBtn = document.getElementById("open-mobile-search");
const mobileMenuBtn = document.getElementById("open-mobile-menu");
const searchBar = document.getElementById("search-bar");
const mobileMenu = document.getElementById("mobile-menu");

function toggleSearchBar() {
  if (searchBar.style.display === "none") {
    searchBar.style.display = "flex";
  } else {
    searchBar.style.display = "none";
  }
}

function toggleMobileMenu() {
  if (mobileMenu.style.display === "none") {
    mobileMenu.style.display = "flex";
  } else {
    mobileMenu.style.display = "none";
  }
}

desktopSearchBtn.addEventListener("click", toggleSearchBar);
mobileSearchBtn.addEventListener("click", toggleSearchBar);

mobileMenuBtn.addEventListener("click", toggleMobileMenu);
