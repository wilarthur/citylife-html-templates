const desktopSearchBtn = document.getElementById("open-desktop-search");
const mobileSearchBtn = document.getElementById("open-mobile-search");
const mobileMenuBtn = document.getElementById("open-mobile-menu");
const searchBar = document.getElementById("search-bar");

function toggleSearchBar() {
  if (searchBar.style.display === "none") {
    searchBar.style.display = "flex";
  } else {
    searchBar.style.display = "none";
  }
}

function toggleMobileMenu() {}

desktopSearchBtn.addEventListener("click", toggleSearchBar);
mobileSearchBtn.addEventListener("click", toggleSearchBar);

mobileMenuBtn.addEventListener("click", toggleMobileMenu);
