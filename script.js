// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
var passwordText = document.querySelector("#password");

// Prompt the user for password length
var passLength = parseInt(prompt("Enter a password length between 8-128 characters."));
//  Password generation Function
function generateRandomPassword(length, useSymbols, useLowercaseLetters) {
  const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
  const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const symbols = '!@#$%^&*()_-';
  const numbers = '0123456789';
  
  let characters = uppercaseLetters + numbers; // Always include uppercase letters and numbers
  
  if (useSymbols) {
    characters += symbols;
  }

  if (useLowercaseLetters) {
    characters += lowercaseLetters;
  }

  let password = '';
  const charactersLength = characters.length;

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charactersLength);
    password += characters.charAt(randomIndex);
  }

  return password;
}

// Prompt the user for character options
var useSymbols = confirm("Do you want to include special characters?");
var useLowercaseLetters = confirm("Do you want to include lowercase characters?");

const password = generateRandomPassword(passLength, useSymbols, useLowercaseLetters);
console.log(password);

// Link the password to the HTML
passwordText.value = password;

// Add event listener to the generate button
generateBtn.addEventListener("click", function () {
  const password = generateRandomPassword(passLength, useSymbols, useLowercaseLetters);
  passwordText.value = password;
});
