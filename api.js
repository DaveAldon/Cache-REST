$.callRest = function () {
	$.ajax({
		url:"login.html",
    type: "GET",
    dataType: "text",
    	success: function (response) {
    		$("<p>").text(response.title).appendTo("body");
        $("<div class=\"content\"/>").html(response.html).appendTo("body");
        console.log(response);
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
	   $.callRest();
  });
});
