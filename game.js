window.onload = () => {
	document.getElementById("start").onmouseover = MouseEnter;
	
function MouseEnter(){
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
console.log(e.clientX);
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
	msg.innerText = "You lost :( Stop touching walls !";
	msg.style.color= "#FF0000";
	
}else if(xStart === xEnd){
	for(let i =0; i <divs.length; ++i){
		divs[i].style.backgroundColor= "#00FF00";
	}
	msg.innerText = "You Win :) Congratulations !";
	msg.style.color= "#00FF00";
	
}else if(xStart < 400 || xStart > 950){
	for(let i =0; i <divs.length; ++i){
		divs[i].style.backgroundColor= "#FFA500";
	}
	msg.innerText = "Nice try, the only way is forward!";
	msg.style.color= "#FF0000";
	MouseEnter();
}
});

function restartGame(){
	document.location.reload();
}; 
	}
}
