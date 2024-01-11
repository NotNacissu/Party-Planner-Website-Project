/* This is your JavaScript file. You will use this file to create actions in your HTML pages */



// CODE FOR FAQ.HTML

// For this code, I recieved help from https://www.w3schools.com/howto/howto_css_modals.asp to create the code for the modal.

// Function to close a modal when submitting
function closeModal() {
  modal.style.display = "none";
}

// Function to display the alert message
function showAlert(message) {
  var alertMessage = document.getElementById("alertMessage");
  alertMessage.textContent = message;
  alertMessage.classList.add("active"); // Add the 'active' class to show the alert
}

// Function to hide the alert message
function hideAlert() {
  var alertMessage = document.getElementById("alertMessage");
  alertMessage.classList.remove("active"); // Remove the 'active' class to hide the alert
}

// Function to handle form submission
function handleSubmit(event) {
  event.preventDefault(); // Prevent the form from submitting

  // Get the form inputs
  var nameInput = document.getElementById("name");
  var emailInput = document.getElementById("email");
  var messageInput = document.getElementById("message");

  // Check if any of the fields are empty. If any are empty, show an alert.
  if (nameInput.value === "" || emailInput.value === "" || messageInput.value === "") {
      showAlert("Please fill in all fields before submitting.");
  } else {
      // Close the modal if the form was filled correctly
      closeModal();

      // Show a success alert saying the form was submitted.
      showSuccessAlert("Feedback submitted successfully!");

      // Hide the success alert after a few seconds (optional)
      setTimeout(hideAlert, 3000); // Hide the alert after 3 seconds (adjust as needed)
  }
}

// Gets the modal
var modal = document.getElementById("myModal");

// Gets the submit button
var submitButton = document.getElementById("submitButton");

// Add a click event listener to the submit button
submitButton.addEventListener("click", handleSubmit);

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element (the x button in the top right of the modal) that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on the x at the top right, close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
      modal.style.display = "none";
  }
}

//END OF FAQ.HTML CODE

//START OF REGPAY.HTML CODE

// Function to handle registration form submission
function registerUser() {
  // Get the value of the "name" input field
  var nameInput = document.getElementById("name").value;
  // Get the value of the "email" input field
  var emailInput = document.getElementById("email").value;

  // Check if both name and email are filled
  if (nameInput && emailInput) {
    // Display the registration success alert
    showSuccessAlert("Thank you for registering!");
  } else {
    // If either field is empty, show an error alert
    var errorMessage = "Please fill in all registration fields.";
    showAlert(errorMessage);
  }
}

// Function to handle payment form submission
function processPayment() {
  // Get the value of the "cardNumber" input field
  var cardNumberInput = document.getElementById("cardNumber").value;
  // Get the value of the "expiryDate" input field
  var expiryDateInput = document.getElementById("expiryDate").value;

  // Check if both cardNumber and expiryDate are filled
  if (cardNumberInput && expiryDateInput) {
    // Display the payment success alert
    showSuccessAlert("Payment processed successfully!");
  } else {
    // If either field is empty, show an error alert
    var errorMessage = "Please fill in all payment fields.";
    showAlert(errorMessage);
  }
}

// Function to display styled alerts
function showAlert(message) {
  // Create a new div element for the alert
  var alertBox = document.createElement("div");
  // Add a custom CSS class for styling
  alertBox.className = "custom-alert";
  // Set the alert message text
  alertBox.textContent = message;
  // Append the alert to the body of the document
  document.body.appendChild(alertBox);

  // Set a timer to hide the alert after 3 seconds
  setTimeout(function () {
    alertBox.style.display = "none";
  }, 3000);
}

// Function to display a styled success alert
function showSuccessAlert(message) {
  // Create a new div element for the success alert
  var successBox = document.createElement("div");
  // Add a CSS class for styling success alerts
  successBox.className = "success-alert";
  // Set the success message text
  successBox.textContent = message;
  // Append the success alert to the body of the document
  document.body.appendChild(successBox);

  // Set a timer to hide the success alert after 3 seconds
  setTimeout(function () {
    successBox.style.display = "none";
  }, 3000);
}