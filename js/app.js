const textToAnimate = document.querySelector(".nameplate-text");
const textStr = textToAnimate.textContent;
const textSplit = textStr.split("");

textToAnimate.textContent = "";

for (var i = 0; i < textSplit.length; i++) {
	textToAnimate.innerHTML += "<span>" + textSplit[i] + "</span>"
};

let animChar = 0;
let animTimer = setInterval(on_tick, 50);

function on_tick() {
	const span = textToAnimate.querySelectorAll("span")[animChar];
	span.classList.add('name-anim');
	animChar++
	if(animChar === textSplit.length){
		end_anim();
		return;
	}
}

function end_anim(){
	clearInterval(animTimer);
	animTimer = null;
}