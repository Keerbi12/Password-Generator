// Assignment Code
var generateBtn = document.querySelector("#generate");
//Random password generator
var randomFunction = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};
var length;
var lower;
var upper;
var number;
var symbol;

// Write password to the #password input
function writePassword(lower, upper, number, symbol, length) {
//Added prompts for password criteria.
  length=+prompt("Password length (8-128)");
  lower=+prompt("Include lowercase characters? (Y or N)");
  upper=+prompt("Include uppercase characters? (Y or N)");
  number=+prompt("Include numbers? (Y or N)");
  symbol=+prompt("Include symbols? (Y or N)");

  console.log(lower, upper, number, symbol);
  console.log(typeof length)
  
  var password = generatePassword(lower, upper, number, symbol, length); 
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
 
//writing the generatePassword function
function generatePassword(lower, upper, number, symbol, length) {
  let generatedPassword = "";
  var typesCount = lower + upper + number + symbol;
  console.log("types count:", typesCount);
  var typesArr = [{lower}, {upper}, {number}, {symbol}].filter
  (
    item => Object.values(item)[0]
  );
  console.log("types Arr:", typesArr);

  if(typesCount === 0) {
    return "No input added";
  }

  if(length < 8) {
    return "Password needs to be longer than 8 characters."
  }

  if

  for(let i = 0; i < length; i += typesCount) {
    typesArr.forEach(type => {
      var functionName = Object.keys(type)[0];
      console.log("function Name:", functionName);

      generatedPassword += randomFunction[functionName]();
    });
  }
  var finalPassword = generatedPassword.slice(0, length);
  console.log(length)
  return finalPassword;
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
  var symbols = "!@#$%^&*()-_=+[]{}/\|;:,.?";
  return symbols[Math.floor(Math.random() * symbols.length)];
}
