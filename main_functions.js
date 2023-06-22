// console.log('functions!');
// // LE FUNZIONI ---------------------------------------------------
// // ---------------------------------------------------------------
// function square(specialNumber){
//     const result = specialNumber * specialNumber;
//     return result; 
// }
//     const pippo = square(16);
//     console.log(pippo);

// function logUppercase (stringToLog) {
//     const uppercaseString = stringToLog.toUpperCase()
//     console.log(uppercaseString);
// }

//     logUppercase('viva le funzioni!');

// // ---------------------------------------------------------------
//     // function gentleAllert() {           // funzione senza parametri ()
//     //     alert('caro amico, non vorrei farmi gli affari tuoi, ma sarà il caso che ti metti a studiare!');
//     // }

//     // gentleAllert();
// // ---------------------------------------------------------------   

//     function logMultipleTimes(stringToLog, times){
//         for (let i = 0; i < times; i++) {
//             console.log(stringToLog);
//         }
//     }

//     logMultipleTimes('pizza', 100)

// // ---------------------------------------------------------------  
// // FUNZIONE PARI O DISPARI
// function isEven(number){
//     if (number % 2 === 0){
//         return true;
//     } else {
//         return false;
//     }
// }

// const pluto = isEven(27);
// console.log(pluto);

// // ---------------------------------------------------------------  
// // FUNZIONE FOW - funzione a potenza
// function pow(base, exponent){ // ** esponente
//     const result = base ** exponent;
//     return result;
// }
// const paperino = pow(2,10); // xⁿ =  2¹⁰ (due alla decima)
// console.log(paperino);

// // ⁰ ¹ ² ³ ⁴ ⁵ ⁶ ⁷ ⁸ ⁹ ⁿ 
// // ---------------------------------------------------------------  
// // ultimo carattere, lettera maiuscola

// function lastCharUppercase(selectedString){
//     const char = selectedString[selectedString.length -1]; // [] passo l'indice dei caratteri
//     const charUpperCase = char.toUpperCase();
//     return charUpperCase;
// }

// const gastone = lastCharUppercase('Genova') ; // const = aggiungere metodo
// console.log(gastone);

// const aladin = lastCharUppercase('Torino');
// console.log(aladin);

// // pippo 1=5
// // 01234
// // ---------------------------------------------------------------  
// // 2. SINTASSI ALTERNATIVE

// function square(number){
//     const result = number * number;
//     return result;
// }
// console.log(square(3)); // funzione a cui viene passato come parametro un'altra funzione

// //--- oppure: creo una funzione e gli do un nome, in un unico passaggio

// // function square4(number){
// //     return number * number; // non crea una costante!
// // }
// // console.log(square4(3)); //
// // ---------------------------------------------------------------
// // ---------------------------------------------------------------  
// const superSquare = square;
// console.log(superSquare(12));

// // ---------------------------------------------------------------
// // ---------------------------------------------------------------  
// // anonymous function
// const square2 = function(number){
//     const result = number * number;
//     return result;
// } 
// console.log(square2(10)); // 2¹⁰

// // ---------------------------------------------------------------  
// // 3. Lambda Function o Arrow Function
// // posso fare a meno della parola function
// //                       =>
// const square3 = (number) => {
//     const result = number * number;
//     return result;
// }

// console.log(square3(3));

// // ---------------------------------------------------------------  
// // modi sintetici per scrivere il codice:
// const square4 = (number) => number * number;
// //              parametro in ingresso = cosa fare
// const square5 = number => number * number;
// // se ho un solo parametro posso anche non mettere le parentesi tonde
// const pow = (base, exponent) => base ** exponent;

// // ---------------------------------------------------------------  
// console.log(square4(8));

// console.log(pow(4, 3)); // 4³

// // PARAMETRI -----------------------------------------------------

// function logParameters(parameter1, parameter2){
//     console.log('parametro 1:' + parameter1);
//     console.log('parametro 2:'+ parameter2);   
// }

// logParameters('pippo', 5);

// // non sono obbligato a passare tutti i parametri
// logParameters(27); // prende la prima 

// logParameters(); // risultato undefined 
// // ---------------------------------------------------------------  
// function pow (base, exponent){
    
//     if (base === undefined){ // senza base non fa niente
//         return "che cavolo stai facendo?!"
//     }
//         if (exponent !== undefined){ // 
//         const result = base ** exponent;
//         return result;
//     } else {
//         const result2 = base ** 2;
//         return result2;
//     }
// }

// const axia = pow(4, 4); // pow(base, exponent)
// console.log(pippo);

// const aixa = pow(4);
// console.log(aixa);

// const paperino2 = pow();
// console.log(paperino2);

// VALORI DI DEFAULT--------------------------------------------

function pow(base, exponent = 2){
    const result = base ** exponent;
    return result;
}

console.log(pow(5, 3)); // 5³

console.log(pow(5)); // di default è alla seconda 5²

// ----------------------------------------------
const startingString = '25';
console.log(startingString * 2); // 50 - funziona anche se è errato
// ----------------------------------------------
const startingNumber = parseInt(startingString);
//                     parseInt( );                    
console.log(startingString, typeof startingString); // stringa
console.log(startingNumber, typeof startingNumber); // numero

// compiti------------------------------------------------------------------------
// -------------------------------------------------------------------------------
// esercizio 1. 
// definire una funzione 'pow' che NON faccia uso dell'operatore '**'
// ne della libreria Math


// esercizio 2. 
// definire una funzione 'correctCase' che prende in input una stringa e la restituisce
// trasformando la prima lettera in maiuscolo 
// 'la casa blu' => 'La casa blu'


// esercizio 3.
// Definire una funzione 'min' che dati due numeri 
// restituisca il minore ++++++


// esercizio 4.
// definire una funzione 'clamp' che prende come parametri:
// tre numeri: valore, massimo, e minimo
// min MAX
// se valore è minore di minimo, restituisce minimo
// se valore è maggiore di massimo, restituisce MASSIMO
// altrimenti resituisce valore 


// esercizio 5.
// definire una fuzione chessboard che prende come parametro
// 'size' e stampa la scacchiera


// esercizio 6.
// definire una funzione 'ellipse' che prende come parametro una stringa
// se la stringa è minore di 20 caratteri la ritorna non modificata
// altrimenti la taglia a 20 caratteri (trim) e aggiunge 3 puntini
// 'ciao mamma!' => 'ciao mamma!'
// 'nel mezzo del cammin di nostra vita' => 'nel mezzo di cammin...'


// esercizio 7.
// definire una funzione reverseString che da una stringa 
// la restituisca al contrario
// 'casa rosa' => 'asor asac'


// esercizio 8.
// definire una funzione 

// esercizio sintassi normale e sintassi lambda