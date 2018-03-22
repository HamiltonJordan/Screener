$(document).ready(function() {
	//var myId = Cookies.get('loginId');

	var myId = 4;

	//PHP - request the JSON list of film information available to user
	$.get("fetchMyClasses.php?userId="+myId, "", function (response){
		myFilms=JSON.parse(response);
		
		console.log(response);
		console.log(myFilms);
	});		

}); // End of Document Ready