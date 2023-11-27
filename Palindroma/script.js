/* Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma */

// Chiediamo a User di inserire una parola

const parolaUser = prompt("Inserisci una parola");

// Stampiamo la parola scelta

console.log (parolaUser);

// Creiamo una funzione per controllare se la parola è palindroma

function isPalindrome (word) {
    
      // Puliamo la parola da spazi e lettere maiuscole
    const cleanWord = word.toLowerCase().replace(/\s/g, '');

      // Confronta la parola con la sua versione inversa
    const reversedWord = cleanWord.split('').reverse().join('');

      // Restituisci true se sono uguali, altrimenti false
    return cleanWord === reversedWord;
}

// Verifica per controllare se la parola è palindroma

const Palindrome = isPalindrome(parolaUser);

// Output

if (Palindrome) {
    console.log (`La parola "${parolaUser}" è palindroma.`);
} else {
    console.log (`La parola "${parolaUser}" non è palindroma.`);
}