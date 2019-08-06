$("form").submit(function(e) {

	e.preventDefault();
	// $("form").remove();	
	
	// CREATES 5 DIVS ON EACH CLICK
	for (i = 0; i < 5; i++) {
		var newDiv = $(`<div>DIV</div>`)
		$("article").prepend(newDiv)
	}
	// CREATES ONE DIV ON EACH CLICK
	// var newDiv = $(`<div>DIV</div>`);
	// $("article").prepend(newDiv);

});