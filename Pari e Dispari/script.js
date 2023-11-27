/* Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto. */

// Chiediamo a User se sceglie Pari o Dispari

const pariODispari = prompt('Scegli se pari o dispari');

// Stampiamo la sua scelta 

console.log (`Hai scelto "${pariODispari}"`);

// Chiediamo a User un numero da 1 a 5

const numberUser = parseInt(prompt('Inserisci un numero da 1 a 5'));

// Funzione per verificare se un numero è pari

function pari(number) {
    return number % 2 === 0;
  }

// Stampiamo il numero scelto 

console.log (`Hai scelto il numero "${numberUser}"`);

// Generiamo un numero casuale da 1 a 5 per il computer con una funzione

function generaRandomNumber() {
    return Math.floor(Math.random() * 5) + 1;
  }

const computerNumber = generaRandomNumber();
// Stampiamo il numero casuale del PC

console.log (`Il numero casuale del PC è: "${computerNumber}"`)

// Sommiamo i due numeri e stabiliamo se questa è pari o dispari (con una funzione)

const sommaNumber = numberUser + computerNumber;

const sommaPari = pari(sommaNumber);

// Dichiariamo il vincitore

if ((pariODispari === "pari" && sommaPari) || (pariODispari === "dispari" && !sommaPari)) {

    console.log(`Hai vinto! La somma (${numberUser} + ${computerNumber} = ${sommaNumber}) è ${pariODispari}.`);
  } else {
    
    console.log(`Hai perso! La somma (${numberUser} + ${computerNumber} = ${sommaNumber}) è ${(sommaPari ? 'pari' : 'dispari')}.`);
  }