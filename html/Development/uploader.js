$(document).ready(function() {
    var myId = 4;
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
                for (i = 0; i < myClasses.length; i++){
                    $(".button").append('<button type="button">'+myClasses[i].ClassName+'</button>');
                    
          }
})

$("#add").click(function(){
 $(".form").append('<form action="#">\
<input type="text" name="name" placeholder="Enter Film Name">\
<input type="text" name="dueDate" placeholder="Due Date"><br>\
 <input type="text" name="runtime" placeholder="runtime">\
 <div class="button"></div>\
 <input type="file" id="image"  name="image" >\
 <button class="btn btn-sm btn-info upload" type="submit">Upload</button>\
 <button type="button" class="btn btn-sm btn-danger cancel">Cancel</button>\
<div class="progress progress-striped active">\
<div class="progress-bar" style="width:0%"></div>\
</div>\
</form>');});

    $('.upload-all').click(function(){
        //submit all form
        $('form').trigger("submita");
    });
    $('.cancel-all').click(function(){
        //submit all form
        $('form .cancel').click();
    });
    $(document).on('submit','form',function(e){
        e.preventDefault();
        $form = $(this);
        uploadImage($form,"yes");
    });
  $(document).on('submita','form',function(e){
        e.preventDefault();
        $form = $(this);
	var run=true;
	if($form.children("input").filter('[name=name]').val() ==""){
	$form.children("input").filter('[name=name]').css('border-color', 'red');
	run=false;
		}
	if( $form.children("input").filter('[name=dueDate]').val() ==""){
		$form.children("input").filter('[name=dueDate]').css('border-color', 'red');
	run=false;
       }
	if(run==true){ uploadImage($form,"no");
	}
    })

    function uploadImage($form,check){
if($form.children("input").filter('#image').val()!=""){
      $form.find('.progress-bar').removeClass('progress-bar-success')
                                    .removeClass('progress-bar-danger');
        var formdata = new FormData($form[0]); //formelement
        var request = new XMLHttpRequest();
        //progress event...
        request.upload.addEventListener('progress',function(e){
            var percent = Math.round(e.loaded/e.total * 100);
            $form.find('.progress-bar').width(percent+'%').html(percent+'%');

        });
        //progress completed load event
        request.addEventListener('load',function(e){
            $form.find('.progress-bar').addClass('progress-bar-success').html('upload completed....');
        });
        request.open('post', 'uploader.php');
        console.log('here');
        request.send(formdata);
}
else if(check=="yes"){
alert("no video selected to upload");}
        $form.on('click','.cancel',function(){
            request.abort();
            $form.find('.progress-bar')
                .addClass('progress-bar-danger')
                .removeClass('progress-bar-success')
                .html('upload aborted...');

        });
    }
}); // End of Document Ready
