alert("hey");
$(document).ready(function () {
//	$.get("http://screener.onthewifi.com/check.php", "", function (response){
//		login=JSON.parse(response);
//		if (!login){window.location = "http://screener.onthewifi.com";}
//		else{
			alert("here");
			.get("getvideo.php?video=already&titlev=already", "", function (response){
	        	json=JSON.parse(response);
	        	alert("already " +json.video);
				//$url = Cookies.get('URL');
				$('#portal').get(0).pause(); 
				$('#video_address').attr('src', json.video);
				$('#portal').get(0).load();
			})
//		}
//	});
});