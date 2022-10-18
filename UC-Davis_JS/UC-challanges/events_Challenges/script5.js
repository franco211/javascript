(function(){
    "use strict";
    
    let btnAdd = document.querySelectorAll('button')[0];
        let btnRemove = document.querySelectorAll('button')[1];
        let myDiv = document.querySelector('div');
        let numOfPs = 1;


        btnAdd.addEventListener('click', () =>{
            numOfPs++;
            let newP = document.createElement('p');
            let pText = document.createTextNode(
                `This is a paragraph number ${numOfPs}`
            );
            newP.appendChild(pText);
            myDiv.appendChild(newP);
        })

        btnRemove.addEventListener('click', () =>{
            if(numOfPs > 1){
                myDiv.removeChild(myDiv.children[numOfPs-1]);
                numOfPs --;
            }
            else return 
            alert('do not remove the last paragraph')
        })
        
}());