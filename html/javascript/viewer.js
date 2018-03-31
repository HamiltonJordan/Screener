 $.get("getvideo.php?video=already&titlev=already", "", function (response){
        json=JSON.parse(response);
        alert("already " +json.video);

//$url = Cookies.get('URL');
$('#portal').get(0).pause(); 
$('#video_address').attr('src', json.video);
$('#portal').get(0).load();
}
