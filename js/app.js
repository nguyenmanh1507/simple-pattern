(function() {
	'use strict';
	/**
	 * Main menu
	 */
	var mainMenu = $('.sf-menu');

	// Create the reponsive menu by cloning
	// the existing one.
	mainMenu.clone().removeClass().addClass('rwd-menu').prependTo('.navbar-container nav');

	// Initialize the superfish menu.
	mainMenu.superfish();

	// Toggle the responsive menu.
	$('#rwd-trigger').on('click', function(e) {
		e.preventDefault();
		$('.rwd-menu').slideToggle();
	});

	/**
	 * Main menu
	 */
	$('#animations').find('.demo-col').on('click', function() {
		var $this = $(this);
		$this.addClass('animated ' + $this.text());

		window.setTimeout(function() {
			$this.removeClass('animated ' + $this.text());
		}, 1400);
	});

	/**
	 * Tabs.
	 */
	$('.tabs-links a').on('click', function(e) {
		e.preventDefault();

		var $this = $(this),
		// Get the target tab.
				newTab = $(this).attr('href');

		// Show the targeted tab content while hiding the rest.
		$(newTab).show().siblings().hide();

		// Add the active class to the parent list item while removing it from the rest.
		$(this).parent('li')
			.addClass('active')
			.siblings()
			.removeClass('active');
	});

	/**
	 * Accordions.
	 */
	$('.accordion-element-title').on('click', function(e) {
		e.preventDefault();

		// Get the target accordion.
		var targetAccordion = $(this).attr('href');

		// Collapse all accordion elements.
		$('.accordion-element-title').removeClass('active');
		$('.accordion-element-content').hide();

		// Show the targeted element only.
		$(this).addClass('active');
		$(targetAccordion).slideDown();
	});

}());