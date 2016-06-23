/**
 * @file media.user.js
 */
(function ($, Drupal) {view

  "use strict";

  /**
   * Registers behaviours related to view widget.
   */

  Drupal.behaviors.MediaLibraryUser = {
    attach: function (context, settings) {
      alert("hey");
    }
  };

}(jQuery, Drupal));
