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
function populate(target_class){
	//alert(myClass.length);
	$("#id-entry-point").children("tr").remove();
	for (var i = 0; i < myClass.length; i++) {
		if (myClass[i].ClassName == target_class) {
			for (var j=0; j < myClass[i].student.length; j++) {
				$("#id-entry-point").append('<tr><td>' + myClass[i].student[j].FirstName + '</td><td>' + myClass[i].student[j].LastName + '</td><td>' + myClass[i].student[j].WID + '</td><td class="delete"><svg width="30" height="11" class="minus-frame"><rect x="2" y="1" rx="5" ry="5" width="26" height="8" class="minus-symbol" /></svg></td></tr>');
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
			alert("success");
			$myClass = JSON.parse(response);
			alert("a");
			alert($myClass.ClassList[0].ClassNumber);
			alert("b");
			alert(myClass[0].ClassNumber);
			alert("c");
		})
		.fail(function (){
			alert("failed to connect to database");
		});
		//alert("here");
		//myClass=JSON.parse(response);
		//myFilms = {}
		//console.log("response: " + response);
		//console.log("myFilms: " + myFilms);
		//alert(myClass[0]);
		/*
		$last_class="null";
		//For every film in the list returned, create a cell in the table
		for (i = 0; i < myFilms.length; i++){
			if(myFilms[i].ClassName != $last_class){
				$("#entry-point").append('<tr class="table-primary"><th scope="row" colspan="4">'+myFilms[i].ClassName+'</th></tr>');
				$last_class = myFilms[i].ClassName;
			}
			$("#entry-point").append('<tr class="movie-cell"><th scope="row">'+(i+1)+'</th><td class="Title"><a href="viewer.html" id="a'+i+'">'+myFilms[i].Title+'</a></td><td>1:11</td><td>3/31/18</td></tr>');
			$("#a"+i).data("URL", myFilms[i].URL);
		}
		$("a").click(function(){
			Cookies.remove('URL');
			Cookies.set('URL', $("#"+this.id).data("URL"));
		});
		*/
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



	alert("finished");

});