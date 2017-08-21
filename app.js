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

function validateLogin() {
	// get email, password and submit input
	var email = document.login.email.value;
	var password = document.login.password.value;
	var submit = document.login.submit;

	// Check if email or password is blank, if not enable submit button 
   	if ((( email != "" ) && ( password != "" ) && ( password.length>=8 ))){
   		submit.disabled = false;
   	}
}

function validateEmail() {
	// Get email	
	var email = document.login.email.value;

	// Validate email 
	var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length) {
        alert("Not a valid e-mail address");
        return false;
    }
}

// Listen to form input and fire validation
window.addEventListener('input', function (e) {
 	// console.log("keyup event detected! coming from this element:", e.target);
	validateLogin();
}, false);