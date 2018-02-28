//splash.js

$("#submit").click(function() {
	var user = $("#username").val();
	var pass = $("#password").val();
	$.get("login.php?username="+user+"&password="+pass, function(response){
		var package = JSON.parse(response);
		$("#responseDiv").html(package.comment);
		if(package.id == 1){
			$("#foto-link").attr("href", "fotofanjoe.html");
		}
		else if(package.id == 2){
			$("#foto-link").attr("href", "fotofanjane.html");
		};
	});
	$("#login_window").hide();
	$("#cover").hide();
});