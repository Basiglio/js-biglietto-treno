// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km);
// va applicato uno sconto del 20% per i minorenni;
// va applicato uno sconto del 40% per gli over 65.


// chiedo i km
var km = prompt("quanti km devi percorrere?")

// chiedo l'età
var anni = prompt("quanti anni hai?")

// definisco prezzo
var prezzo = 0.21


// calcolo prezzo
if (anni < 18) {
  // prezzo biglietto minorenne scontato
  var prezzoBiglietto = ((km * prezzo) * 20 / 100);
} else if (anni >= 65) {
  // prezzo biglietto over 65
  var prezzoBiglietto = ((km * prezzo) * 40  / 100);
}
else  {
  // prezzo biglietto normale
  var prezzoBiglietto = (km * prezzo);
}


// visualizzo prezzo senza sconto
document.getElementById("prezzo_biglietto").innerHTML = prezzoBiglietto
