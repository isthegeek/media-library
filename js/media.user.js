/**
 * @file media.user.js
 */
(function ($, Drupal) {

  "use strict";

  /**
   * Registers behaviours related to view widget.
   */

  Drupal.behaviors.MediaLibraryUser = {
    attach: function (context, settings) {
       /*For User Page*/
      
      var $view = $('.view-content', context);
      $view.once('media').prepend('<div class="grid-sizer"></div><div class="gutter-sizer"></div>');

      // Indicate that images are loading.
      $view.append('<div class="ajax-progress ajax-progress-fullscreen">&nbsp;</div>');
      $view.imagesLoaded(function () {
        $view.masonry({
          columnWidth: '.grid-sizer',
          gutter: '.gutter-sizer',
          itemSelector: '.grid-item',
          percentPosition: true,
          isFitWidth:true
        });
        // Add a class to reveal the loaded images, which avoids FOUC.
        $('.grid-item').addClass('item-style');
        $viewuser.find('.ajax-progress').remove();
      });
    }
  };

}(jQuery, Drupal));
