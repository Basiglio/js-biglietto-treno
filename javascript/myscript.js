// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km);
// va applicato uno sconto del 20% per i minorenni;
// va applicato uno sconto del 40% per gli over 65.


// chiedo i km
var km = prompt("quanti km devi percorrere?")
console.log(km)
// definisco sconto
var prezzo = 0.21
console.log(prezzo)
// calcolo sconto
var prezzoBiglietto = km * prezzo +" €"
console.log(prezzoBiglietto)

// visualizzo sconto
document.getElementById("prezzo").innerHTML = prezzoBiglietto
