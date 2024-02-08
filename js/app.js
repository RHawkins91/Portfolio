// Nameplate Animation
	//Variables
const textToAnimate = document.querySelector(".nameplate-text");
const textStr = textToAnimate.textContent;
const textSplit = textStr.split("");
	//Hide original
textToAnimate.textContent = "";
	//Add spans
for (var i = 0; i < textSplit.length; i++) {
	textToAnimate.innerHTML += "<span>" + textSplit[i] + "</span>"
};
	//Timer
let animChar = 0;
let animTimer = setInterval(on_tick, 50);
	//Add class to animate
function on_tick() {
	const span = textToAnimate.querySelectorAll("span")[animChar];
	span.classList.add('name-anim');
	animChar++
	if(animChar === textSplit.length){
		end_anim();
		return;
	}
};
	//Finish
function end_anim(){
	clearInterval(animTimer);
	animTimer = null;
};

//Sidebar and logo animation
	//Variables
const navbar = document.getElementById("navbar");
const menuButton = document.getElementById("menu-btn");
let navActive = false;
	//Listener
menuButton.onclick = function() {show_navbar()};

	//Add class to bar, animate the logo (two keyframe sets are needed to enable replay)
function show_navbar() {
	if (navActive === false) {
		navbar.classList.add("nav-active");
		menuButton.style.animation = "button-spin-1 0.4s ease-in-out 0s 1 normal none";
		navActive = true;
	} else {
		navbar.classList.remove("nav-active");
		menuButton.style.animation = "button-spin-2 0.4s ease-in-out 0s 1 reverse none";
		navActive = false;
		setTimeout(() => {
			menuButton.style.animation = "logo-pulse 1.5s ease-in-out 0s infinite normal both"
		}, 400)
	}
};

//Form validation

function validate_form(){
	let firstName = document.getElementById("firstName").value;
	let lastName = document.getElementById("lastName").value;
	let emailAddress = document.getElementById("emailAddress").value;
	let subject = document.getElementById("subject").value;
	let message = document.getElementById("message").value;

	let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
	let emailResult = emailRegex.test(emailAddress)

	if(firstName||lastName||emailAddress||subject||message == "") {
		alert('All fields are required');
		return false;
	}
	if(emailResult == false) {
		alert("Please enter a valid email address");
		return false;
	}
	else {
		return true;
	}
}