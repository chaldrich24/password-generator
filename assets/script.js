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

  console.log(passwordObj.length);
  passwordObj.uppercase = window.confirm("Do you want to include uppercase letters?");
  passwordObj.lowercase = window.confirm("Do you want to include lowercase letters?");
  passwordObj.special = window.confirm("Do you want to include special characters?");
  passwordObj.numeric = window.confirm("Do you want to include numbers?");

  for (let i = 0; i < passwordObj.length; i++) {
    passwordObj.password[i] = generateCharacter();
  }
  
  passwordObj.password = passwordObj.password.join("");
  return passwordObj.password;
}

var generateCharacter = function() {
  return "a";
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

const uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const symbols = ["!", "@", "#", "$", "%", "^", "&","*", "(", ")", "-", "+", "=", ":", "<", ">", "?"]

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
