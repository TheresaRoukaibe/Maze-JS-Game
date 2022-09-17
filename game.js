//Make start button follow the mouse 

window.onload = () => {
const startButton = document.getElementById("start");
document.addEventListener('mousemove', function(e){
	var x = e.clientX - 450;
	var y = e.clientY- 150;
	startButton.style.left = x + "px";
	startButton.style.top = y + "px";
}
)
}
