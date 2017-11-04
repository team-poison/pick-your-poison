$(document).ready(function() {

	var inputLength = 11

	var restaurantInput = [];
	for (var i = 0; i < inputLength; i++) {
		restaurantInput.push(0);
	}
<<<<<<< HEAD

	var drinksArray = ["Blantons", "Four Roses", "Pappy Van Winkle - 15 years", 
	"Black Maple Hill - 16 years", "Yamazaki - 16 years", "Johnny Walker Blue", 
	"Handcocks Presidential Reserve", "Balvenie - 50 years", "Michters - 20 years", 
	"Elija Craig - 18 years", "Red Beast - 15 years"]

	for (var i = 0; i < drinksArray.length; i++) {

		var userInput = $("<div class='panel panel-default user-input'>");

		var yesRadioButton = $('<label class="radio-inline" style="margin-left:8px; margin-bottom:6px;">');
		var noRadioButton = $('<label class="radio-inline" style="margin-left:15px; margin-bottom:6px;">');

		yesRadioButton.html('<input type="radio" name="optradio" value='+(i+'-1')+'>Yes');
		noRadioButton.html('<input type="radio" name="optradio" value='+(i+'-0')+'>No');

		userInput.append('<p class="panel-heading" id="drink-title">'+drinksArray[i]+'</p>');
		userInput.append(yesRadioButton)
		userInput.append(noRadioButton)

		$("#drink-stock-form").append(userInput);
	};

	$(".user-input").on("click", function(event) {
		var userInput = event.target.value
		restaurantInput.splice(parseInt(userInput.split("-")[0]), 1, parseInt(userInput.split("-")[1]));
	});

    $("#submit-restaurant").on("click", function() {

    	var newRestaurant = {
    		"name": $("#rest-name").val(),
    		"location": $("#rest-loc").val(),
    		"input": restaurantInput
    	};
=======
	
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
>>>>>>> Zoli

  $("#submit-restaurant").on("click", function() {

  	var newRestaurant = {
  		"name": $("#rest-name").val(),
  		"location": $("#rest-loc").val(),
  		"input": restaurantInput
  	};
  	$.post("/managerOption/submitRestaurant", newRestaurant, function(data) {});

<<<<<<< HEAD
    	// AJAX post the data to the friends API. 
    	$.post("/managerOption/submitRestaurant", newRestaurant, function(data) {});
=======
  });

  $("#submit-drink").on("click", function() {

  	var newDrink = {
  		"drinkName": $("#drink-name").val(),
  	}; 
  	$.post("/managerOption/submitDrink", newDrink, function(data) {});
>>>>>>> Zoli

  });

});
