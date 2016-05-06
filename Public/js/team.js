'use strict';

(function ($) {
    $('.btn-team-read-more').click( function () {
      var userId = $(this).attr('data-id')
      $('#' + userId + '.hide-text-jm').show(500);
      $('#btn-team-read-more' + '.' + userId).hide();
    });
    $('.btn-team-hide').click( function () {
      var userId = $(this).attr('data-id')
      $('#' + userId + '.hide-text-jm').hide(500);
      $('#btn-team-read-more' + '.' + userId).show();
    });
}(jQuery));
