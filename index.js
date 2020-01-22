'use strict'

function muhButton() {
$('.nav-toggle').on('click', function(event) {
        event.preventDefault();
        //$('.nav-list').removeClass('.hidden');
        $('.hidden').show();
    });
}

$(muhButton());
