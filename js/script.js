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
    Prezzo biglietto: ${price} €  
    `
);

// Sale underage
let percentToGet = 20;
let underageSale = (percentToGet / 100) * price; 
let finalPrice = price - underageSale;

console.log( 
    `Sconto del 20% sul biglietto per minorenni: ${underageSale} € 
    Prezzo biglietto: ${finalPrice}  
    `

); 

// Sale Over 65
let percentToGet65 = 40; 
let overSale= (percentToGet65 / 100) * price; 
let finalPriceOver= price - overSale; 

console.log(
    `Sconto del 40% sul biglietto per Over 65: ${overSale} € 
    Prezzo biglietto: ${finalPriceOver}  
    `
);