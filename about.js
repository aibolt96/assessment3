console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Form Submitted');
}

function compliment(evt) {
	evt.preventDefault();
	
	alert('You are doing great!');
}

let img = document.getElementById('catImg')
let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);
img.addEventListener('mouseover', compliment)