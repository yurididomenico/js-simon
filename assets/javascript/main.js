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
let vettoreNumeriIndovinati = [];
let quantiNumeri = document.getElementById('quantiNumeri');
let qualiNumeri = document.getElementById('qualiNumeri');


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
    //Acquisizione numeri
    for(let i=0; i<5; i++)
    {
        utenteNumeri[i] = parseInt(prompt(`Numero ${i+1}: `));
    }
    
    //Funzione di controllo dei due vettori (vettore1, vettore2)
    vettoreNumeriIndovinati = controlloNumeri(utenteNumeri, random);

    //Stampa numeri indovinati
    for(let i=0; i<5; i++)
    {
        if(vettoreNumeriIndovinati[i] !== undefined)
        {
            qualiNumeri.innerHTML += `<span class="border border-2 border-dark p-3">${vettoreNumeriIndovinati[i]}</span>`;
        }
        
        else
        {
            qualiNumeri.innerHTML += `<span class="border border-2 border-dark p-3">-</span>`;
        }
    }

    //Stampa quantità numeri indovinati
    quantiNumeri.classList.remove('d-none');
    quantiNumeri.innerHTML = `<span class="border border-2 border-dark p-3">Hai indovinato: ${vettoreNumeriIndovinati.length}</span>`;


    return utenteNumeri;
}

//Funzione controlla i due array
function controlloNumeri(vettore, vettore2)
{
    /*
    for(let i=0; i<5; i++)
    {
        for(let j=0; j<5; j++)
        {
            if(vettore[i] == vettore2[j])
            {
                vettoreNumeriIndovinati[j] = vettore2[j];
            }
        }
    }
    */

    j=0;
    //Controllo numeri indovinati
    for(let i=0; i<5; i++)
    {
        if(vettore.includes(vettore2[i]))
        {
            vettoreNumeriIndovinati[j] = vettore2[i];
            j++;
        }
    }

    console.log(vettoreNumeriIndovinati);

    return vettoreNumeriIndovinati;
}


function refresh()
{
    location.reload();
}
// ----- FINE :) -----