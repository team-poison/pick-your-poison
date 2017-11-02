$(document).ready(function() {

	var inputLength = 11

	var restaurantInput = [];
	for (var i = 0; i < inputLength; i++) {
		restaurantInput.push(0);
	}
	
	var questionArray = ["q1", "q2", "q3", "q4", "q5", "q6", "q7", "q8", "q9", "q10", "q11"]
	var questionArrayLength = questionArray.length

	// $("#drink-stock").on("click", function(event) {
	// 	console.log(event.target.id)
	// 	for (var i = 0; i < questionArrayLength; i++) {
	// 		if (event.target.id === questionArrayLength[i]) {
	// 			console.log("I'm working!")
	// 		};
	// 	};
	// });

	$("#q1").on("click", function(event) {
		if (event.target.id === "user-input") {
			console.log(event.target.value)
			restaurantInput.splice(0, 1, parseInt(event.target.value))
		}
	});

	$("#q2").on("click", function(event) {
		if (event.target.id === "user-input") {
			console.log(event.target.value)
			restaurantInput.splice(1, 1, parseInt(event.target.value))
		}
	});

	$("#q3").on("click", function(event) {
		if (event.target.id === "user-input") {
			console.log(event.target.value)
			restaurantInput.splice(2, 1, parseInt(event.target.value))
		}
	});

	$("#q4").on("click", function(event) {
		if (event.target.id === "user-input") {
			console.log(event.target.value)
			restaurantInput.splice(3, 1, parseInt(event.target.value))
		}
	});

	$("#q5").on("click", function(event) {
		if (event.target.id === "user-input") {
			console.log(event.target.value)
			restaurantInput.splice(4, 1, parseInt(event.target.value))
		}
	});

	$("#q6").on("click", function(event) {
		if (event.target.id === "user-input") {
			console.log(event.target.value)
			restaurantInput.splice(5, 1, parseInt(event.target.value))
		}
	});

	$("#q7").on("click", function(event) {
		if (event.target.id === "user-input") {
			console.log(event.target.value)
			restaurantInput.splice(6, 1, parseInt(event.target.value))
		}
	});

	$("#q8").on("click", function(event) {
		if (event.target.id === "user-input") {
			console.log(event.target.value)
			restaurantInput.splice(7, 1, parseInt(event.target.value))
		}
	});

	$("#q9").on("click", function(event) {
		if (event.target.id === "user-input") {
			console.log(event.target.value)
			restaurantInput.splice(8, 1, parseInt(event.target.value))
		}
	});

	$("#q10").on("click", function(event) {
		if (event.target.id === "user-input") {
			console.log(event.target.value)
			restaurantInput.splice(9, 1, parseInt(event.target.value))
		}
	});

	$("#q11").on("click", function(event) {
		if (event.target.id === "user-input") {
			console.log(event.target.value)
			restaurantInput.splice(10, 1, parseInt(event.target.value))
		}
	});

    $("#submit-restaurant").on("click", function() {

    	var newRestaurant = {
    		"name": $("#rest-name").val(),
    		"location": $("#rest-loc").val(),
    		"input": restaurantInput
    	};

    	// Grab the URL of the website

    	// AJAX post the data to the friends API. 
    	$.post("/managerOption/submitRestaurant", newRestaurant, function(data) {});

    });

});
