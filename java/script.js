const passwordBox = document.getElementById ("password");
const lenght = 15;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*()_+<>?:{}[];',./*-";

const allCharacters = upperCase + lowerCase + number + symbol;


function createPassword(){
    let password = "";
    password += upperCase [Math.floor(Math.random()*upperCase.length)];
    password += lowerCase [Math.floor(Math.random()*lowerCase.length)];
    password += number [Math.floor(Math.random()*number.length)];
    password += symbol [Math.floor(Math.random()*symbol.length)];

    while(lenght > password.length) {   
          password += allCharacters [Math.floor(Math.random()*allCharacters.length)];
    }
    passwordBox.value = password;createPassword ()

}