// Assignment code here
var charsNorm = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var charsCap = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var charsNum = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var charsSpec = ["!", "@", "#", "$", "%", "&", "*", "?", "(", ")", "_", "+", "/", "^", "-", ".", "{", "}", "~"];


function userOptions() {
  var length = window.prompt("How many characters would you like your password to be. Keep in mind that your password must contain at least 8 characters.");

  if (length < 8) {
    window.alert("Your password must be at least 8 characters long. Please try again");

    return null;
  };

  if (length > 128) {
    wwindow.alert("Your password cannot be longer than 128 characters. Please try again.");

    return null;
  };

  var lowConfirm = window.confirm(
    "Would you like your password to contain lowercase letters?"
  );

  var capConfirm = window.confirm(
    "Would you like your password to contain capital letters?"
  );


  var numConfirm = window.confirm(
    "Would you like your password to contain numbers?"
  );

  var specConfirm = window.confirm(
    "Would you like your password to contain special characters?"
  );

  var passPrompts = {
    length: length,

    lowConfirm: lowConfirm,

    capConfirm: capConfirm,

    numConfirm: numConfirm,
    
    specConfirm: specConfirm
  }

  return passPrompts;

}

function random(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);

  var randElement = arr[randIndex];

  return randElement;
}

function passGenerater() {
  var options = userOptions();

  var result = [];

  var possibleCharacters = [];

  var guarenteedCharacters = [];

  if (!options) return null;

  if (options.charsNorm) {
    possibleCharacters = possibleCharacters.concat(charsNorm);
    guarenteedCharacters.push(getRandom(charsNorm));
  }

  if (options.charsCap) {
    possibleCharacters = possibleCharacters.concat(charsCap);
    guarenteedCharacters.push(getRandom(charsCap));
  }

  if (options.charsNum) {
    possibleCharacters = possibleCharacters.concat(charsNum);
    guarenteedCharacters.push(getRandom(charsNum));
  }

  if (options.charsSpec) {
    possibleCharacters = possibleCharacters.concat(charsSpec);
    guarenteedCharacters.push(getRandom(charsSpec));
  }

  for (var i = 0; i < options.length; i++) {
    var possibleCharacter = getRandom(possibleCharacters);

    result.push(possibleCharacter);
  }

  for (var i = 0; i < guarenteedCharacters.length; i++) {
    result[i] = guarenteedCharacters[i];
  }

  return result.join('');
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = passGenerater();
  var passwordText = document.querySelector("#password");

  passwordText.value = password

  return passGenerater();
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

