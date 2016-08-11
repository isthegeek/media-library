/**
 * @file media.view.js
 */
(function ($, Drupal) {

  "use strict";

  /**
   * Registers behaviours related to view widget.
   */

  Drupal.behaviors.MediaLibraryView = {
    attach: function (context, settings) {
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
        $view.find('.ajax-progress').remove();
      });

      $('.grid-item').once('bind-click-event').click(function () {
        var input = $(this).find('.views-field-entity-browser-select input');
        input.prop('checked', !input.prop('checked'));
        if (input.prop('checked')) {
          $(this).addClass('checked');
          var render = $(this).find('.views-field-rendered-entity');
          $(render).css('opacity',0.3);
        }
        else {
          $(this).removeClass('checked');
          var render = $(this).find('.views-field-rendered-entity');
          $(render).css('opacity',1);
        }
      });
      /*For User Page*/

      var $viewuser = $('.view-content-library', context);
      $viewuser.once('media').prepend('<div class="grid-sizer-library"></div><div class="gutter-sizer-library"></div>');

      // Indicate that images are loading.
      $viewuser.append('<div class="ajax-progress ajax-progress-fullscreen">&nbsp;</div>');
      $viewuser.imagesLoaded(function () {
        $viewuser.masonry({
          columnWidth: '.grid-sizer-library',
          gutter: '.gutter-sizer-library',
          itemSelector: '.grid-item-library',
          percentPosition: true,
          isFitWidth:true
        });
        // Add a class to reveal the loaded images, which avoids FOUC.
        $('.grid-item-library').addClass('item-style');
        $viewuser.find('.ajax-progress').remove();
      });
      /*Slides View*/
      var $viewrow = $('.entities-list', context);
      $viewrow.once('media').prepend('<div class="grid-sizer-library"></div><div class="gutter-sizer-library"></div>');

      // Indicate that images are loading.
      $viewrow.append('<div class="ajax-progress ajax-progress-fullscreen">&nbsp;</div>');
      $viewrow.imagesLoaded(function () {
        $viewrow.masonry({
          columnWidth: '.grid-sizer-library',
          gutter: '.gutter-sizer-library',
          itemSelector: '.item-container',
          percentPosition: true,
          isFitWidth:true
        });
        window.twttr = function (d, s, id) {
        var t, js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return; js = d.createElement(s); js.id = id;
        js.src = "https://platform.twitter.com/widgets.js";
        fjs.parentNode.insertBefore(js, fjs);
        return window.twttr || (t = { _e: [], ready: function (f) { t._e.push(f) } });
        }(document, 'script', 'twitter-wjs');

        twttr.ready(function (twttr) {
          twttr.events.bind('loaded', function (event) {
        //MASONRY RELAYOUT HERE
          $viewrow.masonry({
          columnWidth: '.grid-sizer-library',
          gutter: '.gutter-sizer-library',
          itemSelector: '.item-container',
          percentPosition: true,
          isFitWidth:true
            });
          });
        });
        // Add a class to reveal the loaded images, which avoids FOUC.
        $('.grid-item-library').addClass('item-style');
        $viewrow.find('.ajax-progress').remove();
      });
    }
  };

}(jQuery, Drupal));
