console.log('varie ed eventuali');

//SCOPE-------------------------------------------------------------------------------------------------------------------------------------------------------------
//gli scope sono delimitati da parentesi graffe nei C-like

//scope globale----------------------------------------------------------------------------------------------------------------------------------------------------
//tutto il programma, tendenzialmente. è dichiarato fuori da qualsiasi graffa

//let pippo = 10; //questa costante appartiene allo scope globale, si applica a tutto il codice


if (pippo < 20) {
    
    
    pippo = pippo + 3;
    
    let pluto = 4;

}


//pluto = pluto + 1;       //questo pluto è fuori dallo scope

console.log(pippo);
//console.log(pluto);  //questo console log, infatti, mi dà un errore dicendomi che pluto non è definito. Come mai? Perché è fuori dalle graffe dove dovrebbe stare

//una volta che usciamo da uno scope, tutte le variabili al suo interno che sono state usate vengono segnate come eliminabili, perché nascono e muoiono all'interno del loro scope


//SCOPE NESTATI------------------------------------------------------------------------------------------------------------------------------------------------------------

function createEvenArray(max){
    const tempArray = [];
    const i = 40;                               //io ho fatto una costante i con un valore, ma dopo ho fatto anche una variabile = 0. Quindi quale vede?
    for (let i = 0; i <= max; i++) {            //potremmo anche avere una i definita globalmente
                                                //la i più innestata e prossima al genitore è quella che viene scelta nella gerarchia. Si dice che mette in ombra la variabile più lontana
       if (i % 2 === 0) {
            tempArray.push(i);                  //qiesto lo posso usare perché è all'interno della funzione genitore. I genitori "non vedono" i figli
       }
        
    }

    return tempArray;

}

console.log(createEvenArray(1000));

//la ragione di cui sopra è il motivo per cui quando facciamo cicli dentro ai cicli cambiamo la variabile e non usiamo sempre i

// for (let i = 0; i < 10; i++) {
    
//     for (let i = 0; i < 20; i++) {
        
//         for (let i = 0; i < 30; i++) {
        
//             console.log(i);

//         }
        
//     }
    
// }

//qui sopra abbiamo 3 volte i, ma quella che viene presa è quella più interna. Non è di per sé un errore farlo, ma quello che succede è che le prime due vengono oscurate


//FUNZIONE-------------------------------------------------------------------------------------------------------------------------------------------------------------

//FUNZIONE PARAMETRI ARGS------------------------------------------------

function mean(v1, v2, v3) {                     //posso anche togliere tutte e 3 le V, semplicemente sono i parametri a cui ho dato un nome. Poi nessuno mi vieta di aggiungere parametri per fare la mia media, semplicemente non avranno un nome

    //console.log(arguments);                    //se printo questo, mi dice la posizione dei parametri e quali sono i parametri in base a quelli che ho scritto dopo

    //const sum = v1 + v2 + v3;
    //const mean = sum / 3;

    //return mean;

    let sum = 0;

    for (let i = 0; i < arguments.length; i++) {                  //la length qui è usata al posto del numero 3. Torna comodo così non devo sapere per forza il numero dei parametri
        const value = arguments[i];
        sum += value;
    }

    const mean = sum / arguments.length;

    return mean;

}

console.log(mean(3, 4, 5));


function sumAll(...args) {                           //i 3 puntini stanno dicendo che tutti gli elementi che saranno usati nella funzione dovranno essere messi in args (che creo io). Funziona come arguments dell'esempio sopra

let sum = 0;

for (let i = 0; i < args.length; i++) {
    const value = args[i];
    
    sum = sum + value;
}
    return sum;
}

console.log(sumAll(3,4,5));


function pippo(v1, v2, ...args) {
    console.log('arguments', arguments);
    console.log('v1', v1);
    console.log('v2', v2);
    console.log('args', args);
}

//pippo(2,4,6,8,0);

//args mi printa solo quelli che non ho esplicitamente nominato, al contrario di arguments che include anche quelli espliciti

//REDUCE--------------------------------------------------------------------------------------

function sumAllArray(arrayToSum) {

    let accumulator = 0;                                          //l'accumulator è un operatore neutro rispetto all'operazione che facciamo. Se è una somma 0, se è un array sarà un array vuoto

    for (let i = 0; i < arrayToSum.length; i++) {
        const current = arrayToSum[i];
        
        // put your code here
        accumulator = accumulator + current;
    }

    return accumulator;

}

console.log('sumAllArray', sumAllArray([2,3,4,5]));



function multiplyAllArray(arrayToMultiply) {

    let accumulator = 1;                                          //l'accumulator è un operatore neutro rispetto all'operazione che facciamo. Se è una somma 0, se è un array sarà un array vuoto

    for (let i = 0; i < arrayToMultiply.length; i++) {
        const current = arrayToMultiply[i];
        
        // put your code here
        accumulator *= current;
    }

    return accumulator;



}

console.log('multiplyAllArray', multiplyAllArray([2,3,4,5]));

function join(arrayToJoin) {

    let accumulator = '';                                          //l'accumulator è un operatore neutro rispetto all'operazione che facciamo. Se è una somma 0, se è un array sarà un array vuoto
                                                                   // se è stringa, stringa vuota
    for (let i = 0; i < arrayToJoin.length; i++) {
        const current = arrayToJoin[i];
        
        // put your code here
      
        accumulator += current; 

    }

    return accumulator;



}

console.log('join', join(['qui', 'quo', 'qua']));     //questa funzione mi printa qui, quo e qua tutti attaccati

//function sumEvenAndOdd(arrayToReduce) {
//
//    let accumulator = {sumOfEven: 0, sumOfOdd: 0};                  //siccome l'accumulator può avere più risultati, visto che voglio che la mia funzione mi printi la somma dei pari e la somma dei dispari separatamente
////qui accumulator è stato reso un oggetto perché è l'unico modo per fargli printare DUE cose. Sennò una funzione può restituire soltanto un risultato
//    for (let i = 0; i < arrayToReduce.length; i++) {
//        const current = arrayToReduce[i];
//        
//        // put your code here
//       if (current % 2 === 0) {
//            accumulator.sumOfEven += current;
//       } else {
//        accumulator.sumOfOdd += current;
//       }
//    }
//
//    return accumulator;
//
//}
//
//console.log('sumEvenAndOdd', sumEvenAndOdd([1, 2, 3, 4, 5, 6]))


// RICORSIONE----------------------------------------------------------------------------------------------------------------------------------

// si può usare una ricorsione per definire (ad esempio) un fattoriale


//DEFINIZIONE
// 1) 1! = 1;
// 2) n! = n * (n - 1)!

// 5! = 5 * 4!
//          4 * 3!
//              3 * 2!
//                  2 * 1!
//                      1


function fattoriale(n) {
    // 1)
    if (n === 1) {
        return 1;
    } else {
    //2)
        return n * fattoriale(n - 1);
    }
}

console.log(fattoriale(21));

//la funzione scende e fa ricorsioni finché non trova quella che interrompe la ricorsione e risale, sostituendo man mano i numeri

function min(v1, v2) {

    let minimum;

    if (v1 < v2) {
        minimum = v1;
    } else {
        minimum = v2;
    }

    return minimum;

}

console.log('min test', min(3,8)===3);

function min2(...args) {

    let accumulator = -Infinity;

    for (let i = 0; i < args.length; i++) {
        const current = args[i];
        

        if (i === 0) {
            accumulator = current;
        } else if (accumulator > current){
            accumulator = current;
        }


    }

return accumulator;

}

console.log(min2());
console.log(min2(2));
console.log(min2(3, 2, -5, 8));


// 1) isEven(0) => true
// 2) isEven(1) => pari
// 3) isEven(n) => isEven(n-2)

function isEven(n){

if (n === 0) {                                 //mettiamo di fare quello di 3. 3 = 0? No, allora scendo all'else if. 3 = 1? No, allora vado all'else. Quindi mi applica isEven di (3-2), cioè 1. E siccome la risposta a isEven(1) la sa, si ferma
    return true;
} else if (n === 1){
    return false;
} else {
    return isEven(n-2);
}

}

console.log(isEven(70));