//Instructor.js
$system_max_fsize = Math.pow(10,24);
function populateClass(response){
	for (var i = 0; i < $myClasses.ClassList.length; i++){
		if ($myClasses.ClassList[i].studentList.length == 0){
			continue;
		}
		$("#class-entry-point").append('<button type="button" class="btn btn-secondary classButton" id="b'+i+'">'+$myClasses.ClassList[i].ClassNumber+'</button>');
		$("#checkbox-entry-point").append('<input class="form-check-input" type="checkbox" id="inlineCheckbox'+i+'" name="classopt[]" value='+$myClasses.ClassList[i].ClassId+'><label class="form-check-label margin-10-right" for="inlineCheckbox'+i+'">'+$myClasses.ClassList[i].ClassNumber+'</label>');

	}
	//$("#class-entry-point").append('<button type="button" class="btn btn-secondary" id="addClass"><b>+</b></button>');
}
function populateStuds(target_class){
	//Delete what was previously in students table
	$("#id-entry-point").children("tr").remove();
	//Populate table with students
	for (var i = 0; i < $myClasses.ClassList.length; i++) {
		if ($myClasses.ClassList[i].ClassNumber == target_class) {
			for (var j=0; j < $myClasses.ClassList[i].studentList.length; j++) {
				$("#id-entry-point").append('<tr><td>' + $myClasses.ClassList[i].studentList[j].FirstName + '</td><td>' + $myClasses.ClassList[i].studentList[j].LastName + '</td><td>' + $myClasses.ClassList[i].studentList[j].WheatonId + '</td><td class="delete" data-count="'+j+'"><svg width="30" height="11" class="minus-frame"><rect x="2" y="1" rx="5" ry="5" width="26" height="8" class="minus-symbol" /></svg></td></tr>');
			}
		}
	}
	$('.delete').click(function() {
		$c = confirm("Are you sure you want to delete this student?");
		$target = new Object();
		if ($c) {	//Delete record
			//$target stores info for record to delete
			$target.s_index = $(this).attr("data-count");
			$target.ClassName = target_class;	
			for (var i = 0; i < $myClasses.ClassList.length; i++) {
				if ($myClasses.ClassList[i].ClassNumber == target_class) {
					$target.c_index = i;
				}
			}
			$target.FirstName = $myClasses.ClassList[$target.c_index].studentList[$target.s_index].FirstName;
			$target.LastName = $myClasses.ClassList[$target.c_index].studentList[$target.s_index].LastName;
			$target.WheatonId = $myClasses.ClassList[$target.c_index].studentList[$target.s_index].WheatonId;
			$target.ClassId = $myClasses.ClassList[$target.c_index].ClassId;
			$target.StudentId = $myClasses.ClassList[$target.c_index].studentList[$target.s_index].StudentId;
			//alert("First Name: "+$target.FirstName+"\nLast Name: "+$target.LastName+"\nWheaton Id: "+$target.WheatonId+"\nClass: "+$target.ClassName+"\nClassId: "+$target.ClassId+"\nStudentId: "+$target.StudentId);
			$.get("http://screener.onthewifi.com/DeleteUser.php?userId="+$target.StudentId+"&classId="+$target.ClassId)
				.done(function (response){
					alert("User: "+$target.FirstName+" "+$target.LastName+" removed from "+$class_selected);
					location.reload();

					//populateStuds($class_selected);
				})
				.fail(function (){
					alert("failed to connect to the database");
				});
		}
	});
}
function prepTable(argument){
	$class_selected = null;
	$class_selectedEl = null;
	$("#id-table").hide();
	$("#add-field").hide();
	$(".classButton").click(function(){
		$("#addClass").removeClass("current_button");
		$(this).addClass("current_button");
		$("#new-class-field").hide(100);
		$newClass = $("#"+this.id).html();
		$newClassEl = $(this);
		if ($newClass == $class_selected){
			$("#id-table").hide(500);
			$("#add-field").hide(500);
			$(this).removeClass("current_button");
			$class_selected = null;
			$class_selectedEl = null;
		}
		else{
			$class_selected = $newClass;
			$($class_selectedEl).removeClass("current_button");
			$class_selectedEl = $newClassEl;
			populateStuds($class_selected);
			$("#id-table").show(500);
			$("#add-field").show(500);
			$(this).addClass("current_button");
		}
	});
	$("#addClass").click(function(){
		if ($class_selectedEl != null) {
			$($class_selectedEl).removeClass("current_button");
		}
		$(this).toggleClass("current_button");
		$("#id-table").hide(500);
		$("#add-field").hide(500);
		$("#new-class-field").toggle(500);
	});
}
function AJAX_loadClasses(argument){
	alert("AJAX");
	//var myId=4 Gousie
	$.get("http://screener.onthewifi.com/instructor.php")
		.done(function (response){
			alert("upload func");
			$myClasses = JSON.parse(response);
			populateClass();	//Populate class button row with buttons
			prepTable();
			setupUpload();

		})
		.fail(function (){
			alert("failed to connect to the database");
		});
}

function setupUpload(argument){
	alert("entered setupUpload");
	function uploadVideo($form){
		var $video= $("#image");//$form.children("input").filter('#image');
		var fsize = $video[0].files[0].size;
		alert("size: "+fsize);
		var ftype =$video[0].files[0].type;
		if($video.val()!="" && fsize<$system_max_fsize){
			$form.find('.progress-bar').removeClass('progress-bar-success').removeClass('progress-bar-danger');
			var formdata = new FormData($form[0]); //formelement
			var request = new XMLHttpRequest();
			//progress event...
			request.upload.addEventListener('progress',function(e){
				var percent = Math.round(e.loaded/e.total * 100);
				$form.find('#progress-bar').width(percent+'%').html(percent+'%');

			});
			//progress completed load event
			request.addEventListener('load',function(e){
				$form.find('#progress-bar').addClass('progress-bar-success').html('upload completed....');
			});
		
			alert("start post");
			/*
			$name_entered = $("#title").val();
			$duedate_entered = $("#dueDate").val();
			$runtime_entered = $("#runtime").val();
			alert($name_entered);
			$.post("uploader.php", {name: $name_entered, duedate: $duedate_entered, runtime:$runtime_entered})
				.done(function(result){
					$("span").html(result);
					alert("success!");
				})
				.fail(function(){
					alert("post failed");
				});
			//End Post
			alert("end post");
			*/
			//open pipe to php
			request.open('post', 'uploader.php');
			//send data to php
			request.send(formdata);
		}
		else if($fize > $system_max_fsize){
			alert("no video selected to upload or File selected is too large");
		}
		$form.on('click','#cancel_icon',function(){
			request.abort();
			$form.find('.progress-bar')
				.addClass('progress-bar-danger')
				.removeClass('progress-bar-success')
				.html('upload aborted...');

		});
	}
	$( "#upload-form" ).submit(function( event ) {
		alert( "Handler for .submit() called." );
		event.preventDefault();
		$form = $(this);
		uploadVideo($form);
	});
}

//alert(myClass[0].student[3].FirstName);
$(document).ready(function () {
	//var myId = 4; //Gousie
	//$userID = 4;
	AJAX_loadClasses();
	$("#dueDate").datepicker();
	$("#new-class-field").hide();
	$('#submit-student').click(function() {
		$wid = $("#WheatonId-field").val();
		if ($wid !== '') {
			//Find Class ID for classSelected
			for (var i = 0; i < $myClasses.ClassList.length; i++) {
				if ($myClasses.ClassList[i].ClassNumber == $class_selected) {
					$cid = $myClasses.ClassList[i].ClassId;
				}
			}
			$.get("AddUser.php?wheatonId="+$wid+"&classId="+$cid)
				.done(function (response) {
					$response = JSON.parse(response);
					if ($response.success == true) {
						//populateStuds();
						alert("Student added successfully");
						location.reload();
					}
					if ($response.success == "true") {
						alert("Student not added to database");
					}
				})
				.fail(function (){
					alert("failed to connect to the database");
				});
		}
		else {
			alert("No Student Information");
		}
	});
	$("#submit-class").click(function(){
		var newClass = {
			classTitle: "",
			classCode: "",
			studentList: [],
			Active: 0
		};
		// Grabs student Ids.
		var studentIds = $("#studentIds").val().split(',');
		var length = studentIds.length;

		// Cleans the input of student IDs and adds to newClass list.
		for (var i=0; i < length; i++) {
			studentIds[i] = studentIds[i].replace(/\s/g, "");
			newClass.studentList.push(studentIds[i]);
		}

		// Updates last values in newClass object.
		newClass.classTitle = $("#classTitle").val();
		newClass.classCode  = $("#classCode").val();
		newClass.Active = 1;
		// Turns the object into JSON string
		var json = JSON.stringify(newClass);
		alert(json);

		//Sends the data to PHP to update the list.
		$.get("AddClass.php?classObject="+json, function(response){
			console.log(response);
			var myObj = JSON.parse(response);
			if (myObj.success) {
				alert('we gucci, we added ' + newClass.classTitle + ' to the database.' 
					+ 'We also enrolled '+ myObj.rowCount + ' students to the class.');
				location.reload();
			}
			else {
				alert('failed to post data.');
			}

		});

	}); // End of Button.Click Function
	/*
	$("#upload-form").validate(
	{
		rules:
		{
			dueDate: 
			{
				required: true,
				date: true
			},
			image: 
			{
				required: true,
				extension: "mp4"
			},
			name: 
			{
				required: true,
				minlength: 5
			},
			"classopt[]": 
			{ 
				required: true 
			},
		},
		messages: 
		{
			dueDate: 
			{
				required: "Please enter a date",
				date: "Please enter a vaild date"
			},
			image: 
			{
				extension:"Please select only  mp4, gif, ogg, and flv  files"
			},
			name: 
			{
				required: "Please enter Film name",
				minlength: "Please enter minimum 5 characters"
			}
		}
	});
	*/
	alert("finished JS");
}); // End of Document.Ready

