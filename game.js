
window.onload = () => {
const startButton = document.getElementById("start");
//Still have to make sure of moving with mouse!
document.addEventListener('mousemove', function(e){
	var x = e.clientX - 450;
	var y = e.clientY- 150;
	startButton.style.left = x + "px";
	startButton.style.top = y + "px";

let check = e.target.classList.value;
if(check === "boundary") {
	//alert("you lost");
	//var el = document.getElementById("boundary1");
	//el.style.backgroundColor = "red";
	
	let divs = document.getElementsByClassName("boundary");
	for(let i =0; i <divs.length; ++i){
		divs[i].style.backgroundColor= "#FF0000";
	}
	
}
});



}
