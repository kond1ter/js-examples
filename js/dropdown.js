
const menuItems = document.querySelectorAll(".dropdown-menu__item-title");
const menuDropdowns = document.querySelectorAll(".dropdown-menu__dropdown");


menuItems.forEach(function (item) {
	item.addEventListener("mouseover", function () {
		item.nextElementSibling.classList.remove("dropdown-menu__dropdown_hidden");
	});

	item.addEventListener("mouseout", function () {
		item.nextElementSibling.classList.add("dropdown-menu__dropdown_hidden");
	});
});

menuDropdowns.forEach(function (item) {
	item.addEventListener("mouseover", function () {
		item.classList.remove("dropdown-menu__dropdown_hidden");
	});

	item.addEventListener("mouseout", function () {
		item.classList.add("dropdown-menu__dropdown_hidden");
	});
});





