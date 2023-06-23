console.log('array');
// // ARRAY---scatole che contengono più elementi--------------------------------------------------------------------

// // const nomeVariabile = [array1, array2, etc..]
// // scatola che contiene un array di stringhe
// const pippo = ['pane', 'pasta', 'latte', 'caffè'];
// console.log(pippo);
// console.log(pippo.length);

// console.log(typeof pippo); // object


// console.log('INIZIO: AGGIUNGERE ELEMENTI')
// // AGGIUNGERE elementi
// // funzione push e unshift
// console.log('push aggiunge in coda:')
// pippo.push('acqua'); // aggiunge all'array un elemento in coda
// console.log(pippo);
// // ---
// console.log('unshift aggiunge in testa:')
// pippo.unshift('biscotti'); // aggiunge all'array un elemento in testa
// console.log(pippo);


// console.log('PARTE 2: TOGLIERE ELEMENTI')
// // TOGLIERE elementi
// console.log('pop toglie in coda:')
// const pippo2 = ['pane', 'pasta', 'latte', 'caffè'];
// // ---
// const elementoCoda = pippo2.pop();
// console.log(elementoCoda);
// console.log(pippo);
// // ---
// console.log('shift toglie in testa:');

// const elementoTesta = pippo2.shift(); // 
// console.log(elementoTesta);
// console.log(pippo2);



// // CICLI ED ARRAY --------------------------------------
// const pluto = [1, 2, 23, -4, 345, 0]

// console.log(pluto[0]);

// console.log(pluto[2]);

// console.log(pluto[pluto.length -1]); // ultimo elemento!

// // CICLO FOR:
// for (let i = 0; i < pluto.length; i++) {
//         const element = pluto[i];
//             console.log(element);
//     }

// // for (const iterator of object)
//    for (const element of pluto) { //for of
//         console.log(element);
// }


// // CICLO WHILE:
// // let i = 0;
// // while (i < pluto.length){
// //     const element = pluto[i];
// //     console.log(element);
// //     i++;
// // }

// console.log('ciclo array al contrario:')
// // CICLARE ARRAY AL CONTRARIO

// for (let i = pluto.length -1; i >= 0; i--) {
//     const element = pluto[i];
//     console.log(element);
// }

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
//                            invocarla(passareArrray)
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