// Assignment code here
// This is where I want to make string var. Look into split for js, do if statements
function generatePassword() {
  console.log ("Here");
  let count= prompt("How many characters?");
  let lowerCase = prompt("Do you want lower case (y/n)?");
  let upperCase= prompt("Do you want upperCase (y/n)");
  let specialCharacters = prompt("Do you special characters (y/n)");
  let numeric = prompt("How many numbers?");

  console.log (count, lowerCase, upperCase, specialCharacters,numeric);
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
