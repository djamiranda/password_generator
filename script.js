// Added letter & character arrays
var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialCharacters = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "{", "}", "[", "]", "|", "<", ">", ","];
var numberCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// (Removed,(Added password length, letter, number & character prompts) used getPrompts instead
//var length = prompt ("Enter Password length from 8 to 128 characters");
//var lower = confirm ("Do you want lowercase letters?");
//var uppper = confirm ("Do you want upppercase lettes?");
//var special = confirm ("Do you want special characters?");
//var numbers = confirm ("Do you want numbers?");

// Added passwordCharacters & passwordLength arrays
var passwordCharacters = [];
var passwordLength = [];

// Assignment Code (moved to above listener)
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button (moved to above write password function)
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input (added getPrompts)
function writePassword() {
  getPrompts();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
// added to handle if user enters valid passwordLength, however does not select passwordCharacters
  if (passwordCharacters.length === 0) {  
  passwordText.value = "";
  alert("Please try again.");
  return
  }

  passwordText.value = password;
  console.log(password);
}

// added generatePassword function & random password generator
function generatePassword() {
var password ="";
for (var i = 0; i < passwordLength; i++) {
  var randomCharacter = Math.floor(Math.random() * passwordCharacters.length);
  password = password + passwordCharacters[randomCharacter];
}
console.log(password);
return password;
}

// added getPrompts function for password length, letters, numbers & character prompts
function getPrompts() {
passwordCharacters = []
  passwordLength = parseInt(prompt("Enter Password length from 8 to 128 characters"));
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a password length between 8 & 128 characters");
    return false;
  }
if (confirm("Do you want lowercase letters?")) {
passwordCharacters = passwordCharacters.concat(lowercaseLetters);
}
if (confirm("Do you want uppercase letters?")) {
passwordCharacters = passwordCharacters.concat(uppercaseLetters);
}
if (confirm("Do you want special characters?")) {
passwordCharacters = passwordCharacters.concat(specialCharacters);
}
if (confirm("Do you want numbers?")) {
passwordCharacters = passwordCharacters.concat(numberCharacters);
}
console.log (passwordCharacters.length);
return true;

}



