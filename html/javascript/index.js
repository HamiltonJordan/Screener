//index.js
$("#submit").click(function() {
	var user = $("#username").val();
	var pass = $("#password").val();
			alert(user+":"+pass);
	$.get("login.php?email="+user+"&password="+pass, function(response){
			alert('got  here ');
		var myObj = JSON.parse(response);
		if (myObj.success && myObj.loginCheck) {
			Cookies.remove('loginId');
			Cookies.set('loginId', myObj.id);
			document.location.replace('selector.html');
		}
		else {
			alert('failed to login.');
		}
	});
});
