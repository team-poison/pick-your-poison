$(document).ready(function() {

	var inputLength = 11

	var restaurantInput = [];
	for (var i = 0; i < inputLength; i++) {
		restaurantInput.push(0);
	}

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

	$(".drink-type-button").on("click", function(event) {
		var drinkName = event.target.id
		$.get("/drink/"+drinkName, function(data) {
			$("#modal-title").html(drinkName)
			var restaurants = data.restaurant;
			$("#modal-buttons").empty()
			for (var i = 0; i < restaurants.length; i++) {
				$("#modal-buttons").append(
					'<li><button type="button" class="btn btn-warning" data-toggle="modal" data-target="#restaurant-modal"'+
					'id="'+restaurants[i]+'">'+restaurants[i]+'</button></li>' 
				);
			};
		});
	});

	$("#drink-modal").on("click", function(event) {
		var restaurantName = event.target.id
		$("#restaurant-modal-title").html(restaurantName)
		$.get("/restaurant/"+restaurantName, function(data) {	
			console.log(data)
			$("#restaurant-blurb").empty()
			$("#restaurant-blurb").html(data.restaurantInfo.blurb)
		});
	});

	$("#submit-restaurant").on("click", function() {
			
  	var newRestaurant = {
  		"name": $("#rest-name").val(),
  		"blurb": $("#blurb-field").val(),
  		"input": restaurantInput
  	};

  	$.post("managerOption/submitRestaurant", newRestaurant, function(data){});
	});

	$("#update-inventory").on("click", function() {
		var updateInfo = {
  		"name": $("#rest-name").val(),
  		"input": restaurantInput
  	};

  	$.post("/managerOption/updateInventory", updateInfo, function(data) {});
	});


	$("#submit-drink").on("click", function() {

	  	var newDrink = {
	  		"drinkName": $("#drink-name").val(),
	  	}; 

  		$.post("/managerOption/submitDrink", newDrink, function(data){});
  });

});
