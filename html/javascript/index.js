//splash.js

$("#submit").click(function() {
	var user = $("#email").val();
	var pass = $("#password").val();
	console.log(user);
	$.get("login.php?email="+user+"&password="+pass, function(response){
		console.log(response);
		var myObj = JSON.parse(response);
		if (myObj.success && myObj.loginCheck) {
			console.log('here');
			document.location.replace('screener.onthewifi.com/selector.html');
		
		}
		else {
			console.log('failed to login.')
		}
	});
});
