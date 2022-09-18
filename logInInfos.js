function signUp(e) {
	event.preventDefault();
	var uName = document.getElementById("email").value;
	var uPass = document.getElementById("pass").value;
	var points = 0;
	
	var user = {
		username: uName,
		passowrd: uPass,
		score : points,
	}; 
	
	var json = JSON.stringify(user);
	localStorage.setItem(uName, json);
		
};




