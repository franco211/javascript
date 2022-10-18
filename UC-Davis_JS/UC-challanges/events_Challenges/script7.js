(function(){
    "use strict";

    var myDiv = document.querySelector('div');

        myDiv.addEventListener('mouseover', () =>{
            myDiv.classList.add('big');
        });

        myDiv.addEventListener('mouseout', () =>{
            myDiv.classList.remove('big');
        });

}());