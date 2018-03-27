//Instructor.js
var myClass = new Object();
/*
myClass = [
	{
		ClassName:"ENG310",
		student:[
			{"FirstName":"Jordan", "LastName":"Hamilton", "WID":"w00305623"},
			{"FirstName":"Jack", "LastName":"Hohnson", "WID":"w1234"},
			{"FirstName":"Jules", "LastName":"Harworth", "WID":"w6789"},
			{"FirstName":"Jill", "LastName":"Hemper", "WID":"w38293"}
		]
	},
	{
		ClassName:"PHIL101",
		student:[
			{"FirstName":"Tim", "LastName":"Scolder", "WID":"w94837"},
			{"FirstName":"Towely", "LastName":"Scooter", "WID":"w0000420"}
		]
	},
	{
		ClassName:"FNMS255",
		student:[
			{"FirstName":"Harvey", "LastName":"Lobstop", "WID":"w58333373"},
			{"FirstName":"Harriet", "LastName":"Lilywrat", "WID":"w238288882"}
		]
	},
	{
		ClassName:"COMP111",
		student:[
			{"FirstName":"Borey", "LastName":"Fidleman", "WID":"w12122"},
			{"FirstName":"Belhop", "LastName":"Fortnight", "WID":"w9473"},
			{"FirstName":"Bernstein", "LastName":"Franderbick", "WID":"w098977"}
		]
	}
];
*/
function populateClass(response){
	for (var i = 0; i < $myClasses.ClassList.length; i++){
		$("#class-entry-point").append('<button type="button" class="btn btn-secondary classButton" id="b'+i+'">'+$myClasses.ClassList[0].ClassNumber+'</button>');
	}
}
function populateStuds(target_class){
	//Delete what was previously in students table
	$("#id-entry-point").children("tr").remove();

	//Populate table with students
	for (var i = 0; i < $myClasses.ClassList.length; i++) {
		if ($myClasses.ClassList[i].ClassNumber == target_class) {
			for (var j=0; j < $myClasses.ClassList[i].studentList.length; j++) {
				$("#id-entry-point").append('<tr><td>' + $myClasses.ClassList[i].studentList[j].FirstName + '</td><td>' + $myClasses.ClassList[i].studentList[j].LastName + '</td><td>' + $myClasses.ClassList[i].studentList[j].WheatonId + '</td><td class="delete"><svg width="30" height="11" class="minus-frame"><rect x="2" y="1" rx="5" ry="5" width="26" height="8" class="minus-symbol" /></svg></td></tr>');
			}
		}
	}
	$('.delete').click(function() {
		alert('hello world');
	});
}
//alert(myClass[0].student[3].FirstName);
$(document).ready(function () {

	var myId = 4; //Gousie
	$.get("http://screener.onthewifi.com/instructor.php?instructorId="+myId)
		.done(function (response){
			$myClasses = JSON.parse(response);
			populateClass();
		})
		.fail(function (){
			alert("failed to connect to the database");
		});
	alert("here");
	$class_selected = null;
	$("#id-table").hide();
	$(".classButton").click(function(){
		$newClass = $("#"+this.id).html();
		if ($newClass == $class_selected){
			$("#id-table").hide(500);
			$class_selected = null;
		}
		else{
			$class_selected = $newClass;
			populateStuds($class_selected);
			$("#id-table").show(500);
		}
	});
});