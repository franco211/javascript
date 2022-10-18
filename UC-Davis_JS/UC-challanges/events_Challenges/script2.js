(function(){
    "use strict";
    
    let pTags = document.querySelectorAll('p');
    let btn = document.querySelector('button');

        btn.addEventListener('click', () => {
            for(let i= 0; i<pTags.length; i++){
                pTags[i].style.color ="green";

            }
    });
}());