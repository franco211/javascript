(()=>{
    'use strict';
    	
		let convertType = 'miles';
		const heading = document.querySelector('h1');
		const intro = document.querySelector('p');
		const answerDiv = document.getElementById('answer');
		const form = document.getElementById('convert');

		document.addEventListener('keydown', event=>{
			const key = event.code;

			if(key === 'KeyK'){
				convertType = 'kilometers';
				heading.innerHTML = 'kilometers to Miles converter';
				intro.innerHTML = 'Type in a number of kilometers and click the button to convert the distance to miles.'	
			}
			else if(key === 'KeyM'){
				convertType = 'miles';
				heading.innerHTML = 'Miles to Kilometers converter';
				intro.innerHTML = 'Type in a number of miles and click the button to convert the distance to kilometers.'
			}
		});

		form.addEventListener('submit', event=>{
			event.preventDefault();
			const distance = parseFloat(document.getElementById('distance').value);

			if(distance){
				if(convertType =='miles'){
					const convertingToMiles = (distance *1.609344).toFixed(3);
					answerDiv.innerHTML = `${distance} miles converts to ${distance} kilometers`;
				}
				else{
					const convertingToKilometers = (distance *0.621371192).toFixed(3);
					answerDiv.innerHTML = `${distance} kilometers converts to ${distance} miles`;
				}
			}
			else{
				answerDiv.innerHTML = `<h2>please provide a number</h2>`
			}
		});
})();