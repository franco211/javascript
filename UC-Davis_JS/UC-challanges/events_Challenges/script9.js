(function(){
    "use strict";

    var bodyTag = document.querySelector('body');

        document.addEventListener('keydown', event =>{

            var keyPressed = event.which;

            switch (true) {
            case 66: bodyTag.className = 'one'; break;
            case 86: bodyTag.className = 'two'; break;
            case 67: bodyTag.className = 'three'; break;
            case 70: bodyTag.className = 'four'; break;
            case 71: bodyTag.className = 'five'; break;
            default:alert('press the required keys');;
            }
        })
}());