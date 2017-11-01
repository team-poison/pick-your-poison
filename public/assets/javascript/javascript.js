$(document).ready(function() {

	 $("#drink-location-panel").on("click", function (event) {
		console.log(event.target.id)
		// $("#drink-selection-panel").attr("class", "panel panel-primary")
		//Get name of the id that was clicked, and change attribute in the html. From that, display the location of the drink.
	});

});
