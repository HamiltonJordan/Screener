//Instructor-Selector.js
$(document).ready(function () {
	//var myId = Cookies.get('loginId');

	//PHP - request the JSON list of film information available to user
	$.get("http://screener.onthewifi.com/fetchClassFilms.php", "", function (response){
		//alert("B");
		myFilms=JSON.parse(response);
		//myFilms = {}
		//console.log("response: " + response);
		//alert("myFilms: " + myFilms);
		$last_class="null";
		//For every film in the list returned, create a cell in the table
		for (i = 0; i < myFilms.length; i++){
			if(myFilms[i].ClassName != $last_class){
				$("#entry-point").append('<tr class="table-primary"><th scope="row" colspan="5">'+myFilms[i].ClassName+'</th></tr>');
				$last_class = myFilms[i].ClassName;
			}
			$("#entry-point").append('<tr class="movie-cell"><th scope="row">'+(i+1)+'</th><td class="Title"><a href="viewer.html" class="movie_link" id="a'+i+'">'+myFilms[i].Title+'</a></td><td>'+myFilms[i].runtime+'</td><td>'+myFilms[i].duedate+'</td><td class="delete" data-count="'+i+'"><svg width="30" height="11" class="minus-frame"><rect x="2" y="1" rx="5" ry="5" width="26" height="8" class="minus-symbol" /></svg></td></tr>');
			$("#a"+i).data("URL", myFilms[i].URL);
		}
		/*
		$(".movie_link").click({p1:myFilms[i].URL,p2:myFilms[i].Title},function(event){
			url=event.data.p1;
			title=event.data.p2;
			$.get("getvideo.php?video="+url+"&titlev="+title, "", function (response){
				json=JSON.parse(response);
			});
		});
		*/
		alert("java running...");
		$(".delete").click(function() {
			$c = confirm("Are you sure you want to delete this film?");
			if ($c) {	//Delete video
				$index = $(this).attr("data-count");
				$vid_id = myFilms[$index].Id;
				alert($vid_id);
				$.get("http://screener.onthewifi.com/DeleteVideo.php?videoId="+$vid_id)
					.done(function (response){
						alert("Film removed from Screener");
						location.reload();
					})
					.fail(function (){
						alert("Failed to connect to the database");
					});
			}
		});
	});

});
