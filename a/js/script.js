// Example
function example() {	
	
}

// breakpoints

$(window).setBreakpoints({
// use only largest available vs use all available
	distinct: true, 
// array of widths in pixels where breakpoints
// should be triggered
	breakpoints: [
		320,
		480,
		768,
		1024
	] 
});		

$(window).bind('enterBreakpoint320',function() {
	...
});

$(window).bind('exitBreakpoint320',function() {
	...
});

$(window).bind('enterBreakpoint768',function() {
	...
});

$(window).bind('exitBreakpoint768',function() {
	...
});


$(window).bind('enterBreakpoint1024',function() {
	...
});

$(window).bind('exitBreakpoint1024',function() {
	...
});

/* EXECUTE JAVASCRIPT */

/* On Document Ready */
$(document).ready(function() {	
	example();
});