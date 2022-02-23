
const showhideBtn = document.querySelector("#header-showhide-btn");
const hiddenText = document.querySelector("#showhide-text");

showhideBtn.addEventListener("click", function(){

	if (hiddenText.classList.toggle("showhide-text-hidden")) {
		showhideBtn.textContent = "Show text";
	} else {
		showhideBtn.textContent = "Hide text";
	}
});





