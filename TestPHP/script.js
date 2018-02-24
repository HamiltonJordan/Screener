$(document).ready(function() {

	
	var loginQuery = 'dbarber';
	var notNeeded;

  	$.get("test.php?login="+loginQuery, notNeeded, function (response) {
				console.log('request sent');
				var myObj = JSON.parse (response);
				if (myObj.success) {
					var userList = myObj.users;

					for (i=0; i<userList.length; i++) {
						var htmlList = "<ul><li>" + "Id = " + userList[i].Id + 
													"| First Name = " + userList[i].FirstName + 
													"| Last Name = " + userList[i].LastName + 
													"| Active = " + userList[i].Active +   "</li><ul>";
						$(".data").append(htmlList);
					}
									}
				else {
					
				}
			}); // End of Ajax call




}); // End of Document Ready