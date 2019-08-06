// $(document).ready(function() {
// 	for (i = 0; i < 5; i++) {
// 			var newDiv = $(`<div>DIV</div>`)
// 			$("article").prepend(newDiv)
// 	}
// });

$("form").submit(function(e) {

	e.preventDefault();
	// $("form").remove();	
	
	// CREATES 5 DIVS ON EACH CLICK
	
	// CREATES ONE DIV ON EACH CLICK
	// var newDiv = $(`<div>DIV</div>`);
	// $("article").prepend(newDiv);
	
	// Within the input field change the value to "Search for..."
	// $("#msg").attr("value", "Search for...");

	// Add a class name of "box" to each new DIVS
	// $("div").addClass("box");

	// Change the link to "www.codefactory.wien"
	$("footer a").attr("href", "www.codefactory.wien");
});
