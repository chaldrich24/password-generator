// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var generatePassword = function() {
  let passwordObj = {
    password: [],
    length: passwordLength(),
    uppercase: false,
    lowercase: false,
    special: false,
    numeric: false
  }

  let characters = [];
  
  while (!passwordObj.uppercase && !passwordObj.lowercase && !passwordObj.special && !passwordObj.numeric) {
    window.alert("Please choose at least one out of the four following prompts.");
    passwordObj.uppercase = window.confirm("Do you want to include uppercase letters?");
    passwordObj.lowercase = window.confirm("Do you want to include lowercase letters?");
    passwordObj.special = window.confirm("Do you want to include special characters?");
    passwordObj.numeric = window.confirm("Do you want to include numbers?");
  }

  if (passwordObj.uppercase) {
    characters += uppercaseLetters;
  }
  if (passwordObj.lowercase) {
    characters += lowercaseLetters;
  }
  if (passwordObj.special) {
    characters += symbols;
  }
  if (passwordObj.numeric) {
    characters += numbers;
  }

  // use the if's to add to the arrays if confirmed and make sure to loop back somehow if none are confirmed

  for (let i = 0; i < passwordObj.length; i++) {
    randomChar = Math.floor(Math.random() * characters.length);
    passwordObj.password[i] = characters[randomChar];
  }
  
  passwordObj.password = passwordObj.password.join("");
  return passwordObj.password;
}

var passwordLength = function() {
  let desiredLength = 0;
  while (desiredLength < 8 || desiredLength > 128) {
    desiredLength = window.prompt("How many characters do you need your password to be?");
    desiredLength = parseInt(desiredLength);
    isNotNumber = Number.isNaN(desiredLength);
    if(isNotNumber){
      desiredLength = 0;
    }
    if (desiredLength < 8 || desiredLength > 128) {
      window.alert("Please enter a password length between 8 and 128.");
    }
  }
  return desiredLength;
}

const uppercaseLetters = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
const lowercaseLetters = ["abcdefghijklmnopqrstuvwxyz"];
const symbols = ["!@#$%^&*()-+=<>?:;"];
const numbers = [1234567890];

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
