'use strict';

(function ($) {
    $('#btn-team-read-more').click( function () {
        $('.hide-text-jm').show(500);
        $('#btn-team-read-more').hide();
    });
    $('#btn-team-hide').click( function () {
        $('.hide-text-jm').hide(500);
        $('#btn-team-read-more').show();
    });
}(jQuery));
