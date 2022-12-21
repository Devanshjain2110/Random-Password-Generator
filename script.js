const pwEL = document.getElementById("pw")
const copyEL = document.getElementById("copy")
const lenEL = document.getElementById("len")
const upperEL = document.getElementById("upper")
const lowerEL = document.getElementById("lower")
const numberEL = document.getElementById("number")
const symbolEL = document.getElementById("symbol")
const generateEL = document.getElementById("generate")

const numbers = "0123456789";   
const lowerCaseLetters ="abcdefghijklmnopqrstuvwxyz" ;
const upperCaseLetters ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const symbols = "!@#$%^&*()_+="; 

function lowerCase(){
    return lowerCaseLetters[Math.floor(Math.random*lowerCaseLetters.length)];
}
function upperCase(){
    return upperCaseLetters[Math.floor(Math.random*upperCaseLetters.length)];
}
function symbol(){
    return symbols[Math.floor(Math.random*symbols.length)];
}
function number(){
    return numbers[Math.floor(Math.random*numbers.length)];
}