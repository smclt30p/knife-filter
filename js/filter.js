/*
 * Knife Filter - Content Script
 *
 * This is the primary JS file that manages the detection and filtration of Donald Trump from the web page.
 */

// Variables
var regex = /1000 degree/i;
var search = regex.exec(document.body.innerText);
var selector = "a:contains('1000 degree'), a:contains('1000 Degree'), a:contains('1000 DEGREE')";

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/* Watch the body */
$("#body-container").ready(function() {
	filter();
	continue_filter();
	console.log("Body loaded");

});

async function continue_filter() {
	
	console.log("Starting continuous kill");
	
	for (;;) {
		await sleep(2000);
		console.log("Cooling things down...");
		filter();
	}
}

/* Kill suggestions on ajax load */
$("#watch7-sidebar-contents").bind("DOMSubtreeModified", function() {
	filter();
});

function filter() {

	if (search) {
		elements = $(selector).closest("li");
		elements.fadeOut("fast");
	}

}