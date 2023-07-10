// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// variable characters that are allowed to be used in password:
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numeric = "0123456789".split("");
var specialCharacters = "!#$%&*+,-./:;<=>?@_~".split("");

// In the function is where I want to make string var. Look into split for js, do if statements
function generatePassword() {
  var container = [];
  var builder = "";

  var passwordLength = prompt("How long would you like your password to be? (8-128)");
  // Use OR to keep password length within range of 8-128
  if (passwordLength < 8 || passwordLength > 128) {
    alert("You must have a length between 8 and 128. Please Retry!");
    generatePassword();
  };
  // Instead of doing y/n selections, will just use cancel for no and ok for yes to keep code more simple and clean
  if (confirm("Proceed with lowercase values in your password?")) {
    container = container.concat(lowerCase);
  };
  if (confirm("Proceed with uppercase values in your password?")) {
    container = container.concat(upperCase);
  };
  if (confirm("Proceed with numeric values in your password?")) {
    container = container.concat(numeric);
  };
  if (confirm("Proceed with special character values in your password?")) {
    container = container.concat(specialCharacters);
  };
  if (container.length === 0) {
    alert("You must choose atleast one character type. Please Retry!")
    generatePassword();
  } else {
    for (var i = 0; i < passwordLength; i++) {
      var randomIndex = Math.floor(Math.random() * container.length);
      builder += container[randomIndex];
    };
  };
  return builder;
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);