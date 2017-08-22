$(document).ready(function(){



	$(document).on("click", "button.search", sendSearchInfo(finalQuery));


	var  address = $('.address').val().trim();
	var city = $('.city').val().trim;
	var state = $('.state').val().trim;
	var zip = $('.zip').val().trim;
	var lat = $('.lat').val().trim;
	var long = $('.long').val().trim;
	var image_url = $('.image_url').val().trim;
	//var queryURL = "/?";

	// query should look like this: 
	var finalQuery = "/?address=" + address + "&city=" + city +"&state=" + state + "&zip=" + zip + "&lat=" + lat + "&long=" + long + "&image_url=" + image_url;




var sendSearchInfo = function(finalQuery) {
	$.ajax(
		{
			method: "GET",
			url: "/api/" + finalQuery
		}
	).done(function(receivedSearchInfo) {
		//  now use the data to post it for the user
		
	})
}


});