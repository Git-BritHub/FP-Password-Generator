
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// variable characters that are allowed to be used in password:
// var lowerCase = "abcdefghijklmnopqrstuvwxyz";
// var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// var numeric = "0123456789";
// var specialCharacters = "!#$%&*+,-./:;<=>?@_~";
// omitted above variables since I've decided to now use the string.fromCharCode() for cleaner code.
const lowerCase_char_codes = arrayFromLowToHigh(97, 122);
const upperCase_char_codes = arrayFromLowToHigh(65, 90);
const numeric_char_codes = arrayFromLowToHigh(48, 57);
const specialCharacters_char_codes = arrayFromLowToHigh(33, 47).concat(
  arrayFromLowToHigh(58, 64)
).concat(
  arrayFromLowToHigh(91, 96)
).concat(
  arrayFromLowToHigh(123, 126)
)

// In the function is where I want to make string var. Look into split for js, do if statements
function generatePassword() {
  console.log ("Generate Password Button Clicked!");
  //Create 'if' statement so that if somebody types in incorrect response to let prompt questions it says:
  //Oops, incorrect character length. Please type a number that is between 8 - 128"
  //Oops, incorrect response. Please type either y for yes or n for no. 
  //Oops, incorrect response. Please give the number amount of how many numbers you would like in your password.

  //need to make sure that selecting 'cancel' in the prompt screen exits you out of the prompt screen and 
  //takes you back to page where you can reselect generator button
  let length = prompt("How many characters?");
    //Want to make for-loop so that password can't be be shorter than 8 or longer than 128
    function stringLength(inputtxt,minLength,maxLength) {
      var field = inputtxt.value;
      var mnlen = minLength(8);
      var mxlen = maxLength(128);
      if(field.length < mnlen || field.length > mxlen) {
        alert("Please make sure password length is between " +mnlen+ " and " +mxlen+ "characters.");
        return false;
      } else {
        return true;
      }
    }
  let lowerCase = prompt("Do you want lower case? (y/n)");
  if (lowerCase) charCodes = charCodes.concat(lowerCase_char_codes) {
     } else {
      // return proceed with no lowerCase used
    }

  let upperCase= prompt("Do you want upperCase? (y/n)");
  if (upperCase) charCodes = charCodes.concat(upperCase_char_codes) {
    } else {
      // return proceed with no upperCase used
    }
  let numeric = prompt("How many numbers?");
  if (numeric) charCodes = charCodes.concat(numeric_char_codes) {
    } else {
      // return proceed with no numbers used
    }
  let specialCharacters = prompt("Do you want special characters? (y/n)");
  if (specialCharacters) charCodes = charCodes.concat(specialCharacters_char_codes) {
    } else {
      // return proceed with no special characters
    }
  console.log (length, lowerCase, upperCase,numeric, specialCharacters);

  const allCharacters = []
  for (let i = 0; i < length; i++) {
    const characterCode = charCodes[Math.floor(Math.random() *
      length)]
      allCharacters.push(String.fromCharCode(characterCode))
  }
  return allCharacters.join(" ")
}

// function to make string of lowerCase, upperCase, numeric, and specialCharacters 
// list from their char number lowest to highest in consts put above in global section.
function arrayFromLowToHigh(low, high) {
  const array = []
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
  return array
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
