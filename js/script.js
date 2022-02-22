const firstName = prompt("COme ti chiami?"); 
const lastName = prompt("Il tuo Cognome?"); 
const birth = parseInt(prompt("In che anno sei nato?"));
// Age
let age = 2022 - birth;
console.log(
    ` Nome: ${firstName}
    Cognome: ${lastName}
    Anno di nascita: ${birth}  
    `
);
console.log(age);
