//hello

//Find the form
var registrationForm = document.querySelector('#registration');

// Wait for the user to submit the form
registrationForm.onsubmit = function(event) {

	// Patterns to use in validation
	var usernamePattern = new RegExp("^[a-zA-Z0-9.\-_]{3,20}$");
	var namePattern = new RegExp("^[a-zA-Z' .-]{1,30}$");

	// Get references to the input fields
	var usernameInput = document.querySelector('#username');
	var usernameMessage = document.querySelector("#username-message");
	var nameInput = document.querySelector("#full-name");
	var nameMessage = document.querySelector("#full-name-message");

	//Check the name
	if( namePattern.test(nameInput.value)) {
		// Name is valid
		console.log("Name is valid");
		nameMessage.innerHTML = "";
	} else {
		// Name is invalid
		console.log("Name is invalid");
		nameMessage.innerHTML = "Name is invalid"
	}

	//Check the username
	if( usernamePattern.test(usernameInput.value)) {
		// Username is valid
		console.log("Username is valid");
		usernameMessage.innerHTML = "";
	} else {
		// Username is invalid
		console.log("Username is invalid");
		usernameMessage.innerHTML = "Username is invalid"
	}

	// Stop the form from submitting
	event.preventDefault();
}














