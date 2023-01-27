const btn = document.querySelector('button');
const firstCard = document.querySelector('.sub-boxes');
const firstColor = document.querySelector('span.first');
const secondColor = document.querySelector('span.second');
const thirdColor = document.querySelector('span.third');
const fourthColor = document.querySelector('span.fourth');
const fifthColor = document.querySelector('span.fifth');
const hero = document.querySelector('.img-box > figure > img');

firstColor.style.backgroundColor = 'red';
const docFirstColor = firstColor.style.backgroundColor;

secondColor.style.backgroundColor = 'purple';
const docSecondColor = secondColor.style.backgroundColor;

thirdColor.style.backgroundColor = 'black';
const docThirdColor = thirdColor.style.backgroundColor;

fourthColor.style.backgroundColor = 'yellow';
const docFourthColor = fourthColor.style.backgroundColor;

fifthColor.style.backgroundColor = 'pink';
const docFifthColor = fifthColor.style.backgroundColor;

firstColor.addEventListener('click', () => {
	hero.style.transform = "rotate(2deg)";
	firstCard.style.backgroundColor = docFirstColor;
	firstCard.style.transition = "all .85s ease-in-out";
});

secondColor.addEventListener('click', () => {
	hero.style.transform = "rotate(2deg)";
	firstCard.style.backgroundColor = docSecondColor;
});

thirdColor.addEventListener('click', () => {
	hero.style.transform = "rotate(2deg)";
	firstCard.style.backgroundColor = docThirdColor;
});

fourthColor.addEventListener('click', () => {
	hero.style.transform = "rotate(2deg)";
	firstCard.style.backgroundColor = docFourthColor;
});

fifthColor.addEventListener('click', () => {
	hero.style.transform = "rotate(2deg)";
	firstCard.style.backgroundColor = docFifthColor;
});


/*
for (let i = 0; i < colors.length; i++) {
	colors[i].addEventListener('click', () => {
		firstCard.style.backgroundColor = colors;
	});
}*/
/*
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
});*/