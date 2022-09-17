
window.onload = () => {
const startButton = document.getElementById("start");
//Still have to make sure of moving with mouse!
document.addEventListener('click', function(e) {
	restartGame();
});
document.addEventListener('mousemove', function(e){
	const x = e.clientX - 450;
	const y = e.clientY- 150;
	startButton.style.left = x + "px";
	startButton.style.top = y + "px";

let check = e.target.classList.value;
const end = document.getElementById("end");
const position = end.getBoundingClientRect();
const xEnd = position.left +10;
const yEnd = position.top +20;
const divs = document.getElementsByClassName("boundary");
if(check === "boundary") {
	for(let i =0; i <divs.length; ++i){
		divs[i].style.backgroundColor= "#FF0000";
	}
	const msg = document.getElementById("status");
	msg.innerText = "You lost :( Stop touching walls !";
	msg.style.color= "#FF0000";
}else if(e.clientX === xEnd || e.clientY === yEnd){
	for(let i =0; i <divs.length; ++i){
		divs[i].style.backgroundColor= "#00FF00";
	}
	const msg = document.getElementById("status");
	msg.innerText = "You Win :) Congratulations !";
	msg.style.color= "#00FF00";
}
});

function restartGame(){
	document.location.reload();
}; 
}
