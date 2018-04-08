$(document).ready(function () {
	//var myId = Cookies.get('loginId');
     alert("here");
 $.get("http://screener.onthewifi.com/check.php", "", function (response){
               login=JSON.parse(response);
		alert(login);
if (!login){window.location = "http://screener.onthewifi.com";}
else{
	//PHP - request the JSON list of film information available to user
	$.get("http://screener.onthewifi.com/fetchMyFilms.php", "", function (response){
		myFilms=JSON.parse(response);
		//myFilms = {}
		console.log("response: " + response);
		console.log("myFilms: " + myFilms);
		$last_class="null";
		//For every film in the list returned, create a cell in the table
		for (i = 0; i < myFilms.length; i++){
			if(myFilms[i].ClassName != $last_class){
				$("#entry-point").append('<tr class="table-primary"><th scope="row" colspan="4">'+myFilms[i].ClassName+'</th></tr>');
				$last_class = myFilms[i].ClassName;
			}
			$("#entry-point").append('<tr class="movie-cell"><th scope="row">'+(i+1)+'</th><td class="Title"><a href="viewer.html" id="a'+i+'">'+myFilms[i].Title+'</a></td><td>1:11</td><td>3/31/18</td></tr>');
			$("#a"+i).data("URL", myFilms[i].URL);
		}
		$("#a"+i).click({p1:myFilms[i].URL,p2:myFilms[i].Title},function(event){
			url=event.data.p1;
			title=event.data.p2;
			$.get("getvideo.php?video="+url+"&titlev="+title, "", function (response){
				json=JSON.parse(response);
			})
		})
	});
	}
})
	/*
	//Sample Json Obj
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
