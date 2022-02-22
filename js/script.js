const firstName = prompt("Come ti chiami?"); 
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

// Price
let km = parseInt(prompt("Qunati km devi percorrere?")); 
let price = km * 0.21; 

console.log( 
    `Km da percorrere: ${km}
    Prezzo biglietto: ${price}  
    `
);
