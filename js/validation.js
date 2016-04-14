//hello

//Find the form
var registrationForm = document.querySelector('#registration');

// Wait for the user to submit the form
registrationForm.onsubmit = function(event) {

	// Count how many errors there are
	var totalErrors = 0;

	

	// Get references to the input fields
	var usernameInput = document.querySelector('#username');
	var usernameMessage = document.querySelector("#username-message");
	var nameInput = document.querySelector("#full-name");
	var nameMessage = document.querySelector("#full-name-message");
	var campusMessage = document.querySelector("#campus-message");
	var campusOptions = document.querySelectorAll("[name=campus]");

	//Check the name
	if( namePattern.test(nameInput.value)) {
		// Name is valid
		console.log("Name is valid");
		nameMessage.innerHTML = "";
	} else {
		// Name is invalid
		console.log("Name is invalid");
		nameMessage.innerHTML = "Name is invalid"
		totalErrors++;
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
		totalErrors++;
	}

	// Loop over all the campus options
	var campusIsSelected = false;

	for(var i=0; i<campusOptions.length; i++) {

		// Check if this campas has been selected
		if( campusOptions[i].checked ) {
			campusIsSelected = true;
		}
	}

	// If campusIsSelected is still false
	if( campusIsSelected == false ) {
		campusMessage.innerHTML = "Please select a campus";
		totalErrors++;
	} else {
		campusMessage.innerHTML = " ";
	}

	// If the total errors is greater than 0
	if( totalErrors>0 ) {

		// Stop the form from submitting
		event.preventDefault();
	}

	
}














