
const tabHeaders = document.querySelectorAll(".tabs-group-item");
const tabContents = document.querySelectorAll(".tab-content");

tabHeaders.forEach(function (item) {

	item.addEventListener("click", function () {
		tabHeaders.forEach(function (item) {
			item.classList.remove("active")
		});

		this.classList.add("active");


		tabContents.forEach(function (item_) {
			item_.classList.add("tab-content-hidden");
		});

		const selectedContent = document.querySelector("#" + item.dataset.tab);
		selectedContent.classList.remove("tab-content-hidden");
	})
})