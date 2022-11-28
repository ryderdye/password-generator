

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let password1el = document.getElementById("password-1el")
let password2el = document.getElementById("password-2el")

let passwordLength = 16;


function randPassword(){
    let password = ""
    for (let i = 0; i < passwordLength; i++)
    password += generateRandomChar()
    return password
}

function generateRandomChar() {
    let randomChar = Math.floor(Math.random() * characters.length)
    return characters[randomChar]
}

function generatePasswords(){
    password1el.textContent = randPassword()
    password2el.textContent = randPassword()
}


