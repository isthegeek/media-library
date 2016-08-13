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
        $('.item-container').css("display", "inline-block");
    }
  };

}(jQuery, Drupal));
