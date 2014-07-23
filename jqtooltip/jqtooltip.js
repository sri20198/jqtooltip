(function ($) {
	Drupal.behaviors.Jqtooltip = {
		attach: function(context, settings) {
			$('body').tooltip({
				  track: true
			});
		}
	};
})(jQuery);
