$(document).ready(function () {
	//var url = window.location.href;
	//var urlList = url.split("=");
	//var myId = urlList[1];
	var myId = Cookies.get('loginId');
	//PHP - request the JSON list of film information available to user
	$.get("fetchMyFilms.php?userId="+myId, "", function (response){
		myFilms=JSON.parse(response);
		console.log("response: " + response);
		console.log("myFilms: " + myFilms);

		for (i = 0; i < myFilms.length; i++){
			$("#selector_table").append('<tr><td class="Title"><a href="viewer.html" id="a'+i+'">'+myFilms[i].Title+'</a></td><td>'+myFilms[i].URL+'</td></tr>');
			$("#a"+i).data("URL", myFilms[i].URL);
		}
		$("a").click(function(){
			Cookies.remove('URL');
			Cookies.set('URL', $("#"+this.id).data("URL"));
		});
	});		
	

});