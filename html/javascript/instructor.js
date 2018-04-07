//Instructor.js

function populateClass(response){
	for (var i = 0; i < $myClasses.ClassList.length; i++){
		if ($myClasses.ClassList[i].studentList.length == 0){
			return true;
		}
		$("#class-entry-point").append('<button type="button" class="btn btn-secondary classButton" id="b'+i+'">'+$myClasses.ClassList[i].ClassNumber+'</button>');
		$("#checkbox-entry-point").append('<input class="form-check-input" type="checkbox" id="inlineCheckbox'+i+' name="classopt[]" value='+$myClasses.ClassList[i].ClassId+'><label class="form-check-label margin-10-right" for="inlineCheckbox'+i+'">'+$myClasses.ClassList[i].ClassNumber+'</label>');

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
	//var myId=4 Gousie
	$.get("http://screener.onthewifi.com/instructor.php")
		.done(function (response){
			$myClasses = JSON.parse(response);
			populateClass();	//Populate class button row with buttons
			prepTable();

		})
		.fail(function (){
			alert("failed to connect to the database");
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

}); // End of Document.Ready

