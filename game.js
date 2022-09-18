window.onload = () => {
	
document.getElementById("start").onmouseover = MouseEnter;
	
function MouseEnter(){
var user = JSON.parse(window.localStorage.getItem("user"));
var score = user.score;
const startButton = document.getElementById("start");
//Still have to make sure of moving with mouse!
document.addEventListener('click', function(e) {
	restartGame();
});
document.addEventListener('mousemove', function(e){
	const x = e.clientX - 450;
	const y = e.clientY - 150;
	startButton.style.left = x + "px";
	startButton.style.top = y + "px";
let check = e.target.classList.value;
const end = document.getElementById("end");
const position = end.getBoundingClientRect();
const xEnd = position.left;
const yEnd = position.top;
const positionS = startButton.getBoundingClientRect();
const xStart = positionS.left;
const yStart = positionS.top;
const msg = document.getElementById("status");
const divs = document.getElementsByClassName("boundary");
if(check === "boundary") {
	for(let i =0; i <divs.length; ++i){
		divs[i].style.backgroundColor= "#FF0000";
	}
	msg.innerText = "You lost :( Stop touching walls ! Click on S to play again";
	msg.style.color= "#FF0000";
	this.removeEventListener('mousemove', arguments.callee);
	user.score = score -10;
	alert("WOOPS, look at your score: " + user.score);
	window.localStorage.setItem("user", JSON.stringify(user));
	
}else if(xStart === xEnd){
	for(let i =0; i <divs.length; ++i){
		divs[i].style.backgroundColor= "#00FF00";
	}
	msg.innerText = "You Win :) Congratulations ! Click on S to play again";
	msg.style.color= "#00FF00";
	this.removeEventListener('mousemove', arguments.callee);
	user.score = score + 5;
	alert("YAY! 5 more points: " + user.score);
	window.localStorage.setItem("user", JSON.stringify(user));
}else if(xStart < 400 || xStart > 950){
	for(let i =0; i <divs.length; ++i){
		divs[i].style.backgroundColor= "#FFA500";
	}
	msg.innerText = "Nice try, why are you trying to escape!? :) Click on S to try again";
	msg.style.color= "#FFA500";
	this.removeEventListener('mousemove', arguments.callee);
	
}
});

	}
	
	function restartGame(){
	document.location.reload();
}; 
}

