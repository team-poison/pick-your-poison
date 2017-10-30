$(document).ready(function() {

 // 	$("#drink-selection-panel").on("click", function (event) {
	// 	console.log(event.target.id)
	//  	$.ajax({
	//  		url: "/"+event.target.id,
	//  		method: GET,
	 		
	//  	})
	// 	//Get name of the id that was clicked, and change attribute in the html. From that, display the location of the drink.
	// });

	 $("#drink-location-panel").on("click", function (event) {
		console.log(event.target.id)
		// $("#drink-selection-panel").attr("class", "panel panel-primary")
		//Get name of the id that was clicked, and change attribute in the html. From that, display the location of the drink.
	});

});
