(function (jQuery) {

	// marqGallery plugin jQuery('ul_id').marqGallery({speed:2000})
	jQuery.fn.marqGallery = function (params) {

		params = jQuery.extend({ speed: 2000 }, params);

		// traverse all nodes
		this.each(function () {

			var t = jQuery(this);
			var ul = jQuery('ul', t)[0]
			var elements = jQuery('li', t);
			var images = jQuery('li img', t)

			var images_count = images.length
			var loaded_images = 0;
			var images_loaded = false;
			var images_sources = [];

			var margin = parseInt(jQuery(elements[0]).css('margin-right').replace('px', '')) + parseInt(jQuery(elements[0]).css('margin-left').replace('px', ''))

			jQuery(images).each(function (i, img) {
				src = jQuery(img).attr('src');
				if (jQuery.inArray(src, images_sources) == -1) {
					images_sources[images_sources.length] = src
				}
			})

			images_count = images_sources.length

			function first_image_width() {
				return jQuery(jQuery('li', jQuery(ul))[0]).width()
			}

			function first_image_wrapper() {
				return jQuery('li', jQuery(ul))[0]
			}

			function animation_callback() {
				img = first_image_wrapper()
				jQuery(img).remove();
				go_to = '-' + (first_image_width() + 40) + 'px';
				jQuery(ul).append(img);
				jQuery(ul).css('left', '0px');
				goNext()
			}

			function init_gallery() {
				var ul_width = 0;
				jQuery(elements).each(function (index, img_wrapper) {
					ul_width = ul_width + jQuery(img_wrapper).width() + margin;
				});

				jQuery(t).css('overflow', 'hidden');
				jQuery(ul).css('width', ul_width + "px");
				jQuery(ul).css('position', 'relative');

				goNext()
				t[0].goNext = goNext
			}

			function goNext() {
				go_to = '-' + (first_image_width() + margin) + 'px';
				jQuery(ul).animate({ left: go_to }, params.speed, "linear", animation_callback);
			}

			function preload_images() {
				loaded_images = loaded_images + 1;
				if (loaded_images == images_count) {
					images_loaded = true;
					init_gallery();
				}
			}

			jQuery(images).each(function (index, image) {
				jQuery(image).load(preload_images);
			})

		});

		// allow jQuery chaining
		return this;
	};

})(jQuery);