(function(){
    "use strict";

    let myForm = document.querySelector('form');
    let h1Tag  = document.querySelector('h1')

    myForm.addEventListener('submit', event => {
        event.preventDefault()
        let formData = parseInt(document.querySelector('input').value);

        if(formData){
            h1Tag.style.fontSize = formData + 'px';
        }
        else{
            alert('you have to enter a number')
        }
    })
}());