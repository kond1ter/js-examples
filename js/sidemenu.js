
const sideMenu = document.querySelector(".sidemenu")
const btnOpen = document.querySelector(".side-menu-btn-open");
const btnClose = document.querySelector(".side-menu-btn-close");

btnOpen.addEventListener("click", function () {
	sideMenu.classList.remove("hidden")
});

btnClose.addEventListener("click", function () {
	sideMenu.classList.add("hidden")
});