// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //Added a prompt for password length.
  var charLength=prompt("Password length (8-128)");
  alert("The password length has been set to " + charLength + ".");
  var special=prompt("Include special characters")

  var password = generatePassword(charLength, includeUppercase, includeNumbers, includeSymbols);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
 


function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}


console.log(getRandomLower());
console.log(getRandomUpper());
console.log(getRandomNumber());