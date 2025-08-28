document.getElementById("year").textContent = new Date().getFullYear();
function toggleMenu() {
  const menuList = document.querySelector(".menu-links");
  const iconsShown = document.querySelector(".hamburger-icon");
  menuList.classList.toggle("open");
  iconsShown.classList.toggle("open");
}
