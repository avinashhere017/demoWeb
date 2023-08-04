// Alert on form submission
document
  .getElementById("submit-button")
  .addEventListener("click", function (event) {
    event.preventDefault();
    alert("Thanks for contacting us!");
    // Reset form fields after submission (optional)
    document.querySelector(".contact-form").reset();
  });

// Alert for login and signup buttons
document.querySelector(".login-button").addEventListener("click", function () {
  var loginFields = prompt("Please enter your login credentials:\n\nUsername:");
  if (loginFields !== null && loginFields.trim() !== "") {
    // Process loginFields here
    alert("Logging in...");
  }
});

document.querySelector(".signup-button").addEventListener("click", function () {
  var signupFields = prompt(
    "Please enter your signup information:\n\nUsername:\nEmail:\nPassword:"
  );
  if (signupFields !== null && signupFields.trim() !== "") {
    // Process signupFields here
    alert("Signing up...");
  }
});
