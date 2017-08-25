// $('.main-carousel').flickity({
//   // options
//   cellAlign: 'left',
//   contain: true
// });

// $(document).load(function() {
// 	$(".carousel").hide();
//   // Run code
// });


$(document).ready(function() {
	
	$('.carousel').carousel({
				  interval: 2000
					});

	$("#submitButton").on("click", function(){
		event.preventDefault();
		$(".cards").hide();
		$(".carousel").show();
		$(".team").hide();
	});
});