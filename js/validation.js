//hello

//Find the form
var registrationForm = document.querySelector('#registration');

// Wait for the user to submit the form
registrationForm.onsubmit = function(event) {

	// Stop the form from submitting
	event.preventDefault();
}