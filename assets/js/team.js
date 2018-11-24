$(document).ready(function(){
    
    // Set up the years
	$("#about-team-select").empty();

	var dateObject = new Date();

    /*
	var queryYear = getUrlParam("season");
	if (queryYear == null){
		queryYear = dateObject.getFullYear();
	}
    */

	for (var year = dateObject.getFullYear(); year >= 2015; year--){
		// $(baseObject).append($("<option></option>").val(year).html((year - 1) + " - " + year + " Season"));
		$("#about-team-select").append($("<option></option>").val(year).html("Season " + (year - 1) + " - " + year));
	}

	// $("#about-team-select").val(queryYear);

	// Handle

	$("#about-team-select").change(function(data){
		var selectedYear = $("#about-team-select").val();
		// updateQueryStringParam("season", selectedYear);
		loadTeamHistory(selectedYear);
	});

	loadTeamHistory($("#about-team-select").val());
    
})

function loadTeamHistory(year){
    console.log("Loading team data for the " + (year - 1) + " - " + year + " season");
}