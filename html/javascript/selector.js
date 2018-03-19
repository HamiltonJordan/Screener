$(document).ready(function () {
	/*var myId = Cookies.get('loginId');*/
	myId = 2;

	//PHP - request the JSON list of film information available to user
	$.get("http://screener.onthewifi.com/fetchMyFilms.php?userId="+myId, "", function (response){
		myFilms=JSON.parse(response);
		//myFilms = {}
		console.log("response: " + response);
		console.log("myFilms: " + myFilms);
		$last_class="null";
		//For every film in the list returned, create a cell in the table
		for (i = 0; i < myFilms.length; i++){
			if(myFilms[i].ClassName != $last_class){
				alert("a");
				$("#entry-point").append('<tr class="table-primary"><th scope="row" colspan="4">'+myFilms[i].ClassName+'</th></tr>');
				alert("b");
				$last_class = myFilms[i].ClassName;
			}
			$("#entry-point").append('<tr class="movie-cell"><th scope="row">'+(i+1)+'</th><td class="Title"><a href="viewer.html" id="a'+i+'">'+myFilms[i].Title+'</a></td><td>1:11</td><td>3/31/18</td></tr>');
			$("#a"+i).data("URL", myFilms[i].URL);
		}
		$("a").click(function(){
			Cookies.remove('URL');
			Cookies.set('URL', $("#"+this.id).data("URL"));
		});
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