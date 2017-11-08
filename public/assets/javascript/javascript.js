$(document).ready(function() {

	$.get("/fillStockForm", function(data) {
		
		var drinksArray = data.drink;
		var restaurantInput = [];
		for (var i = 0; i < drinksArray.length; i++) {
			restaurantInput.push(0);
		}

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
				$("#drink-modal-buttons").empty()
				for (var i = 0; i < restaurants.length; i++) {
					$("#drink-modal-buttons").append(
						'<li><button type="button" class="btn btn-warning restaurant-selection-button" data-toggle="modal" data-target="#restaurant-modal"'+
						'id="'+restaurants[i]+'">'+restaurants[i]+'</button></li>' 
					);
				};
			});
		});

		$("#drink-modal-buttons").on("click", function(event) {
			if (event.target.className === "btn btn-warning restaurant-selection-button") {
				var restaurantName = event.target.id
				$("#restaurant-modal-title").empty()
				$("#restaurant-modal-title").html(restaurantName)
				$("#current-restaurant").empty()
				$("#current-restaurant").html(restaurantName)
				console.log("/restaurant/"+restaurantName)
				restaurantName = restaurantName.replace(/'/, "''")
				$.get("/restaurant/"+restaurantName, function(data) {	
					console.log(data)
					$("#restaurant-blurb").empty()
					$("#restaurant-blurb").html(data["restaurantInfo"]["blurb"])
					var drinksServed = []
					for (x in data["restaurantInfo"]) {
						if (x !== "blurb" || x !== "id" || x !== "restaurant") {
							if (data["restaurantInfo"][x] === 1) {
								drinksServed.push(x.replace(/_/g , " "))
							};
						};
					};
					$("#drinks-served").empty()
					for (var i = 0; i < drinksServed.length; i++) {
						$("#drinks-served").append('<li style="color: black">'+drinksServed[i]+'</li>');
					};
				});
			};
		});

		$("#submit-restaurant").on("click", function() {
				
	  	var newRestaurant = {
	  		"name": $("#rest-name").val(),
	  		"blurb": $("#blurb-field").val(),
	  		"columns": drinksArray,
	  		"input": restaurantInput
	  	};

	  	$("#submission-summary").empty()
	  	$("#submission-summary").append('<li style="color: black">'+newRestaurant)

	  	$.post("managerOption/submitRestaurant", newRestaurant, function(data){});
		});

		$("#update-inventory").on("click", function() {
			var updateInfo = {
	  		"name": $("#rest-name").val(),
	  		"blurb": $("#blurb-field").val(),
	  		"columns": drinksArray,
	  		"input": restaurantInput
	  	};

	  	$.post("/managerOption/updateInventory", updateInfo, function(data) {});
		});


		$("#submit-drink").on("click", function() {

	  	var newDrink = {
	  		"drinkName": $("#drink-name").val(),
	  	};

	  	$("#submitted-drink").html(newDrink["drinkName"]); 

			$.post("/managerOption/submitDrink", newDrink, function(data){});
		});
	});
});
