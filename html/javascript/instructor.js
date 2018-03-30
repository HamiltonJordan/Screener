//Instructor.js

function populateClass(response){
	for (var i = 0; i < $myClasses.ClassList.length; i++){
		$("#class-entry-point").append('<button type="button" class="btn btn-secondary classButton" id="b'+i+'">'+$myClasses.ClassList[i].ClassNumber+'</button>');
	}
	$("#class-entry-point").append('<button type="button" class="btn btn-secondary" id="addClass"><b>+</b></button>');
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
				})
				.fail(function (){
					alert("failed to connect to the database");
				});
		}
	});
}
function prepTable(argument){
	$class_selected = null;
	$("#id-table").hide();
	$("#add-field").hide();
	$(".classButton").click(function(){
		$newClass = $("#"+this.id).html();
		if ($newClass == $class_selected){
			$("#id-table").hide(500);
			$("#add-field").hide(500);
			$class_selected = null;
		}
		else{
			$class_selected = $newClass;
			populateStuds($class_selected);
			$("#id-table").show(500);
			$("#add-field").show(500);
		}
	});
}
function AJAX_refreshClasses(argument){
	var myId = 4; //Gousie
	$.get("http://screener.onthewifi.com/instructor.php?instructorId="+myId)
		.done(function (response){
			$myClasses = JSON.parse(response);
			populateClass();
			prepTable();
		})
		.fail(function (){
			alert("failed to connect to the database");
		});
}

$myClasses="j";
//alert(myClass[0].student[3].FirstName);
$(document).ready(function () {
	alert("stop");
	AJAX_refreshClasses();
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

}); // End of Document.Ready

