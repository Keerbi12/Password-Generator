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

//Write password to the #password input in the HTML.
function writePassword(lower, upper, number, symbol, length) {
//Added prompts for password criteria. + makes all inputs numbers rather than string.
  length=+prompt("Password length (8-128)");
  lower=+prompt("Include lowercase characters? (1 = YES or 0 = NO)");
  upper=+prompt("Include uppercase characters? (1 = YES or 0 = NO)");
  number=+prompt("Include numbers? (1 = YES or 0 = NO)");
  symbol=+prompt("Include symbols? (1 = YES or 0 = NO)");
//Just here for checking purposes, length needs to be number not a string.
  console.log(lower, upper, number, symbol);
  console.log(typeof length)
  
  var password = generatePassword(lower, upper, number, symbol, length); 
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
 
//writing the generatePassword function.
function generatePassword(lower, upper, number, symbol, length) {
  let generatedPassword = "";
  var typesCount = lower + upper + number + symbol;
//To make sure the the types count is correct. 
  console.log("types count:", typesCount);
  var typesArr = [{lower}, {upper}, {number}, {symbol}].filter
  (
    item => Object.values(item)[0]
  );
  console.log("types Arr:", typesArr);
//If no input is put into prompts, return "No input added".
  if(typesCount === 0) {
    return "No input added";
  }
//Making the length of the password between 8-128.
  if(length < 8) {
    return "Password needs to be longer than 8 characters.";
  }

  if(length > 128) {
    return "Password needs to be shorther than 128 characters."
  }
//This will loop for i < length, if all 4 criterias are ticked, this will tick up by 4, lowercase, uppercase, number, symbol.
  for(let i = 0; i < length; i += typesCount) {
    typesArr.forEach(type => {
      var functionName = Object.keys(type)[0];
      console.log("function Name:", functionName);

      generatedPassword += randomFunction[functionName]();
    });
  }
//Since the password generates is a multiple of 4 (if 4 criterias are selected), we need to use .slice to cut it to the password length. 
  var finalPassword = generatedPassword.slice(0, length);
  console.log(length)
//returns finalPassword to the box. 
  return finalPassword;
}

// Random functions for lowercase, uppercase, number and symbols.
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}


//math.random will give a decimal between 1 and 0, if multiplied by 26, it give a decimal between 0 and 26, math.floor will round down to the nearest integer.
//26 is used as there are 26 letters in the alphabet, we have to add 65, because the uppercase letters start from 65 and there are 26 of them.
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  var symbols = "!@#$%^&*()-_=+[]{}/;:,.?";
  return symbols[Math.floor(Math.random() * symbols.length)];
}
