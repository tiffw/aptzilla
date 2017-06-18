
$(document).ready(function() {

	var ingredients = [];
	var ingredientCount = 0;
	var recipe = [];
	var recipeCount = 0;

//Submit ingredients or search for a recipe. Toggle.
	$("#find-recipe-btn").on("click", function () {
		$(".ingredient-search").hide();
		$(".recipe-search").show();
	});

	$("#find-ingredient-btn").on("click", function () {
		$(".recipe-search").hide();
		$(".ingredient-search").show();
	});

	//To submit a list of user ingredients.
	$(".submit-ingredient").on("click", function(){
		var ingredientInput = $("#ingredient-input").val().trim();
		ingredients.push(ingredientInput);
		var pIngredient = $("<p>").text(ingredientInput);
		ingredientCount++;
		// NEED TO FIGURE OUT A WAY TO KEEP THE INGREDIENT COUNT FROM INCREASING BY ONE WHEN NO TEXT IS ENTERED UPON SUBMIT.
		console.log(ingredientCount);
		console.log(ingredients);

		var ingredientsSearchUrl = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?ingredients=";
		var ingredientsSearchKey = "&number=1&limitLicense=false&fillIngredients=true&ranking=1&limitLicense=false&mashape-key=ksQNPjlaz5mshWX43x5882DMHPUtp1ynBxNjsnjPXrtU69MEyX";
		

		if (ingredientInput === "") {
			console.log("Please choose at least one ingredient.");
			// $("#ingredient-input").clear();
		} else if (ingredientCount === 6) {
			$("#ingredient-input").val("");
			// $("#ingredient-input").clear();
			console.log("No more.")

		} else {
			$(".ingredient-list").append(pIngredient);
			$("#ingredient-input").val("");
			// $("#ingredient-input").clear();

			

			// This will be where we will put the objects from the array.
			var ingredientsQueryUrl = ingredientsSearchUrl;
		};

	});

	$(".submit-all").on("click", function(){
		var allIngredients = $(".ingredient-list").val().trim();
		console.log(allIngredients);

		//First part
		var fridgeSearchUrl = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?ingredients=";

		//Second part
		var fridgeSearchKey = "&number=10&limitLicense=false&fillIngredients=true&ranking=1&limitLicense=false&mashape-key=ksQNPjlaz5mshWX43x5882DMHPUtp1ynBxNjsnjPXrtU69MEyX";

		var ingredientsOutput = ingredients.join('+');

		var url = fridgeSearchUrl + ingredientsOutput + fridgeSearchKey;

		console.log(ingredientsOutput);

		//Ajax call for the image.
		$.ajax({
			url: url,
			data: {
				ingredients: ingredientsOutput,
				number: 10,
				method: "GET"
			}
			
		}).done(function(response) {
		

		// For loop to run through all of the objects in the array.
		for (var i = 0; i < response.length; i++) {
			var fridgeImage = response[i].id;
			var recipeInput = response[i].id;
			var dataId = response[i].id;

			//Append images.
			$(".meal-results" + i).attr("src", response[i].image).attr("dataId", dataId);
			$(".meal-results" + i).append();
			console.log(dataId);

			//Append titles.
			$(".title" + i).text(response[i].title);
			$(".title" + i).append();


		// var recipeSearchKey = "?mashape-key=ksQNPjlaz5mshWX43x5882DMHPUtp1ynBxNjsnjPXrtU69MEyX";

		// var recipeSearchUrl = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/" + recipeInput + "/summary" + recipeSearchKey;

		// $.ajax ({
		// 	url: recipeSearchUrl,
		// 	method: "GET"
		// }).done(function(response) {
		// 	console.log(response);
		// 	console.log("This is the caption number: " + i);
		// 	// $(".caption" + i).text(response.summary);
		// 	// $(".caption" + i).append();
		// 	var desc = response.summary;
		// 	var cap = $("<p>").html(desc);
		// 	$(".caption").append(cap);

		// });


		};


	});

});

	//To search a desired recipe.
	$(".submit-recipe").on("click", function(){
		var recipeInput = $("#recipe-input").val().trim();
		recipe.push(recipeInput);

		// Second part of the URL
		var recipeSearchKey = "&mashape-key=ksQNPjlaz5mshWX43x5882DMHPUtp1ynBxNjsnjPXrtU69MEyX";
		//First part
		var recipeSearchUrl = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search?number=10&limitLicense=false&query=" + recipeInput + recipeSearchKey;

		var imagesUrl = "https://spoonacular.com/recipeImages/"

		


		$.ajax ({
			url: recipeSearchUrl,
			number: 10,
			method: "GET"
		}).done(function(response) {
		console.log(response.results);

			for (var i = 0; i < 10; i++) {
				var fridgeImage = response.results[i].id;
				var recipeInput = response.results[i].id;
				var imagesFileName = response.results[i].image;
				var dataId = response.results[i].id;
				console.log(fridgeImage);

				//Append images.
				$(".meal-results" + i).attr("src", imagesUrl + imagesFileName).attr("dataId", dataId);
				$(".meal-results" + i).append();
				console.log(dataId);

				//Append titles.
				$(".title" + i).text(response.results[i].title);
				$(".title" + i).append();

		};
	});
})

});	



