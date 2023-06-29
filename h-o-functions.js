// // console.log('hadooooken');

// // // //HIGHER ORDER FUNCTIONS---------------------------------------------------
// // // //MAP

// // // function addOneToArray(arrayOfNumbers) {
// // //     let tempArray = [];

// // //     for (let i = 0; i < arrayOfNumbers.length; i++) {
// // //         const element = arrayOfNumbers[i];
        
// // //         const newElement = element + 1;

// // //         tempArray.push(newElement);
// // //     }

// // //     return tempArray;

// // // }

// // // console.log(addOneToArray([3, 8, 0]));

// // // function divideByTwoArray(arrayOfNumbers) {
// // //     let tempArray = [];

// // //     for (let i = 0; i < arrayOfNumbers.length; i++) {
// // //         const element = arrayOfNumbers[i];
        
// // //         const newElement = element / 2;

// // //         tempArray.push(newElement);
// // //     }

// // //     return tempArray;



// // // }

// // // console.log(divideByTwoArray([30, 5, 0]));


// // // //scriviamo adesso una funzione di alto livello che farà tutto quello che facevano le altre funzioni qui sopra. In pratica ho una funzione dentro una funzione 

// // // function map (array, transFunc) {

// // //     let tempArray = [];

// // //     for (let i = 0; i < array.length; i++) {
// // //         const element = array[i];
        
// // //         const newElement = transFunc(element);                               //fino a qui transFunc non sa che cosa deve fare

// // //         tempArray.push(newElement);
// // //     }

// // //     return tempArray;


// // // }

// // // function addOne(element) {

// // //     const newElement = element + 1;
// // //     return newElement;

// // // }

// // // function divideByTwo(element){
// // //     const newElement = element / 2;
// // //     return newElement;
// // // }

// // // // function multiplyByTwo(element){
// // // //     const newElement = element * 2;
// // // //     return newElement;
// // // // }

// // // console.log(map([7, 10, 34], addOne));      //primo elemento della funzione map = il mio array che voglio trasformare. Secondo elemento = la mia funzione nuova che è una versione
// // //                                             //più breve dell'altra funzione

// // // console.log(map([7, 10, 34], divideByTwo));

// // // console.log(map([7, 10, 34], multiplyByTwo)); 

// // // const testArray = [12, 34, 5, 0, -23];

// // // function multiplyByTwo(element) {
// // //     const newElement = element * 2;
// // //     return newElement;
// // // }


// // // console.log(testArray.map(multiplyByTwo));      //questa funzione map che ho usato qui NON È quella che abbiamo fatto noi, bensì è già intrinseca di Javascript

// // // console.log(testArray.map((element) => element * 2));  //lambda function. Che è equivalente a quella sopra



// // // const testArray2 = ['CIAO', 'qui', 'sticazzi', 'il sole splende vincitore'];

// // // //mettiamo di voler estrarre tutte le lunghezze

// // // console.log(testArray2.map((element) => element.length)); //la transforming function prende ogni elemento e ne ritorna la sua lunghezza (questa è la lambda sopra menzionata sotto)


// // // function getStringLength(element) {
// // //     const length = element.length();             //questa è la stessa cosa della lambda sopra
// // //     return length;
// // // }


// // // //dato testArray, una funzione che moltiplichi ogni numero per il suo indice. Quindi 12 * 0 = 0 e così via


// // // function multiplyByIndex(element, i){                         //la funzione map include anche l'indice (i) e l'array originale, se ci servisse

// // //     const newElement = element * i;
// // //     return newElement;
// // // }

// // // console.log(testArray.map(multiplyByIndex));

// // // //segue la stessa in lambda

// // // console.log((element, index) => element * index);         //se voglio posso anche rinominarli quando uso la funzione perché sono solo parametri


// // // function removeNegative(array){
 
// // //     let tempArray = [];
        
// // //     for (let i = 0; i < array.length; i++) {
// // //         const element = array[i];
                
// // //         if (element >= 0) {
        
// // //             tempArray.push(element);
// // //         }
// // //     }
        
// // //     return tempArray;

// // // }

// // // console.log(removeNegative([3, 4, -5, -6, 7]));



// // // function filter(array, filterFunc){


// // //     let tempArray = [];
        
// // //     for (let i = 0; i < array.length; i++) {
// // //         const element = array[i];
                
// // //         if (filterFunc(element)) {                      
        
// // //             tempArray.push(element);
// // //         }
// // //     }
        
// // //     return tempArray;


// // // }


// // // function isPositive(element){                     //quello che succede qui è che applichiamo al nostro elemento la funzione isPositive e, se ritorna true, mi pusha l'elemento nell'array nella filter che abbiamo fatto qui sopra. Questo perché l'abbiamo usata in un if, quindi se il codice viene eseguito o meno dipende dal fatto se quella è vera o falsa
// // //     if (element >= 0) {
// // //         return true;
// // //     } else {
// // //         return false;
// // //     }
// // // }

// // // console.log(filter([0, 3, 5, -2, -6, 19], isPositive));


// // // const testArray3 = [3, 5, 4, 8, 20, 21];

// // // function isEven(element){

// // //     if (element % 2 === 0) {
// // //         return true
// // //     } else {
// // //         return false;
// // //     }

// // // }

// // // console.log(testArray3.filter(isEven));

// // // console.log(testArray3.filter((element) => element % 2 === 0));

// // // //se volessimo filtrare non i numeri pari dell'array, bensì quelli DI INDICE pari? Facciamo quello che segue

// // // function isIndexEven(element, index){

// // // if (index % 2 === 0) {
// // //     return true;
// // // } else {
// // //     return false;
// // // }

// // // }

// // // console.log(testArray3.filter(isIndexEven));

// // // console.log(testArray3.filter((element, index) => index % 2 === 0));      //qui element non viene mai letto, però o lo metto lo stesso (tanto ci interessa index) oppure metto un underscore invece di mettere lui



// // // function sumAll(array){

// // //     let accumulator = 0;

// // //     for (let i = 0; i < array.length; i++) {
// // //         const current = array[i];
        
// // //         accumulator = accumulator + current;

// // //     }

// // //     return accumulator;

// // // }

// // // //la reduce (qui sopra) ha due cose: una function con l'accumulator e un valore neutro da scegliere

// // // console.log(sumAll([23, 4, 4, 79, 3]));


// // // //facciamo la funzione reduce generica

// // // function reduce (array, reduceFunc, startingValue){


// // //     let accumulator = startingValue;

// // //     for (let i = 0; i < array.length; i++) {
// // //         const current = array[i];
        
// // //         accumulator = reduceFunc(accumulator, current);

// // //     }

// // //     return accumulator;

// // // }

// // // function sum(accumulator, current){
// // //     console.log('accumulator', accumulator);
// // //     console.log('current', current);
// // //     const newAccumulator = accumulator + current;

// // //     return newAccumulator;
// // // }

// // // console.log(reduce([23, 4, 4, 79, 3], sum, 0));

// // // const testArray4 = [4, 3, 2, 1];

// // // function multiply(acc, curr) {

// // //     const newAcc = acc * curr;

// // //     return newAcc;

// // // }

// // // console.log(testArray4.reduce(multiply, 1));
// // // console.log(testArray4.reduce((acc, curr) => acc * curr, 1));


// // // //mettiamo di voler sommare tra loro i numeri dell'array 4 a indice dispari

// // // function sumOnlyOddIndex(acc, curr, index, originalArray){
// // //     if (index % 2 !== 0){
// // //         const newAcc = acc + curr;
// // //         return newAcc;
// // //     } else {
// // //         return acc;
// // //     }
// // // }

// // // console.log(testArray4.reduce(sumOnlyOddIndex, 0));


// // // function sumAll2(array){

// // //     let accumulator = array[0];

// // //     for (let i = 1; i < array.length; i++) {
// // //         const current = array[i];
        
// // //         accumulator = accumulator + current;

// // //     }

// // //     return accumulator;

// // // }

// // // //questa è come sumAll, però c'è una differenza in dove parte il mio indice

// // // console.log(sumAll2([2, 3, 4]));
// // // console.log(sumAll([2, 3, 4]));

// // // console.log(testArray4.reduce(sum));
// // // console.log(testArray4.reduce(sum, 0));                             //qui 0 è lo starting value. Se non



// // //FUNZIONI CHE RESTITUISCONO FUNZIONI

// // // function multiplyBy2(number) {
// // //     const result = number * 2;
// // //     return result;    
// // // }

// // // function multiplyBy4(number) {
// // //     const result = number * 4;
// // //     return result;    
// // // }

// // // console.log(multiplyBy2(3));
// // // console.log(multiplyBy4(3));

// // // function multiplyGenerator(multiplicator){

// // //     const multiplyFunction = function(number){
// // //         const result = number * multiplicator;
// // //         return result;
// // //     }

// // //     return multiplyFunction;

// // // }

// // // const multiplyBy5 = multiplyGenerator(5);                  //questa funzione non genera un nuovo risultato, bensì una nuova funzione. Quindi non devo riscrivere la funzione di moltiplica, se mi basta dover cambiare il numero per cui moltiplico. Faccio questa cosa per creare funzioni che lo facciano

// // // console.log(multiplyBy5(3));

// // // console.log(multiplyGenerator(100)(3));                //questo genera una funzione senza nome e la invoca subito passandogli l'altro parametro


// // // function prefix(prefixStr) {
// // //     const prefixFunction = (str) => prefixStr + ' ' + str;
// // //     return prefixFunction;
// // // }

// // // const itaPrefix = prefix('+39');

// // // console.log(itaPrefix('010 8232 21'));

// // // const frPrefix = prefix('+33');

// // // console.log(frPrefix('010 8232 21'));



// // // ESERCIZI 

// //const numbersArray = [23, 45, 12, -8, -6, 23, 45, 1, 45, 34, 2]
// //const stringsArray = ['23', 'PIPPO', 'pluto', 'la CASA blu', 'Osvaldo', '', 'porchetta'];

// // // 1) mapping function che prende in input un array di numeri
// // // e restituisce un array con tutti i numeri diminuiti di uno

// // function minusOne(element){
// //     const result = element -1;             //si può anche scrivere direttamente "return element - 1;"
// //     return result;

// // }

// // console.log(numbersArray.map(minusOne));

// // console.log(numbersArray.map((element) => element - 1));

// // // 2) mapping function che prende in input un array di numeri
// // // e restituisce un array con i numeri  e il valore assoluto dei numeri (i negativi devono essere senza segno)


// // function absoluteValue(element){

// // const absoluteResult = Math.abs(element)
// // return absoluteResult;

// // }

// // console.log(numbersArray.map(absoluteValue));
// // console.log(numbersArray.map((element) => Math.abs(element)));

// // // 3) mapping function che prende in input un array di numeri
// // // e restituisce un array di stringhe con scritto 'PARI' se il numero corrispondente è pari 
// // // o 'DISPARI' se il numero corrispondente è dispari

// // function evenAndOdd(element){
// //     if (element % 2 === 0 ) {
// //         return 'pari';
// //     } else {                                                             //altro caso di else superfluo
// //         return 'dispari';
// //     }
// //     //return element %2 === 0  ?  'pari' : 'dispari'                     //operatore ternario
// // }

// // console.log(numbersArray.map(evenAndOdd));

// // console.log(numbersArray.map((element) => element %2 === 0  ?  'pari' : 'dispari'));

// // // 4) mapping function che prende in input un array di stringhe
// // // e la restituisce tutte minuscole

// // function lowerCaser(element) {
// //   return element.toLowerCase();
// // }

// // console.log(stringsArray.map(lowerCaser));
// // console.log(stringsArray.map((element) => element.toLowerCase()));

// // // 5) mapping function che prende in input un array di stringhe
// // // e restituisce un array di numeri con le lunghezze delle stringhe

// // function strLength(element) {
// //     return element.length;
// // }

// // console.log(stringsArray.map(strLength));
// // console.log(stringsArray.map((element) => element.length));

// // // 7) filter function che prende in input un array di stringhe
// // // e restituisce solo quelle più lunghe di tre caratteri

// // function longStringOnly(element){
// //     if (element.length > 3) {
// //         return element;
// //     } 
// // }


// // function isLengthGreaterThan3(element){
// //     if(element.length > 3) {
// //         return true;
// //     }
// //     return false;
// // }


// // console.log(stringsArray.filter(longStringOnly));
// // console.log(stringsArray.filter((element) => element.length > 3));

// // console.log(stringsArray.filter(isLengthGreaterThan3));
// // console.log(stringsArray.filter((element) => element.length>3));

// // // 8) filter function che prende in input un array di stringhe
// // // e restituisce solo quelle che contengono la lettera 'p'

// // function containsP(element){
// //     if (element.includes('p') || element.includes('P'))  {
// //         return element;
// //     }
// // }

// // //alternativa segue

// // function containsP2(element){
// //     if (element.toLowerCase().includes('p')) {
// //         return true;
// //     } return false;
// // }

// // console.log(stringsArray.filter(containsP));

// // // 9) filter function che prende in input un array di numeri
// // // e restituisce i positivi divisibili per 3

// // function divisibleBy3 (element){
// //     if (element % 3 === 0 && element >= 0) {
// //         return true;
// //     }                                                 //funzionava anche se mettevamo return element e nessun else alternativo, però no: la filter DEVE restituire un booleano
// //         return false;
// // }

// // console.log(numbersArray.filter(divisibleBy3));
// // console.log(numbersArray.filter((element) => element % 3 === 0 && element > 0));


// // //10) reduce. Dato un array di stringhe, somma tutte le lunghezze

// // // function reduceStringAddition (array, reduceFunc, startingValue){
// // //     let accumulator = 0;

// // //     for (let i = 0; i < array.length; i++) {
// // //         const curr = array[i];
        
// // //         accumulator = curr.length + accumulator;
// // //     }
// // //     return accumulator;
// // // }

// // function sumLength(acc, curr){
// //     newAcc=acc+curr.length;
// //     return newAcc;
// // }

// // console.log(stringsArray.reduce(sumLength, 0));
// // console.log(stringsArray.reduce((a, c) => a + c.length, 0));



// // //11) reduce. Dato un array di stringhe, somma le lunghezze delle ultime tre stringhe

// // function sumLengthOfLast3(acc, curr, index, originalArray){
// //     if (index >= originalArray.length-3) {
// //         return acc + curr.length;
// //     }
// //     return acc;
// // }
// // console.log(stringsArray.reduce(sumLengthOfLast3, 0));
// // console.log(stringsArray.reduce((a, c, i, o ) => i >= o.length -3 ? a + c.length : a, 0));


// //SORTING--------------------------------------------------------------------------------------------------------
// //come ordinare un array

// // const numbersArray = [23, 45, 12, -8, -6, 23, 45, 1, 45, 34, 2];
// // const stringsArray = ['23', 'PIPPO', 'pluto', 'la CASA blu', 'Osvaldo', '', 'porchetta'];

// // //diciamo di voler ordinare l'array di stringhe in ordine alfabetico

// // stringsArray.sort();

// // console.log(stringsArray);

// // numbersArray.sort();

// // console.log(numbersArray);

// // //queste logiche di sorting sono un po' discutibili, ad esempio tutti i numeri che iniziano per 1 (es 130) vengono raggruppati tra loro

// // //al sort possiamo dare un'altra funzione in pasto che gli spieghi IN CHE MODO ordinare le cose
// // //la logica della funzione di comparazione è che se ne so comparare 2, ne so comparare potenzialmente infiniti

// // //le funzioni di mapping e filtering non alterano l'array originale, bensì ne creano uno nuovo e ci leggono quello. Si può anche modificare l'origina, ma non è obbligatorio

// // const newArray = numbersArray.map(e => e + 1);    //questo qui dice di aggiungere 1 a tutti gli elementi

// // const newArray2 = numbersArray.sort();
// // console.log('new', newArray2);
// // console.log('numbers', numbersArray);   //questo e quello sopra, al contrario delle funzioni menzionate sopra, MODIFICA DIRETTAMENTE IL MIO ARRAY
// // //sort non genera un nuovo array, bensì sorta in place (cioè di default non mi permette di tenere l'array disordinato, che potrei voler tenere)

// // function compareAscendingNumbers(n1, n2){              //come dicevo prima, se so confrontare due elementi li so confrontare tutti

// //         if (n1 < n2){
// //             return -1;                       //se voglio che gli elementi mantengano lo stesso ordine, metto -1
// //         } else if (n1 > n2){
// //             return 1;                        //se voglio che cambino ordine, metto 1, es 12 e -8 
// //         } else {
// //             return 0;                        //se sono uguali, quindi è indifferente, metto 0
// //         }

// // }

// // function compareAscendingNumbers2(n1, n2){
// //     return n1 - n2;                                   //se l'ordine è già giusto, sottrarre uno dei due all'altro dà un numero negativo, quindi va bene così come sopra (col -1, che è -1 ma potrebbe essere anche -1000)
// // }

// // function compareDescendingNumbers2(n1, n2){
// //     return n2 - n1;                                   //facendo il contrario (secondo numero - primo numero), metto l'ordine discendente
// // }

// // numbersArray.sort((n1, n2) => n1 - n2);

// // numbersArray.sort(compareAscendingNumbers2);   //in questo modo, invocando questa, dico al sorting come sortare l'array

// // console.log(numbersArray);

// // //per le stringhe vediamo direttamente la lambda

// // stringsArray.sort((s1, s2) => s1.localeCompare(s2));    //questo è un sorting di stringhe in ordine alfabetico. "locale" perché ordina in base alla lingua del browser

// // //se voglio l'ordine inverso, scrivo uguale ma un - davanti a s1.localeCompare(s2)

// // console.log(stringsArray);


// const student1 = {
//     name: 'Manuela',
//     yob: 1988,
//     marks: [10, 8, 7, 5]
// }

// const student2 = {
//     name: 'Damiano',
//     yob: 1993,
//     marks: [9, 8, 7, 10]
// }

// const student3 = {
//     name: 'Cesare',
//     yob: 2003,
//     marks: [7, 8, 7, 6]
// }

// const student4 = {
//     name: 'Isabella',
//     yob: 1996,
//     marks: [10, 8, 9, 9]
// }

// const student5 = {
//     name: 'Stefania',
//     yob: 1996,
//     marks: [9, 4, 7, 6]
// }

// const student6 = {
//     name: 'Ares',
//     yob: 1993,
//     marks: [10, 10, 10, 10]
// }

// const student7 = {
//     name: 'Stefania',
//     yob: 2000,
//     marks: [10, 6, 10, 10]
// }

// const student8 = {
//     name: 'Cesare',
//     yob: 2003,
//     marks: [9, 9, 9, 9]
// }


// const students = [student1, student2, student3, student4, student5, student6, student7, student8];

// console.log(students);

// //io queste persone le posso ordinare in svariati modi che voglio, quindi bisogna costruire funzioni apposite

// //proviamo a sortarli per nome in ordine alfabetico per la prima lettera

// function compareStudentsByNameAscending(s1, s2){
//     return s1.name.localeCompare(s2.name);                //prendo il campo che mi interessa e uso la comparazione adatta a quel campo
// }

// function compareStudentsByYOBDescending(s1, s2){
//     return s2.yob - s1.yob;
// }

// function compareStudentsByNameAndByYear(s1, s2){              //qui ho sortato per nome e, in caso di due nomi uguali, per età
//     if (s1.name.localeCompare(s2.name) === 0){
//         return s2.yob - s1.yob;
//     } else {                                                  //la funzione sta dicendo "se il primo criterio dà parità, usa il secondo criterio"
//         return s1.name.localeCompare(s2.name);
//     }

// }

// function calculateMean(arrayOfNumbers){
//     const sumOfArray = arrayOfNumbers.reduce((a, c) => a + c);
//     const mean = sumOfArray / arrayOfNumbers.length;
//     return mean;
// }

// function compareByStudentsMarksMeanAscending(s1, s2){

//     return calculateMean(s2.marks) - calculateMean(s1.marks);

// }

// function compareStudentsByNameYearAndMean(s1, s2){
//     if (s1.name.localeCompare(s2.name) === 0) {
    
//         if (s2.yob - s1.yob === 0){
//         return calculateMean(s2.marks) - calculateMean(s1.marks);
//     } else {
//         return s2.yob - s1.yob;
//     }

//     } else {
//         return s1.name.localeCompare(s2.name);
//     }
// }

// students.sort(compareStudentsByNameYearAndMean);          
// //students.sort(compareStudentsByYOBDescending);

// console.log(students);

// //se uso la stessa funzione che ho fatto adesso per la nuova Stefania ma per il nuovo Cesare, non riconosce qual è quello coi voti migliori

//FIND-----------------------------------------------------------------------------------------
//find mi trova il primo elemento di una stringa che soddisfa le condizioni che gli ho dato

const stringsArray = ['23', 'PIPPO', 'pluto', 'la CASA blu', 'Osvaldo', '', 'porchetta'];
//una find è una specie di filter

function containsCASA(element){
    if (element.includes('CASA')) {
        return true;
    }
    return false;
}


function isGreaterThan3Chars(element){

    if (element.length > 3){
        return true;
    }
        return false;
}

console.log(stringsArray.find(isGreaterThan3Chars));                //se scrivo filter nel console log, mi dà tutte quelle più lunghe di 3. Se scrivo find, mi dà soltanto la prima più lunga di 3, ovvero PIPPO

//la struttura è IDENTICA a quella di una filter, però nel log scrivo find o filter a seconda di cosa mi serve


console.log(stringsArray.filter(containsCASA));            //questo mi printa un array contenente solo l'elemento che gli ho chiesto, mentre
console.log(stringsArray.find(containsCASA));              //questo mi printa solamente la stringa che gli ho chiesto




//SOME-------------------------------------------------------------------------------------------------------------------
// some si chiede se un array ha una caratteristica esprimibile come una function che può essere true or false, ma quello che 
// ci ritorna è true se ALMENO uno degli elementi soddisfa la caratteristica e false se non ce n'è almeno uno

function isGreaterThan30Chars(element){
    if (element.length > 30){
        return true;
    }
        return false;
}

console.log(stringsArray.some(isGreaterThan3Chars));
console.log(stringsArray.some(isGreaterThan30Chars));