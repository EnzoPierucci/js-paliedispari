function generaNumeroCasuale() {
    return Math.floor(Math.random() * 5) + 1;
}

function Pari(numero) {
    return numero % 2 === 0;
}

const sceltaUtente = prompt("Scegli pari o dispari:");
const numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5:"), 10);

const numeroComputer = generaNumeroCasuale();

const somma = numeroUtente + numeroComputer;

const risultato = Pari(somma) ? "pari" : "dispari";

if (sceltaUtente.toLowerCase() === risultato) {
    console.log(`Hai vinto! La somma (${somma}) è ${risultato}.`);
} else {
    console.log(`Il computer ha vinto. La somma (${somma}) è ${risultato}.`);
}
