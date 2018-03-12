$url = Cookies.get('URL');
$('#portal').get(0).pause(); 
$('#video_address').attr('src', $url);
$('#portal').get(0).load();