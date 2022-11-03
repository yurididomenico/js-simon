// JAVASCRIPT //

console.log("YDD");

/*
-Visualizzare in pagina 5 numeri casuali.
-Da lì parte un timer di 30 secondi.
-Dopo 10 secondi i numeri scompaiono
-L'utente deve inserire i numeri che ha visto precedentemente tramite il prompt().
-Il software dice quanti e quali dei numeri sono stati individuati.
*/

//Variabili 5 numeri - random
let numeri = document.getElementById('stampaNumeri');
let random = [];

numeri.innerHTML = "Test";

//Ciclo genera 5 numeri random - stampa
for(let i=0; i<5; i++)
{
    random[i] = Math.round(Math.random()*5)+1;
}

console.log(random);


















// ----- FINE :) -----