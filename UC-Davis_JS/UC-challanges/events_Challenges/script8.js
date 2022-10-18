(function(){
    "use strict";

    let pageTop;
    let bodyTag = document.querySelector('body');

    window.addEventListener('scroll', () =>{
        pageTop = window.pageYOffset;

        switch (true) {
        case pageTop < 500: bodyTag.className = 'one'; break;
        case pageTop < 1000: bodyTag.className = 'two'; break;
        case pageTop < 1500: bodyTag.className = 'three'; break;
        case pageTop < 2000: bodyTag.className = 'four'; break;
        default: bodyTag.className = 'five';
    }
    })
}());