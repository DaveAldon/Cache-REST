// Table definition for artist result
var results_table =
  "<table id='rt'>" +
  "<tr><td id='pic'rowspan=2></td>" +
  "<td id='name'></td></tr>" +
  "<tr><td id='about'></td>" +
  "</tr></table";

// This function uses our token to send an api to spotify in order to get
// information about an artist
$.searchArtists = function (query) {
  $.ajax({

    type: 'GET',
    crossDomain: true,
    headers: {
      'Content-Type': 'application/json',
    "Access-Control-Allow-Origin": '*',
    "Authorization": "Basic " + btoa("Admin" + ":" + "tristensteele")
    },
    url:"https://localhost:57772/csp/pcd/info",
      success: function (response) {
        console.log(response);
      }
  });
};

// Event handling
$(document).ready(function() {

  // Search event where the text box contents are sent to our query
  // The results are faded into view
  $("#search").click(function() {
    $('#results').css('visibility','hidden').hide().fadeIn("slow");
    if(!jQuery.trim($("#query").val()).length > 0) {
      $("#query").val('');
      $('#results').html('<b>Please enter an org\'s name</b>');
      $('#results').css('visibility','visible').hide().fadeIn("slow");
      return false;
    }
    $.searchArtists($("#query").val());
    $("#query").val('');
    $('#results').css('visibility','visible').hide().fadeIn("slow");
  });
});
