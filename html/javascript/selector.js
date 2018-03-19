$(document).ready(function () {
	alert("yo");
	var myId = Cookies.get('loginId');
	myId = 2;
	//PHP - request the JSON list of film information available to user
	$.get("fetchMyFilms.php?userId="+myId, "", function (response){
		alert("strt php");
		myFilms=JSON.parse(response);
		//myFilms = {}
		console.log("response: " + response);
		console.log("myFilms: " + myFilms);
		//For every film in the list returned, create a cell in the table
		for (i = 0; i < myFilms.length; i++){
			/*$("#entry-point").append('<tr class="movie-cell"><th scope="row">'+i+'</th><td class="Title"><a href="viewer.html" id="a'+i+'">'+myFilms[i].Title+'</a></td><td>1:11</td><td>3/31/18</td></tr>');*/
			$("#a"+i).data("URL", myFilms[i].URL);
		}
		$("a").click(function(){
			Cookies.remove('URL');
			Cookies.set('URL', $("#"+this.id).data("URL"));
		});
		alert("end php");
	});		
	/*
	var jsonOBJ = {
		"class": [
			{
				"name":"Biology",
				"films": [
					{"Title": "T1", "URL": "/source.mp4"},
					{"Title": "T2", "URL": "/othersource.mp4"}
				]
			},	
				{
				"name":"English",
				"films": [
					{"Title": "T3", "URL": "/Newsource.mp4"},
					{"Title": "T4", "URL": "/Whatsource.mp4"}
				]
			}
		]
	};
	alert(jsonOBJ.class[0].films[1].Title);
	*/

});