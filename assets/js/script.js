// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Decided to use split for var lower, upper, numeric and special instead of char code chart
// var characters that are allowed to be used in password:
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
    // Resets question if you put incorrect response
    generatePassword();
  }
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
  // If statement below is needed in case someone accidentally selects no/cancel for each one
  if (container.length === 0) {
    alert("You must choose at least one character type. Please Retry!")
    // return "" resets questions if you put incorrect response no/cancel for each one
    // Before adding `return ""` below, after answering questions correctly (when first selecting cancel/no
    // for every option character length), it correctly allowed you to immediately start re-asking questions
    // but did not generate a password the second time around like it would for any other password combination. 
    // It (before this fix) only generated a password correctly if you said ok/yes to at least one value question.
    return "";
  } else {
    // This else statement makes more sense to use now that length range method is more simple
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

// Was having a lot of issues with other methods that I tried to make this a successful password generator,
// Eventually figured out that this method above was the best option.