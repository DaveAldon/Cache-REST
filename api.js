$.callRest = function () {
	$.ajax({
		url:"login.html",
    	success: function (response) {
    		$("p").text(response.title).appendTo("body");
        $("<div class=\"content\"/>").html(response.html).appendTo("body");
        console.log("done");
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
	$.callRest();
});
