const scrollBoxes = document.querySelectorAll(".sub-boxes");
const outputs = document.querySelectorAll("p");

document.addEventListener("scroll", () => {
	for (let i = 0; i < outputs.length; i++) {
			outputs[i].style.opacity = ".0";
		setTimeout(() => {
			outputs[i].style.visibility = "visible"
			outputs[i].style.opacity = "1";
			outputs[i].style.background = "black";
			outputs[i].style.color = "white";
			outputs[i].style.borderBottom = "1px solid red";
			outputs[i].style.padding = "30px";
			outputs[i].style.transition = "all 0.85s";
			outputs[i].style.width = "100%";
		}, 1000);
	}
})