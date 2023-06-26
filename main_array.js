console.log('array');
// // ARRAY---scatole che contengono più elementi--------------------------------------------------------------------

// // const nomeVariabile = [array1, array2, etc..]
// // scatola che contiene un array di stringhe
const pippo = ['pane', 'pasta', 'latte', 'caffè'];
// console.log(pippo);
// console.log(pippo.length);

// console.log(typeof pippo); // object


// console.log('INIZIO: AGGIUNGERE ELEMENTI')
// // AGGIUNGERE elementi
// // funzione push e unshift
//console.log('push aggiunge in coda:')
//pippo.push('acqua', 'vino'); // aggiunge all'array un elemento in coda, o più se separati da virgole
//console.log(pippo);
//// ---
//console.log('unshift aggiunge in testa:')
//pippo.unshift('biscotti'); // aggiunge all'array un elemento in testa
//console.log(pippo);


// console.log('PARTE 2: TOGLIERE ELEMENTI')
//TOGLIERE elementi
// console.log('pop toglie in coda:')
// const pippo2 = ['pane', 'pasta', 'latte', 'caffè'];
// // ---
// const elementoCoda = pippo2.pop();
// console.log(elementoCoda);
// console.log(pippo2);
// ---
// console.log('shift toglie in testa:');

//const elementoTesta = pippo2.shift(); // 
//console.log(elementoTesta);
//console.log(pippo2);


// // CICLI ED ARRAY --------------------------------------
//const pluto = [1, 2, 23, -4, 345, 0]
//
//console.log(pluto[0]);
//
//console.log(pluto[2]);
//
//console.log(pluto[pluto.length -1]); // ultimo elemento a prescindere da quanti ce ne siano, se 3 o 600!
//
//// // CICLO FOR:
//for (let i = 0; i < pluto.length; i++) {
//        const element = pluto[i];
//            console.log(element);
//    }
//
//for (const iterator of object)
//for (const element of pluto) { //for of
//     console.log(element);
//}


//CICLO WHILE:
//let i = 0;                       //l'indice scorre tutto il mio ciclo partendo da 0 (dunque il primo elemento, in JS), per cui se per esempio metto che i=1, mi parte a printare dal
//while (i < pluto.length){        //secondo elemento del mio array
//    const element = pluto[i];
//    console.log(element);
//    i++;
//}
//
// console.log('ciclo array al contrario:')
// // CICLARE ARRAY AL CONTRARIO

//for (let i = pluto.length -1; i >= 0; i--) {      //il valore di i deve essere il mio punto di partenza da dove partire, pertanto se voglio ciclare al contrario ho bisogno di
//    const element = pluto[i];                     //partire dall'ultimo elemento (per questo i = pluto.length - 1, perché blabla.length - 1 è la formula per accedere all'ultimo elemento)  
//    console.log(element);
//}

// -------------------------------------------------------------------------------------------
// TRASFORMAZIONI DI ARRAY -------------------------------------------------------------------
// -------------------------------------------------------------------------------------------
// MAPPING

const paperino = [2, 5, -4, 2000, 7, 34];

function multiplyArrayBy2(selectedArray){
    
    const newArray = []; // definisco un array vuoto

    for (let i = 0; i < selectedArray.length; i++) {
        
        const element = selectedArray[i];
        const newElement = element * 2;
        newArray.push(newElement);
    } 

    return newArray;
}
//                            invocarla(passareArray)
console.log('multiply by 2:', multiplyArrayBy2(paperino));

// -------------------------------------------------------------------------------------------


// const paperino = [2, 5, -4, 2000, 7, 34];

//     function dividedBy2ifEven(selectedArray){
//             const newArray = []; // definisco un array vuoto

//             for (let i = 0; i < selectedArray.length; i++) {

//                 const element = selectedArray[i];

//             let = newElement;

//             if(element % 2 === 0){
//                 newElement = element / 2;
//             } else {
//                 newElement = element;
//             }

//                 newArray.push(newElement);
//         }
//     return newArray;
//     } 
// console.log('divided by 2 if even:', dividedBy2ifEven(paperino));



// ---------------------------------------------
// ARRAY DI STRINGHE

// const paperone = ['qui', 'quo', 'qua'];

// function upperCaseAll(selectedArray){

//     const newArray = [];
   
//     for (let i = 0; i < selectedArray.length; i++) {   
        
//         const element = selectedArray [i];
//         const newElement = element.toUpperCase();
         
//         newArray.push(newElement);
        
//     }
//     return newArray;
// }
// console.log('UpperCaseAll:', upperCaseAll(paperone));

// fine mapping



// ---------------------------------------------
// FILTERING

// const paperoga = [3, 5, 6, 9, 111 -3, -8, 0];
// //array che contenga solo numeri dispari // elimina i pari
// function removeEven(selectedArray){

//     const newArray = [];

//     for (let i = 0; i < selectedArray.length; i++) {   
        
//         const element = selectedArray [i];
        
//         if(element % 2 !== 0){
//             newArray.push(element);
//         }
//     }
//     return newArray;
// }

// console.log('removeEven:', removeEven(paperoga));




// ---------------------------------------------
// FILTERING

const paperoga = [3, 5, 6, 9, 111 -3, -8, 0];
//array che contenga solo numeri dispari // elimina i pari
function removeNegative(selectedArray){

    const newArray = [];

    for (let i = 0; i < selectedArray.length; i++) {   
        
        const element = selectedArray [i];
        
        if(element >= 0){ // cambia solo la condizione
            newArray.push(element);
        }
    }
    return newArray;
}

console.log('removeNegative:', removeNegative(paperoga));

// -------------------------------------------------------------------------------------------
const qui = [3, 5, 6, 9, 111 -3, -8, 0, 20, -10000];
function removeNegativeAndMultiply(selectedArray){

    const arrayWithoutNegative = removeNegative(selectedArray);
    const arrayMultiplied = multiplyArrayBy2(arrayWithoutNegative);

    return arrayMultiplied;

// stessa cosa:
    // return multiplyArrayBy2(selectedArray); prima faccio questo passaggio e poi aggiungo anche removeNegative 
    // return multiplyArrayBy2(removeNegative(selectedArray));

}

console.log(removeNegativeAndMultiply(qui));

// 1) mapping function che prende in input un array di numeri
// e restituisce un array con tutti i numeri diminuiti di uno

const numbersArray = [23, 45, 12, -8, -6, 23, 45, 1, 45, 34, 2]
const stringsArray = ['23', 'PIPPO', 'pluto', 'la CASA blu', 'Osvaldo', '', 'porchetta'];

function arrayMinusOne (selectedArray) {
    const emptyArray = [];

    for (let i = 0; i < selectedArray.length; i++) {
        const element = selectedArray[i];
        const smallerElement = element -1;
        emptyArray.push(smallerElement);
    }
    return emptyArray;
}

console.log('Array diminuito', arrayMinusOne(numbersArray))

// 2) mapping function che prende in input un array di numeri
// e restituisce un array con i numeri e il valore assoluto dei numeri (i negativi devono essere senza segno)

//se un elemento < 0, gli sommo se stesso per due. numero nuovo = -4 + (4*2)

function arrayAbsolute (selectedArray) {
    const emptyArray = [];

    for (let i = 0; i < selectedArray.length; i++) {
        const element = selectedArray[i];
        const absoluteElement = element + (element * -2);    //si poteva fare anche *-1 senza tutta l'espressione, o addirttura con Math.abs, che fa esattamente quello
       
        
        if (element < 0) {
            emptyArray.push(absoluteElement);
            
        } else {
            emptyArray.push(element);
            
        }
        
    }
    return emptyArray;

}

console.log('Array diminuito', arrayMinusOne(numbersArray))
console.log('Array valori assoluti', arrayAbsolute(numbersArray))

// 3) mapping function che prende in input un array di numeri
// e restituisce un array di stringhe con scritto 'PARI' se il numero corrispondente è pari 
// o 'DISPARI' se il numero corrispondente è dispari

function arrayOddOrEven (selectedArray) {
    const emptyArray = [];

    for (let i = 0; i < selectedArray.length; i++) {
        const element = selectedArray[i];
        const evenElement = 'PARI';
        const oddElement = 'DISPARI';                            
        if (element % 2 === 0) {
            emptyArray.push(evenElement);
        } else {
            emptyArray.push(oddElement);
        }
       
    }
    return emptyArray;
}




console.log('Array pari o dispari', arrayOddOrEven(numbersArray))


// 4) mapping function che prende in input un array di stringhe
// e la restituisce tutte minuscole

function lowerCaseString (selectedArray) {
    const emptyArray = [];

    for (let i = 0; i < selectedArray.length; i++) {
        const element = selectedArray[i];
        
        if (typeof element === 'string') {
            lowerCaseElement = element.toLowerCase();
            emptyArray.push(lowerCaseElement);
        } else {
            return element;
        }
       
    }
    return emptyArray;
}



console.log('Stringe minuscolizzate', lowerCaseString(stringsArray))


// 5) mapping function che prende in input un array di stringhe
// e restituisce un array di numeri con le lunghezze delle stringhe

function lengthOfString (selectedArray) {
    const emptyArray = [];

    for (let i = 0; i < selectedArray.length; i++) {
        const element = selectedArray[i];
        
        if (typeof element === 'string') {
        const lengthElement = element.length;
        emptyArray.push(lengthElement);
    
    
    }
}
    return emptyArray;

}
console.log('Lunghezze delle stringhe', lengthOfString(stringsArray))

// 6) mapping function che prende in input un array di stringhe
// e restituisce le stringhe in formato CamelCase

//questo va fatto in tre sezioni principali

function toFirstCase (selectedWord) {
    const firstChar = selectedWord [0];    
    const firstCharUpper = firstChar.toUpperCase();
    const restOfTheString = selectedWord.slice(1);
    return firstCharUpper + restOfTheString;
}

function toCamelCase(selectedString){

    const lowerString = selectedString.toLowerCase();   //tutta la stringa viene resa minuscola
    const wordsArray = lowerString.split(' ');                //crea un array di parole spezzando lungo gli spazi. Se la stringa non ha spazi, l'array è di un solo elemento
    if (wordsArray.length===1) {                             //per cui se è una parola sola rimane tutta minuscola
        return lowerString;
    }

    let camelString = '';
    for (let i = 0; i < wordsArray.length; i++) {
        const element = wordsArray[i];
        
        if (i===0) {
            camelString += element;
        } else {
            camelString += toFirstCase(element);
        }
        

    }
    return camelString;
}
console.log(toCamelCase('bla blaaaa blaaaaaaaaaaaaaaa'))

function toCamelCaseAll (arrayOfStrings) {
    const emptyArray = [];

    for (let i = 0; i < arrayOfStrings.length; i++) {
    
        const element = arrayOfStrings[i];
        
      const newElement = toCamelCase(element);  
      
      emptyArray.push(newElement);
    
    }
}
    return emptyArray;

console.log(toCamelCaseAll('bla blaaaaaaaaaaaaaaa blaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'))


// 7) filter function che prende in input un array di stringhe
// e restituisce solo quelle più lunghe di tre caratteri

function longStringsOnly(selectedArray){

    const emptyArray = [];

    for (let i = 0; i < selectedArray.length; i++) {   
        
        const element = selectedArray [i];
        
        if(typeof element === 'string' && element.length > 3){           //il typeof in verità è superfluo e funziona perfettamente anche senza. E inoltre può dare problemi che non tenga conto degli undefined                            
            emptyArray.push(element);
        }
    }
    return emptyArray;
}

console.log('Long strings only:', longStringsOnly(stringsArray));

// 8) filter function che prende in input un array di stringhe
// e restituisce solo quelle che contengono la lettera 'p'

function stringsWithPOnly(selectedArray){

    const emptyArray = [];

    for (let i = 0; i < selectedArray.length; i++) {            //per rendere la cosa non case sensitive si fa element.toLowerCase().includes('p'). Prima le faccio tutte minuscole e controllo se contengono il carattere minuscolo
        
        const element = selectedArray [i];
        
        if(typeof element === 'string' && element.includes('P') || element.includes('p')){                                       
            emptyArray.push(element);
        }
    }
    return emptyArray;
}

console.log('Only strings that contain "p":', stringsWithPOnly(stringsArray));

// 9) filter function che prende in input un array di numeri
// e restituisce i positivi divisibili per 3

function divisibleBy3String(selectedArray){
    const emptyArray = [];

    for (let i = 0; i < selectedArray.length; i++) {     
        const element = selectedArray [i]   
        if(element > 0 && element % 3 === 0){
            emptyArray.push(element);
        }
    }
    return emptyArray;
    
}

console.log('Only positive numbers divisible by 3:', divisibleBy3String(numbersArray));

// 10) fare una copia della home del sito di AXIA FORMAZIONE

