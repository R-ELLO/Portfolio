'use strict'

$('nav-toggle').on('click', function(event) {
    event.preventDefault();
    //$('ul').removeClass('.hidden');
    $('.hidden').show();
})
