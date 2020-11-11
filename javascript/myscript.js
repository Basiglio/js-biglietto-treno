
// chiedo i km
var km = prompt("quanti km devi percorrere?")

// chiedo l'età
var anni = prompt("quanti anni hai?")

// // definisco prezzo
var prezzo = 0.21

// prezzo effettivo
var prezzoTot = km * prezzo

// calcolo sconto
if (anni < 18) {
 // sconto minorenne
 var prezzoBiglietto = (prezzoTot - ((prezzoTot * 20) / 100));
} else if (anni >= 65) {
 // sconto over 65
 var prezzoBiglietto = (prezzoTot - ((prezzoTot * 40) / 100));
}
else  {
 // nessuno sconto
 var prezzoBiglietto = (km * prezzo);
}

// arrotondamento
var prezzoArrotondato = Math.floor(prezzoBiglietto)



// visualizzo prezzo
document.getElementById("prezzo_biglietto").innerHTML = prezzoArrotondato
