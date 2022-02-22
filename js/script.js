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
let finalPrice;
console.log( 
    `Km da percorrere: ${km}
    Prezzo biglietto: ${price} €  
    `
);

// Sale underage
let percentToGet = 20;
let underageSale = ((percentToGet / 100) * price).toFixed(2); 
// let underagePrice = (price - underageSale).toFixed(2);

// console.log( 
//     `Sconto del 20% sul biglietto per minorenni: ${underageSale} € 
//     // Prezzo biglietto: ${underagePrice}  
//     `

// ); 

// Sale Over 65
let percentToGet65 = 40; 
let overSale= ((percentToGet65 / 100) * price).toFixed(2); 
// let priceOver= (price - overSale).toFixed(2); 

// console.log(
//     `Sconto del 40% sul biglietto per Over 65: ${overSale} € 
//     // Prezzo biglietto: ${priceOver}  
//     `
// ); 

// Condition

if (age < 18){
    finalPrice= price - underageSale; 
    console.log(
        `Sconto del 20% applicato sul biglietto per minorenni. 
        Prezzo Finale: ${finalPrice} € 
        `
    );
} else if (age > 65){ 
    finalPrice = price - overSale; 
    console.log(
        `Sconto del 40% applicato sul biglietto per gli Over 65. 
        Prezzo Finale: ${finalPrice} € 
        `
    );
} else {
    finalPrice= price; 
    console.log(
        `Nessuno sconto sul biglietto applicabile: ${finalPrice} € `
    );
}
