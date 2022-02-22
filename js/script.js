const firstName = prompt("Come ti chiami?"); 
document.getElementById("first").innerHTML=firstName;
const lastName = prompt("Il tuo Cognome?"); 
document.getElementById("last").innerHTML= lastName;
const birth = parseInt(prompt("In che anno sei nato?")); 
if (isNaN(birth)) {
    alert("inserisci correttamente anno");
  }; 

// Age
let age = 2022 - birth; 
document.getElementById("age").innerHTML=age;
console.log(
    ` Nome: ${firstName}
    Cognome: ${lastName}
    Anno di nascita: ${birth}  
    `
);
console.log(age);

// Price
let km = parseInt(prompt("Qunati km devi percorrere?"));
document.getElementById("km").innerHTML=km; 
let price = (km * 0.21).toFixed(2); 
document.getElementById("first-cost").innerHTML= price + "€"; 
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
    finalPrice= (price - underageSale).toFixed(2); 
    document.getElementById("final-price").innerHTML=
    `${finalPrice}  
    Sconto del 20% applicato sul biglietto per minorenni.`; 
    console.log(
        `Sconto del 20% applicato sul biglietto per minorenni. 
        Prezzo Finale: ${finalPrice} € 
        `
    );
} else if (age > 65){ 
    finalPrice = (price - overSale).toFixed(2); 
    document.getElementById("final-price").innerHTML=
    `${finalPrice}  
    Sconto del 40% applicato sul biglietto per Over 65.`; 
    console.log(
        `Sconto del 40% applicato sul biglietto per gli Over 65. 
        Prezzo Finale: ${finalPrice} € 
        `
    );
} else {
    finalPrice= price; 
    document.getElementById("final-price").innerHTML=
    `${finalPrice}  
    Nessuno sconto sul biglietto applicabile.`; 
    console.log(
        `Nessuno sconto sul biglietto applicabile: ${finalPrice} € `
    );
}
