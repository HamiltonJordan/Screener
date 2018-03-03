//splash.js

$("#submit").click(function() {
	var user = $("#username").val();
	var pass = $("#password").val();
	$.get("../html/login.php?username="+user+"&password="+pass, function(response){
		console.log(response);
		var myObj = JSON.parse(response);
		if (myObj.success && myObj.loginCheck) {
			console.log('here');
		
		}
		else {
			console.log('failed to login.')
		}
	});
});