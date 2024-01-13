// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  console.log("Generated password: ", password);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
  
  function generatePassword() {
    //Prompt for password length
    var length = parseInt(prompt("Enter password length (between 8 and 128 characters):"));

    // validate the entered length
    if (isNaN(length) || length < 8 || length > 128) {
      alert("Invalid password length. Please enter a number between 8 and 128.");
      return generatePassword(); //recursive call to restart the process
    }

    // Confirm lowercase
    var includeLowercase = confirm("Include lowercase letters?");

    // confirm uppercase
    var includeUppercase = confirm("Include uppercase letters?");

    // confirm numbers
    var includeNumbers = confirm("include numbers?");

    // confirm special characters
    var includeSpecial = confirm("Include special characters?");

    // validate that at least one character type is selected
    if(!includeLowercase && !includeUppercase && !includeNumbers && !includeSpecial) {
      alert("You must include at least one character type. Please try again.");
      return generatePassword();
    }
      // generate password based on criteria
      return passwordWithCriteria(length, includeLowercase, includeUppercase, includeNumbers, includeSpecial);
  }

  // password criteria
  function passwordWithCriteria(length, includeLowercase, includeUppercase, includeNumbers, includeSpecial) {
    var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numberChars = "0123456789";
    var specialChars = "!@#$%^&*()_-+=<>?";

    // combine character sets based on selected criteria
    var allowedChars = "";
    if (includeLowercase) allowedChars += lowercaseChars;
    if (includeUppercase) allowedChars += uppercaseChars;
    if (includeNumbers) allowedChars += numberChars;
    if (includeSpecial) allowedChars += specialChars;

    var password = "";

    for (var i = 0; i < length; i++) {
      var randomIndex = Math.floor(Math.random() * allowedChars.length);
      password += allowedChars.charAt(randomIndex);
    }
    return password;
  }


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);