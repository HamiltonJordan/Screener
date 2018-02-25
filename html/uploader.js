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
        request.send(formdata);
        $form.on('click','.cancel',function(){
            request.abort();
            $form.find('.progress-bar')
                .addClass('progress-bar-danger')
                .removeClass('progress-bar-success')
                .html('upload aborted...');
        });
    }
}); // End of Document Ready