//index.js

$("#submit").click(function() {
	var user = $("#username").val();
	var pass = $("#password").val();
	$.get("login.php?email="+user+"&password="+pass, function(response){
		console.log(response);
		var myObj = JSON.parse(response);
		if (myObj.success && myObj.loginCheck) {
			//Cookies.remove('loginId');
			//Cookies.set('loginId', myObj.id);
			//document.location.replace('selector.html');
			if(myObj.professor == 0){
				document.location.replace('selector.html');
			}
			else{
				document.location.replace('instructor.html');
			}
		}
		else {
			alert('failed to login.');
		}
	});
});

