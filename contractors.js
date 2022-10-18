const post= document.getElementById("post");
post.addEventListener("click", function(){
    const commentBoxValue= document.getElementById("comment").value;
 
    const li = document.createElement("li");
    const text = document.createTextNode(commentBoxValue);
    li.appendChild(text);
 
});


/* checks for validity. */

const nameInput = document.querySelector('input');

nameInput.addEventListener('invalid', () => {
  nameInput.setCustomValidity('Please enter your name.');
  nameInput.checkValidity();
});

nameInput.addEventListener('invalid', () => {
  if (nameInput.value === '') {
    nameInput.setCustomValidity('Enter your Contractor_name!');
  } else {
    nameInput.setCustomValidity('Usernames can only contain upper and lowercase letters. Try again!');
  }
});

document.addEventListener('blur', function (event) {
// Validate the field
      const isValid = event.target.validity.valid;
      const message = event.target.validationMessage;
      const connectedValidationId = event.target.getAttribute('aria-described');
      const connectedValidation = connectedValidationId ? document.getElementById(connectedValidationId) : false;

   if (connectedValidation && message && !isValid) {
     connectedValidation.innerText = message;
   } else {
     connectedValidation.innerText = '';
  }
}, true);


//time 
const timeControl = document.querySelector('input[type="time"]');
timeControl.value = '15:30';
