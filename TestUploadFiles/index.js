$(document).ready(function() {

    $('.upload-all').click(function(){
        //submit all form
        $('form').submit();
    });
    $('.cancel-all').click(function(){
        //submit all form
        $('form .cancel').click();
    });
    $(document).on('submit','form',function(e){
        e.preventDefault();
        $form = $(this);
        uploadImage($form);
    });
    function uploadImage($form){
        $form.find('.progress-bar').removeClass('progress-bar-success')  // Not Needed
                                    .removeClass('progress-bar-danger'); // Not Needed

        // Needed
        var formdata = new FormData($form[0]); //formelement {data}
        var request = new XMLHttpRequest();


        //progress event...
        request.upload.addEventListener('progress',function(e){          // Not Needed
            var percent = Math.round(e.loaded/e.total * 100);            // Not Needed
            $form.find('.progress-bar').width(percent+'%').html(percent+'%'); // Not Needed
        });
        //progress completed load event
        request.addEventListener('load',function(e){                    // Not Needed 
            $form.find('.progress-bar').addClass('progress-bar-success').html('upload completed....');
        });

        // Needed
        request.open('post', 'server.php');
        request.send(formdata);
        $form.on('click','.cancel',function(){
            request.abort();
            
            // Not Needed
            $form.find('.progress-bar')
                .addClass('progress-bar-danger')
                .removeClass('progress-bar-success')
                .html('upload aborted...');
        });
    }
}); // End of Document Ready