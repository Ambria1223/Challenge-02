// Assignment Code
var generateBtn = document.querySelector("#generate");
var minLength = parseInt(prompt("Enter the minimum length of the password (8-128 characters):"));
while (minLength < 8 || minLength > 128) {
  alert("Password length must be between 8 and 128 characters");
  minLength = parseInt(prompt("Enter the minimum length of the password (8-128 characters):"));
}

var specialChars = prompt("Enter the special characters to include in the password (e.g. !@#$%^&*):");
var hasUppercase = confirm("Should the password include uppercase letters?");
var numericValue = confirm("Should the password include numbers?")

// Write password to the #password input
var passwordField = document.getElementById("password");
passwordField.value = myPassword;

// Add event listener to generate button
var generateButton = document.getElementById("generateButton");
generateButton.addEventListener("click", function() {
  var minLength = parseInt(prompt("Enter the minimum length of the password (8-128 characters):"));
  while (minLength < 8 || minLength > 128) {
    alert("Password length must be between 8 and 128 characters");
    minLength = parseInt(prompt("Enter the minimum length of the password (8-128 characters):"));
  }

  var specialChars = prompt("Enter the special characters to include in the password (e.g. !@#$%^&*):");
  var hasUppercase = confirm("Should the password include uppercase letters?");
  var myPassword = generatePassword(minLength, specialChars, hasUppercase);
  var passwordField = document.getElementById("password");
  passwordField.value = myPassword;
});
