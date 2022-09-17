
window.onload = () => {
const startButton = document.getElementById("start");
//Still have to make sure of moving with mouse!
document.addEventListener('mousemove', function(e){
	const x = e.clientX - 450;
	const y = e.clientY- 150;
	startButton.style.left = x + "px";
	startButton.style.top = y + "px";

let check = e.target.classList.value;
if(check === "boundary") {
	const divs = document.getElementsByClassName("boundary");
	for(let i =0; i <divs.length; ++i){
		divs[i].style.backgroundColor= "#FF0000";
	}
	const msg = document.getElementById("status");
	msg.innerText = "You lost :( Stop touching walls !";
	msg.style.color= "#FF0000";
	
}
});



}
