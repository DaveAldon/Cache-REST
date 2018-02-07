$.callRest = function () {
	$.ajax({
		url:"login.html",
    type: "GET",
    dataType: "text",
    	success: function (response) {
    		$("#content").html(response);
        console.log(response);
    	},

      error: function(error) {
        console.log("Error: " + error);
      }
	});
};

// Event handling
$(document).ready(function() {
  $("#loginbtn").click(function() {
	   $.callRest();
  });
});
