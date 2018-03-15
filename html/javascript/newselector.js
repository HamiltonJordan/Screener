$(document).ready(function () {
	var myId = Cookies.get('loginId');
	//PHP - request the JSON list of film information available to user
	/*
	$.get("fetchMyFilms.php?userId="+myId, "", function (response){
		myFilms=JSON.parse(response);
		//myFilms = {}
		console.log("response: " + response);
		console.log("myFilms: " + myFilms);
		//For every film in the list returned, create a cell in the table
		for (i = 0; i < myFilms.length; i++){
			$("#selector_table").append('<tr><td class="Title"><a href="newviewer.html" id="a"'+i'>'+myFilms[i].Title+'</a></td><td>'+myFilms[i].URL+'</td></tr>');
			$("#a"+i).data("URL", myFilms[i].URL);
		
	$("#a"+i).click({p1:myFilms[i].URL,p2:myFilms[i].Title},function(event){
		url=event.data.p1;
		title=event.data.p2;
		 $.get("getvideo.php?video="+url+"&titlev="+title, "", function (response){
        	json=JSON.parse(response);
		 })})}
}

		$("a").click(function()){
			Cookies.remove('URL');
			Cookies.set('URL', $("#"+this.id).data("URL"));
		});
	});		
*/
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

});

