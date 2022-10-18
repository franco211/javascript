(function(){
    "use strict";
    
    let btnAdd = document.querySelectorAll('button')[0];
        let btnRemove = document.querySelectorAll('button')[1];
        let myP = document.querySelector('p');

        btnAdd.addEventListener('click', () => {
            if(btnAdd === 'click') return
            //add a new paragraph to the div
            let myTag = document.createElement('p');
            let mySentence = document.createTextNode('A new paragraph');
            myTag.appendChild(mySentence);
            document.querySelector('div').appendChild(myTag);

        });

        btnRemove.addEventListener('click', () =>{
           if(btnRemove === "click") return
            //use the button to remove paragraph
                let myDiv = document.querySelector('div');
                myDiv.removeChild(myDiv.lastElementChild);
        })
}());