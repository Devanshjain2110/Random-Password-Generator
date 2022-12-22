const pwEL = document.getElementById("pwE")
const copyEL = document.getElementById("copy")
const lenEL = document.getElementById("len")
const upperEL = document.getElementById("upper")
const lowerEL = document.getElementById("lower")
const numberEL = document.getElementById("number")
const symbolEL = document.getElementById("symbol")
const generateEL = document.getElementById('generatePASS');

const numbers = "0123456789";   
const lowerCaseLetters ="abcdefghijklmnopqrstuvwxyz" ;
const upperCaseLetters ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const symbols = "!@#$%^&*()_+="; 

function lowerCase(){
    return lowerCaseLetters[Math.floor(Math.random()  *lowerCaseLetters.length)];
}
function upperCase(){
    return upperCaseLetters[Math.floor(Math.random()*upperCaseLetters.length)];
}
function symbol(){
    return symbols[Math.floor(Math.random()*symbols.length)];
}
function number(){
    return numbers[Math.floor(Math.random()*numbers.length)];
}

function generatePassword(){
    const len = lenEL.value;
    let password = "";
    for(let i = password.length; i<len; i++){
        const x =generateX();
        password += x;
    }
    pwEL.innerText = password;
}

function generateX(){
    let xs = [];
    if(upperEL.checked){
        xs.push(upperCase());
    }
    if(lowerEL.checked){
        xs.push(lowerCase());
    }
    if(symbolEL.checked){
        xs.push(symbol());
    }
    if(numberEL.checked){
        xs.push(number());
    }

    if (xs.length == 0) return "";

    return xs[Math.floor(Math.random() * xs.length)]
}

generateEL.addEventListener("click",generatePassword)

copyEL.addEventListener('click', ()=>{
    const textarea = document.createElement('textarea');
    const password = pwEL.innerText;

    if(!password){
        return;
    }

    textarea.value = password;
    document.body.appendChild(textarea);
    let a = textarea.select();
    navigator.clipboard.writeText(`${password}`);
    textarea.remove()
    alert("Password copied to clipboard")
})
