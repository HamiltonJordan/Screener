$(document).ready(function() {
	//var myId = Cookies.get('loginId');

	var myId = 4;

	//PHP - request the JSON list of film information available to user
	$.get("fetchMyClasses.php?userId="+myId, "", function (response){
		myClasses=JSON.parse(response);
			/*

			Returned Json from PHP
			{
			    "FirstName": "Michael",
			    "LastName": "Gousie",
			    "ClassId": "1",
			    "ClassName": "Senior Seminar",
			    "ClassNumber": "Comp 401"
			  }

			*/
		$last_class="null";
		//For every film in the list returned, create a cell in the table
		for (i = 0; i < myClasses.length; i++){
			// if(myClasses[i].ClassName != $last_class){
			// 	$("#entry-point").append('<tr class="table-primary"><th scope="row" colspan="4">'+myClasses[i].ClassName+'</th></tr>');
			// 	$last_class = myClasses[i].ClassName;
			// }
			$("#entry-point").append('<tr class="movie-cell"><th scope="row">'+(i+1)+'</th><td class="Title"><a href="viewer.html" id="a'+i+'">'+myClasses[i].ClassName+'</a></td><td>'+myClasses[i].ClassNumber+'</td></tr>');
			$("#a"+i).data("URL", myClasses[i].ClassNumber);
		}
	});	 // End of Ajax call to load page


	$("#new-class-btn").click(function() {
		window.location = 'AddClass.html?userId=4';

	});


}); // End of Document Ready

