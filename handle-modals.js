/* open a modal when a "read more" link is clicked in portfolio section */
$(".portfolio-read-more").click(function(e){
	var modalNum = $(e.target).attr("data-modal-num");
	$(".portfolio-modal-container.modal-"+modalNum).css("display", "block").scrollTop(0);
	
	/* disable scrolling on body to allow scrolling of modal */
	$("body").css("overflow", "hidden");
});

/* close (hide) all modals upon clicking a close button within one */
$(".portfolio-close-button, .portfolio-x-button").click(function() {
	$(".portfolio-modal-container").css("display", "none");
	
	/* re enable scrolling on body now that modal has disappeared */
	$("body").css("overflow", "auto");
});
