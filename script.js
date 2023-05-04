// Assignment Code
var generateBtn = document.querySelector("#generate");

// Added letter & character arrays
var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialCharacters = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "{", "}", "[", "]", "|", "<", ">", ","];
var numberCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Added password length, letter, number & character prompts
var length = prompt ("Enter Password length from 8 to 128 characters");
var lower = confirm ("Do you want lowercase letters?");
var uppper = confirm ("Do you want upppercase lettes?");
var special = confirm ("Do you want special characters?");
var numbers = confirm ("Do you want numbers?");

// Added passwordCharacters array
var passwordCharacters = []

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// added generatePassword function
function generatePassword() {

}

// added getPrompts function for password length, letters, numbers & character prompts
function getPrompts() {
  characterLength = parseInt(prompt("Enter Password length from 8 to 128 characters"));
  if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Please enter a password length between 8 & 128 characters");
    return false
  }
if (confirm("Do you want lowercase letters?")); {
passwordCharacters = passwordCharacters.concat(lowercaseLetters);
}
if (confirm("Do you want uppercase letters?")); {
passwordCharacters = passwordCharacters.concat(uppercaseLetters);
}
if (confirm("Do you want special characters?")); {
passwordCharacters = passwordCharacters.concat(specialCharacters);
}
if (confirm("Do you want numbers?")); {
passwordCharacters = passwordCharacters.concat(numberCharacters);
}
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
