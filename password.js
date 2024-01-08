function generatePassword(){

    const passLenth = 15;

    let allowedLowerCase = document.getElementById("allowLowerCase").checked;
    let allowedUpperCase = document.getElementById("allowUpperCase").checked;
    let allowedNumber = document.getElementById("allowNumber").checked;
    let allowedSpecialChar = document.getElementById("allowSpecial").checked;
    let passResult = document.getElementById("passResult")

    const lowerCase = "abcdefghijklmnopqrstwxyz";
    const upperCase = lowerCase.toLocaleUpperCase();
    const allNumber = 1234567890;
    const SpecialChar = "!@#$%^&*()-_+={}[]|\:;< >/?~";

    let allowedChars = "";
    let passwrod = "";

    allowedChars += allowedLowerCase ? lowerCase : "";
    allowedChars += allowedUpperCase ? upperCase : "";
    allowedChars += allowedNumber ? allNumber : "";
    allowedChars += allowedSpecialChar ? SpecialChar : "";

    for(let i = 0; i < passLenth; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        passwrod += allowedChars[randomIndex];
    }

    if(allowedChars.length === 0){
        passResult.value = "Select the Password type";
    }else{
        passResult.value = passwrod;
    }
}