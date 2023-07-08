// Assignment code here
// variable characters that are allowed to be used in password:
var password = generatePassword();
var passwordText = document.querySelector("#password");
var countMin = 8;
var countMax = 128;
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = "0123456789";
var specialCharacters = "!#$%&*+,-./:;<=>?@_~";
var allCharacters = lowerCase + upperCase + numeric + specialCharacters;

// In the function is where I want to make string var. Look into split for js, do if statements
function generatePassword() {
  console.log ("Here");
  let count= prompt("How many characters?");
  let lowerCase = prompt("Do you want lower case? (y/n)");
  let upperCase= prompt("Do you want upperCase? (y/n)");
  let numeric = prompt("How many numbers?");
  let specialCharacters = prompt("Do you want special characters? (y/n)");
  console.log (count, lowerCase, upperCase,numeric, specialCharacters);
  //Want to make for-loop so that password can't be be shorter than 8 or longer than 128
  //In this case 'while' is better to use than 'for'. 
  //Not sure if what I did below will account for both min and max
  while(countMin > password.length) {
    password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
  }
  while(countMax < password.length) {
    password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
  }
  var generateBtn = document.querySelector("#generate");

    function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
  //Need to create if statement so that if somebody types in incorrect response to let prompt questions it says:
  //Oops, incorrect character length. Please type a number that is between 8 - 128"
  //Oops, incorrect response. Please type either y for yes or n for no. 
  //Oops, incorrect response. Please give the number amount of how many numbers you would like in your password.

  //need to make sure that selecting 'cancel' in the prompt screen exits you out of the prompt screen and 
  //takes you back to page where you can reselect generator button
}

// Get references to the #generate element
// var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
