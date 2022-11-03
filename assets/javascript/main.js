// JAVASCRIPT //

console.log("YDD");

/*
-Visualizzare in pagina 5 numeri casuali.
-Da lì parte un timer di 10 secondi.
-Dopo 10 secondi i numeri scompaiono
-L'utente deve inserire i numeri che ha visto precedentemente tramite il prompt().
-Il software dice quanti e quali dei numeri sono stati individuati.
*/

//Variabili 5 numeri - random - numeri inseriti dall'utente
let numeri = document.getElementById('stampaNumeri');
let random = [];
let utenteNumeri = [];

function simonGame()
{
    //Ciclo genera 5 numeri random - stampa
    for(let i=0; i<5; i++)
    {
        random[i] = Math.round(Math.random()*5)+1;
        numeri.innerHTML += `<span class="border border-2 border-dark p-3">${random[i]}</span>`;
    }

    //Dopo 10 secondi scompaiono i numeri
    setTimeout(tempo10, 3000);

    //Dopo 11 secondi appare la richiesta numeri
    setTimeout(richiestaNumeri, 4000);

    
    

    
    

}




















//Timer 10 secondi
function tempo10()
{
    numeri.innerHTML = "";
}

//Richiesta 5 numeri
function richiestaNumeri()
{
    for(let i=0; i<5; i++)
    {
        utenteNumeri[i] = parseInt(prompt(`Numero ${i+1}: `));
        
    }
    
    for(let i=0; i<5; i++)
    {
        document.getElementById('test').innerHTML += `<span class="border border-2 border-dark p-3">${utenteNumeri[i]}</span>`;
    }
    return utenteNumeri;
}


function refresh()
{
    location.reload();
}
// ----- FINE :) -----