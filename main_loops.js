// LOOPS - CICLI
// console.log('looooooops')
// metodo (strutture) che ci permettono di ripetere una procedura

// 1. Ciclo WHILE -----------------------------------------------

    // let indice = 0; // definisco una variabile, che inizia con 0
    // // while(condition) { definisco una condizione basata su questo indice

    // while(indice < 10){ // RESTITUISCE TRUE
    //     console.log('sono un\'istruzione che deve essere ripetuta') //    \' backslash per scrivere l'apostrofo

        // indice = indice + 1;
        // indice += 1; 
        // indice *= 2; // moltiplica per due
        // indice++; // aggiunge 1 (vale solo per l'1)
        // indice--; // toglie 1 (vale solo per l'1)  
    // }
// finchè una condizione restituisce TRUE continua a ciclare

// -------------------------------------------------------------------------------------------
// ------------------  Log di tutti i numeri pari minori di 100 ------------------------------

//     let indice = 0; // dichiariamo una variabile con valore 0

//     while (indice < 100) { // facciamo un ciclo while, in cui mettiamo la condizione 'indice' che deve essere minore di zero
//     // con il modulo % chiediamo di calcolare il 'resto' della divisione - se è divisibile per quel numero
//         if (indice % 2 === 0) { // restituisce tutti i numeri pari
//                 console.log(indice);
//         }

//         indice++; // indice = indice +1;  |  indice +-1; | 
//         // ad ogni giro incrementa indice di 1
//         // è il metodo che "blocca" il ciclo
//     }


// -------------------------------------------------------------------------------------------

//     while (true) {
//         const input = prompt('scrivi una frase o scrivi FINE per terminare');

//         if (input === 'FINE') {
//             break; // interrompe il ciclo in maniera forzata            
//         } else { 
//             // alert('la lunghezza della frase è ' + input.length + ' caratteri.' );

//             // stringhe interpolate:
//             alert (`la lunghezza della frase inserita è ${input.length} caratteri`) //      `` alt 96
//             // ${} in questo spazio mette il risultato del calcolo
//         }
//     }



// // CICLO DO WHILE  --------------------------------------------------------------------------

// // index = 0 che cicla fino a 10

// // dow // prima fa - poi controlla

//     let indice = 0;

//     // il DO WHILE esegue la condizione almeno una volta 
//     do { // viene eseguita ALMENO una volta - serve per fare i controlli

//         console.log('sono un\'istruzione che deve essere ripetuta') // controlla la condizione
//         indice ++;   
        
//     } while (indice < 10);



// // CICLO FOR  --------------------------------------------------------------------------

// comprime tutto quello che abbiamo fatto con il ciclo while
// for (let index = 0; // inizializza la variabile
//     index < 10 // controlla che sia TRUE
//     index++) { // SE lo è, esegue il codice e poi fa l'incremento
        
// --------------------------------------------------------------------------

// let index = 0;

// for (let index = 0; index < 10; index++) {
//     console.log ('sono un\'istruzione che deve essere ripetuta');    
// }

// EQUIVALENTE A: 
// 1. Ciclo WHILE -----------------------------------------------

//     let indice = 0; // definisco una variabile, che inizia con 0
//     // while(condition) { definisco una condizione basata su questo indice

//     while(indice < 10){ // RESTITUISCE TRUE
//         console.log('sono un\'istruzione che deve essere ripetuta') //    \' backslash per scrivere l'apostrofo
//     }
// -------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------

// // Esercizio n. 1
// // ciclo for che stampa solo numeri pari senza utilizzare l'operatore modulo

// for (let index = 0; index < 100; index += 2 ) {
//     // += 2 operazione di incremento
//     console.log('sono un numero pari e sono: ' + index)
// }

// // --------------------------------------------------------------------------

// // Esercizio n. 2
// // Se il numero è minore di 50 moltiplica x 2
// // Se il numero maggiore di 50 lo divide x 2

// for (let index = 0; index < 100; index++){
//     if (index < 50) {
//     console.log(index * 2);
//     } else {
//     console.log(index / 2);
//     }
// }

// // --------------------------------------------------------------------------
// // Esercizio n. 3
// // CICLO FOR che stampi i numeri da 100 a 0 -- loop al contrario ------------

// for (let index = 100; index >= 0; index--){ // --meno uno
//     console.log(index)  
// }
// // --------------------------------------------------------------------------


// for (let index = 100; index >= 0; index--){ // --meno uno
//     console.log(index)  
// }
// // --------------------------------------------------------------------------

// // Esercizio n. 4
// // CICLO da 100 a 0 che se il numero è pari scriva 'PARI'
// // se il numero è dispari scriva 'DISPARI'

// for (let i = 100; i >=0; i -- ) { // -- -1
//     if (i % 2 === 0) {

//         console.log('pari', i)
//     } else {
//         console.log('dispari', i)            
//     }
// }

// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------

// // CICLO for - stampa carattere per carattere
// // data la stringa mostra i caratteri 
// // 
// //
// // ----------------------------------------------------------------------------
// const paperone = prompt('scrivi una frase'); // numero della posizione del carattere

// for (let i = 0; i < paperone.length; i++) {
//     // parte da 0
//     // i aumenta di uno
//     const char = paperone[i]; //nome della posizione del carattere che voglio
//     console.log(char);
// }

// // ----------------------------------------------------------------------------
// // se prendo il nome della variabile (paperone) della stringa 
// // e gli do una posizione 
// // lei mi da il carattere associato a quella posizione




// Scrivi un ciclo che effettui sette chiamate a console.log per generare il seguente triangolo:
// #
// ##
// ###
// ####
// #####
// ######
// #######

// // ESEGUITO CON FOR
// let startingString = '#'

// for (let i = 0; i < 7; i++) {
//     console.log(startingString); // 
//     startingString = startingString + '#'
// }
// ESEGUITO CON WHILE
// let startingString2 = '#';
    
//     while (startingString2.length < 8) { // finchè la sua lunghezza è minore di 8
//         console.log(startingString2);
//         startingString2 = startingString2 + '#';
// }


// Scrivete un programma che utilizzi console.log per stampare tutti i numeri da 1 a 100, con due eccezioni. 
// Per i numeri divisibili per 3, stampa "Fizz" invece del numero, e per i numeri divisibili per 5 (e non 3), stampa invece "Buzz".

// Quando hai funzionato, modifica il tuo programma per stampare "FizzBuzz" per i numeri che sono divisibili sia per 3 che per 5 
// (e continua a stampare "Fizz" o "Buzz" per i numeri divisibili solo per uno di quelli).

// for (let i = 1; i < 101; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log('FizzBuzz');
//     } else if (i % 3 === 0) {
//         console.log('Fizz');
//     } else if (i % 5 === 0) {
//         console.log('Buzz');       
//     } else {
//         console.log(i);
//     }
// }

// ---------------------------------------------------------
// for (let i = 1; i < 101; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log('FizzBuzz');
//     } else if (i % 3 === 0) {
//         console.log('Fizz');
//     } else if (i % 5 === 0) {
//         console.log('Buzz');       
//     }
// }



// CICLI NESTATI 

// for (let i=0; i < 10; i++){
//   for (let j=0; j < 10; j++){
//   console.log('riga ' + i + ', colonna: ' + j);
//     }
// }



// CAPITOLO 2 ESERCIZIO 2 - PARTE 1
// Scrivete un programma che crei una stringa che rappresenti una griglia 8×8, 
// usando caratteri di nuova riga per separare le righe. In ogni posizione della griglia 
// c'è uno spazio o un carattere "#". I personaggi dovrebbero formare una scacchiera. 

// VERSIONE EASY
// for (let i = 0; i < 8; i++) {
//     if (i % 2 === 0){
//     console.log(' #  #  #  #')    
//     } else {
//     console.log('#  #  #  # ')         
//     }  
// }

// --------------------------------------------

let chessboard = ' '
    for (let i = 0; i < 8; i++) {
        if (i % 2 === 0){
            chessboard += ' #  #  #  #\n' // posso scriverlo anche  chessboard = chessboard ' #  #  #  #\n'
        } else {
            chessboard += '#  #  #  # \n'        
    }  
}

console.log(chessboard);

// CAPITOLO 2 ESERCIZIO 2 - PARTE 2
// ---------------------------------------------------------
// Quando si dispone di un programma che genera questo modello, 
// definire una dimensione di rilegatura = 8 e modificare il programma 
// in modo che funzioni per qualsiasi dimensione, 
// emettendo una griglia della larghezza e dell'altezza specificate.


// riguardare esercizi!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!



const size = 4;
// 

let chessboard2 = '';
for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++ ){
/*  

    se i è pari {
        se j è pari{
            aggiungo a chessboard2 uno spazio
        } altrimenti {
            aggiungo a chessboard2 un cancelletto
        }
    }  altrimenti {
        se j è dispari{
            aggiungo a chessboard2 un cancelletto
        } altrimenti {
            aggiungo a chessboard2 uno spazio
        }
    }

// aggiungo a chessboard uno \n

*/
    }
} 

// per ogni giro che fa i
// per la riga 0 controllerà le 4 colonne