function signUp(e) {


	event.preventDefault();
	var uName = document.getElementById("email").value;
	var uPass = document.getElementById("pass").value;
	var points = 0;
	
	
	var user = {
		username: uName,
		passwrd: uPass,
		score : points,
	}; 
	
	var test = localStorage.getItem(uName);
	if(test==null){
		var json = JSON.stringify(user);
	localStorage.setItem("user", json);
	alert("Registration successful");
    document.location.href="game.html";
	}else{
		alert("Account with this username already exists. Sign in with credentials!");
}
};

function signIn(e) {
	event.preventDefault();
	var uName = document.getElementById("email2").value;
	var uPass = document.getElementById("pass2").value;
	var user =JSON.parse(localStorage.getItem('user'));
	console.log(uName);
	
if(user.username == null){
	alert("No account found. Please Sign Up first!");
}else{
	if(uName == user.username){
	 if(uPass == user.passwrd){
		 alert("Signed up Successfully !");
		  document.location.href="game.html";
	 }else{
		 alert("Wrong Password. Try again");
	 }
}else{
	alert("Something went wrong. Please make sure of credentials :(");
}
}
	
};




