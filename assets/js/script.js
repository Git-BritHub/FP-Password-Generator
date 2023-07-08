// Assignment code here
// variable characters that are allowed to be used in password:
var countMin = min(8);
var countMax = max(128);
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = "0123456789";
var specialCharacters = "!#$%&*+,-./:;<=>?@_~";

// In the function is where I want to make string var. Look into split for js, do if statements
function generatePassword() {
  console.log ("Here");
  // Will use let instead of var because let is only used once, var can be used however many times we'd like.
  let count= prompt("How many characters?");
  let lowerCase = prompt("Do you want lower case? (y/n)");
  let upperCase= prompt("Do you want upperCase? (y/n)");
  let numeric = prompt("How many numbers?");
  let specialCharacters = prompt("Do you want special characters? (y/n)");
  
  console.log (count, lowerCase, upperCase, specialCharacters,numeric);

//Want to make for-loop so that password can't be be shorter than 8 or longer than 128
for (var i = 0; i >= passwordLengthMin; i <= passwordLengthMax; i++) {

}  
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
