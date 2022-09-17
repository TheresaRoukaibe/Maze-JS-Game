//Make start button follow the mouse 
window.onload = () => {
var startButton = document.getElementById("start");
document.addEventListener('mousemove', function(e){
	var x = e.clientX;
	var y = e.clientY;
	startButton.style.left = x + "px";
	startButton.style.top = y + "px";
}
);
}
