// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //Added a prompt for password length.
  var passwordLength=prompt("Password length (8-128)");
  var lowerCase=prompt("Include lowercase characters? (Y or N)");
  var upperCase=prompt("Include uppercase characters? (Y or N)");
  var includeNumbers=prompt("Include numbers? (Y or N)");
  var includeSymbols=prompt("Include symbols? (Y or N)");

  var password = generatePassword(passwordLength, lowerCase, upperCase, includeNumbers, includeSymbols);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
 

// Random functions for lowercase, uppercase, number and symbols.
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = "!@#$%^&*()-_=+[]{}/\|;:,.?";
  return symbols[Math.floor(Math.random() * symbols.length)];
}


console.log(getRandomLower());
console.log(getRandomUpper());
console.log(getRandomNumber());
console.log(getRandomSymbol());