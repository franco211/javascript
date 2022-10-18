(function(){
    "use strict";
    
    let pTag = document.querySelector('p');
    let btn = document.querySelector('button');

    btn.addEventListener('click', () => {
        if(btn === 'click') return
        //add a new paragraph to the div
        let myTag = document.createElement('p');
        let mySentence = document.createTextNode('A new paragraph');
        myTag.appendChild(mySentence);
        document.querySelector('div').appendChild(myTag);

    });
}());