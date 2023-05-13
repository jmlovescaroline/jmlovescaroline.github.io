pepperArray = [
	'1.jpg',
	'2.jpg',
	'3.jpg',
	'4.jpg',
	'5.jpg'
]

function getRandomPepper(){
	
	randomNumber = Math.floor(Math.random() * pepperArray.length);
	
	selectedPepper = pepperArray[randomNumber]

	document.getElementById('pepperShower').src = 'imagesA/${selectedPepper}'

}