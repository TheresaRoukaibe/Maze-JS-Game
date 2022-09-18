function register(){
	const userEmail = document.getElementById('email').value;
	const userPass = document.getElementById('pass').value;
	var user_info = {'user': userEmail, 'password': userPassword, 'score' = 0};
	localStorage.setItem('user_info', JSON.stringify(user_info));
	window.location="game.html";
}


