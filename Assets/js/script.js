// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //Added prompts for password criteria.
  var passwordLength=prompt("Password length (8-128)");
  var lower=prompt("Include lowercase characters? (Y or N)");
  var upper=prompt("Include uppercase characters? (Y or N)");
  var number=prompt("Include numbers? (Y or N)");
  var symbol=prompt("Include symbols? (Y or N)");

  hasLower=lower;
  hasUpper=upper;
  hasNumber=number;
  hasSymbol=symbol;
  length=passwordLength;

  var password = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length); 
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
 
//generatePassword function
function generatePassword(lower, upper, number, symbol, length) {
  let generatedPassword = "";
  var typesCount = lower + upper + number + symbol;
  console.log("types count:", typesCount);
  var typesArr = [{lower}, {upper}, {number}, {symbol}];
  console.log("types Arr:", typesArr);
   
}

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