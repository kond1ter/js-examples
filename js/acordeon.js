
const headers = document.querySelectorAll(".block-item-header");

headers.forEach(function (item, index) {
	item.addEventListener("click", function () {

		headers.forEach(function (item_) {
			if (item_ != item) {
				item_.nextElementSibling.classList.add("block-item-content-hidden");
			}
		});
		
		this.nextElementSibling.classList.toggle("block-item-content-hidden");
	});
});


