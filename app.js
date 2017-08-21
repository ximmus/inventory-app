  /////////////////
 // Login modal //
/////////////////

var modal = document.getElementById('login-modal');

function openModal() {
    modal.style.display = "block";
}

function closeModal() {
    modal.style.display = "none";
}

// Open modal on load 
window.onload = openModal();

  //////////////////////
 // Login validation //
//////////////////////

// Dummy creditials
var credintials = {
	email: "sumer@ximm.us",
	password: "password",
	remember: false
};

// Get submit button
var submit = document.login.submit;

// get email, password and submit input
var email = document.login.email.value;
var password = document.login.password.value;

function validateInput() {
	// update email, password and submit input
	email = document.login.email.value;
	password = document.login.password.value;
	

	// Check if email or password is blank, if not enable submit button 
   	if ((( email != "" ) && ( password != "" ) && ( password.length>=8 ))){
   		submit.disabled = false;
   	} else { submit.disabled = true; }
}

function validateEmail() {
	// Update email and error message	
	email = document.login.email.value;
	emailError = document.getElementById('email-error');

	// Validate email 
	var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length) {
        emailError.style.display = "inline";
        return false;
    } else emailError.style.display = "none";
}

// Listen to form input and fire validation
window.addEventListener('input', function (e) {
 	// console.log("keyup event detected! coming from this element:", e.target);
	validateInput();
}, false);

function validateCredintials() {
	email = document.login.email.value;
	password = document.login.password.value;
	remember = document.login.remember.checked; // Checked? true of false
	
	var loginError = document.getElementById('login-error');
	var loginForm = document.getElementById("userLogin");

	if (( email == credintials.email ) && ( password == credintials.password )) {
		console.log("Success" + remember );
		closeModal();
	} else {
		console.log("Nope");
		loginError.style.display = "inline";
		loginForm.reset();
		submit.disabled = true;
	}
}