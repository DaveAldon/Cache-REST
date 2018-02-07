// Table definition for artist result
var results_table =
  "<table id='rt'>" +
  "<tr><td id='pic'rowspan=2></td>" +
  "<td id='name'></td></tr>" +
  "<tr><td id='about'></td>" +
  "</tr></table";

var token, response = "";
// Workaround until I can figure out unauthorized web apps
var pcd = {"Authorization": "Basic " + btoa("pcdrest:pcdrest")}
// This function uses our token to send an api to spotify in order to get
// information about an artist
$.callRest = function (query, reqToken = false) {
	var capture = "";
	$.ajax({
		headers: { pcd },
		url:"http://localhost:57772/csp/restserver/" + query,
    	success: function (response) {
    		console.log(response)
    		if(reqToken) {
    			$.captureToken(response)
    			$('#token').text(JSON.parse(response).token);
    		}
    		else $.capture(response)
    	}
	});
};

// Callbacks for ajax token
$.captureToken = function (r) {
	token = JSON.parse(r).token;
}
$.capture = function (r) {
	response = r["token"];
}

// Event handling
$(document).ready(function() {
	$("#loginbtn").click(function() {
		var temp = document.getElementsByTagName("template")[0];
		  var clon = temp.content.cloneNode(true);
		  document.body.appendChild(clon);
	  });
  $("#search").click(function() {
	  //var query = "GetPerson/" + $("#query").val() + "/" + token;
	  var payload = {
		  "auth":token,
		  //"auth":$('#customToken').val(),
		  "payload": [{
			  "name": $("#query").val()
		  }]
	  };
	  var query = "validate/" + JSON.stringify(payload);
	  $.callRest(query);
  });
  $("#register").click(function() {
	  var query = "register/" + $("#regUsername").val() + "/" + $("#regPassword").val() + "/" + $("#sq").val() + "/" + $("#sa").val();
	  $.callRest(query);
  });
  $("#login").click(function() {
	  var payload = {
		  "username":$("#loginUsername").val(),
		  "password":$("#loginPassword").val() 
	  };
	  var query = "login/" + JSON.stringify(payload);
	  $.callRest(query, true);
  });
});

