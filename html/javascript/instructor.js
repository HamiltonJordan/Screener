//Instructor.js
var myClass = new Object();
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
function populate(target_class){
	//alert(myClass.length);
	$("#id-entry-point").children("tr").remove();
	for (var i = 0; i < myClass.length; i++) {
		if (myClass[i].ClassName == target_class) {
			for (var j=0; j < myClass[i].student.length; j++) {
				$("#id-entry-point").append('<tr><td>' + myClass[i].student[j].FirstName + '</td><td>' + myClass[i].student[j].LastName + '</td><td>' + myClass[i].student[j].WID + '</td></tr>');
			}
		}
	}
}
//alert(myClass[0].student[3].FirstName);
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
		populate($class_selected);
		$("#id-table").show(500);
	}
});