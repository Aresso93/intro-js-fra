console.log('SHORYUKEN!');

//aggiungere stringa vuota a qualsiasi elemento lo rende una stringa

//oggi abbiamo fatto la differenza tra stack e heap, come interagiscono e il fatto che Javascript legge lo spazio di memoria
//di un elemento, e non il suo contenuto. Quindi due oggetti stivati nell'heap che hanno tutto equivalente vengono comunque interpretati come 
//diversi. Esiste la funzione freeze, ma freeza solo a un livello gli oggetti e non li rende modificabili. Però se voglio modificare
//un oggetto dentro un oggetto, freeze non blocca quella cosa.
//esiste anche JSON che mi permette di rendere stringhe le mie cose in modo che nel console log siano leggibili come sono
//(altrimenti me lo fa vedere compresso e nel momento in cui lo apro mi logga la cosa sbagliata)

//se metto {...person}, sto facendo un clone dell'oggetto person (uso parentesi quadre se voglio fare un array)
//questo è utile perché tendenzialmente vogliamo lavorare su copie dei nostri oggetti, non tanto sugli oggetti veri.
//perché si rischia di fare errori

//scrivere una funzione che dato un array di numeri li eleva al quadrato e rimuove i negativi

const testArray = [2, -12, 0, 27, 4, -3, 12, 1, -1];

function squareAllAndRemoveNegatives(arr){
    const onlyPositiveArray = arr.filter( el => el >= 0);
    const squaredArray = onlyPositiveArray.map( el => el**2);
    return squaredArray;
}



//versione alternativa

function squareAllAndRemoveNegatives2(arr){
    
    return arr.filter( el => el >= 0).map( el => el **2);     //fa prima un filter ad arr e immediatamente dopo fa un map di quello filtrato

    //potevo fare un array nuovo, ma non è necessario e posso direttamente ritornare la cosa dopo filtering e mapping
}

console.log(squareAllAndRemoveNegatives2(testArray));

function squareAllAndRemoveNegatives3(arr){
    const accumulator = [];

    for (const number of arr) {
        
        if ( number >= 0 ) {                                 //questa riga da sola è il filtering, perché stiamo già filtrando il nostro array
           const newNumber = number**2
           accumulator.push(newNumber); 
        }

    }

    return accumulator;
}

//quando mixo filtering, mapping etc., la sintassi principale che vince è quella della reduce

function squareAllAndRemoveNegatives4(arr){
    
    return arr.reduce((acc, curr)=> {
        if ( curr >= 0 ) {                                 //questa riga da sola è il filtering, perché stiamo già filtrando il nostro array
            const newNumber = curr**2
            acc.push(newNumber); 
            return acc;
         }
         return acc;
    }, []);

}

//scrivi una funzione che dato un array di numeri somma tutti quelli divisibili per 3;


function sumAllDivisibleBy3(arr){

    const divisibleBy3Array = arr.filter((el => el % 3 === 0));
    const sum = divisibleBy3Array.reduce((acc, curr) => acc + curr , 0);

    return sum;
}

function sumAllDivisibleByThree(arr){

    return arr.filter((el => el % 3 === 0)).reduce((acc, curr) => acc + curr , 0);
}

console.log(sumAllDivisibleByThree(testArray));


function sumAllDivisibleByThree2(arr){
    let accumulator = 0;

    for (const number of arr) {
        
        if ( number % 3 === 0 ) {                            
          accumulator = accumulator + number;
        }

    }

    return accumulator;
}

console.log(sumAllDivisibleByThree2(testArray));

function sumAllDivisibleByThree3(arr){
   
    return arr.reduce((acc, curr) => {
        if (curr % 3 === 0) {
            acc = acc + curr;
        }
    

        return acc;
    }, 0);
}

console.log(sumAllDivisibleByThree3(testArray));

//data una stringa di elementi separati da virgole, 
//convertire gli elementi in numeri, 
//togliere quelli che non sono numeri
//e sommare i numeri tra loro

const testString = '2000,10,pippo,345,-234,ciambella,2,,'

function convertToNumbersAndSumAllNumbers(str){

    const stringArray = str.split(',');
//ora facciamo un mapping per convertirlo in array di numeri
    const numbersArray = stringArray.map(el => parseFloat(el));     //parseFloat ci permette di dire che quello che contiene diventa un numero intero o con la virgola

    const onlyNumbersArray = numbersArray.filter(el => {
        if (isNaN(el)) {
            return false;
        } else {
            return true;
        }
    })

    const sum = onlyNumbersArray.reduce((acc, curr) => acc + curr, 0);

    return sum;

}

console.log(convertToNumbersAndSumAllNumbers(testString));

function convertToNumbersAndSumAllNumbers2(str){

    return str.split(',')
              .map(el => parseFloat(el))
              .filter(el => !isNaN(el))
              .reduce((acc, curr) => acc + curr, 0);
}


function convertToNumbersAndSumAllNumbers3(str){
    const stringArray = str.split(',');
    
    let accumulator = 0;

    for (const str of stringArray) {
        
        const number = parseFloat(str);
        if (!isNaN(number)) {
            accumulator = accumulator + number;
        }
    }

    return accumulator;
}

console.log(convertToNumbersAndSumAllNumbers3(testString));


function convertToNumbersAndSumAllNumbers4(str){
   
    return str.split(',').reduce((acc, curr) =>  {
        const number = parseFloat(curr);
        if (!isNaN(number)) {
            acc = acc + number;
        }
        return acc;
    } , 0)

}

console.log(convertToNumbersAndSumAllNumbers4(testString));

// Con tutti e 4 i procedimenti
//1)  Dato un array di stringhe, 
//   eliminare tutte quelle che non contengono la lettera p
//   e ritornare la somma delle lunghezze delle rimanenti

const test1 = ['pippo', 'pluto', 'qui', 'quo', 'qua', 'paperone'];

// v1
function onlyContainsPSum(arr) {
    const onlyContainsP = arr.filter(el => el.toLowerCase().includes('p'));
    const stringsLengthArray = onlyContainsP.map(el => el.length);
    const stringsLengthArraySum = stringsLengthArray.reduce((acc, curr) => acc + curr, 0);
    return stringsLengthArraySum;
} 
console.log('esercizio 1', onlyContainsPSum(test1));


//v2
function onlyContainsPSum2(arr) {
    const newArray = arr.filter(el => el.toLowerCase().includes('p')).map(el => el.length).reduce((acc, curr) => acc + curr, 0);
    return newArray;
} 
console.log('esercizio 1', onlyContainsPSum2(test1));

//v3
function onlyContainsPSum3(arr) {
    return newArray = arr.filter(el => el.toLowerCase().includes('p')).map(el => el.length).reduce((acc, curr) => acc + curr, 0);
} 
console.log('esercizio 1', onlyContainsPSum3(test1));

//v4 non completa
// function onlyContainsPSum(arr) {
//     const acc = 0;
//     for (const element of arr) {
//         if (element.toLowerCase().includes('p')) {
//             const sum = element.length.reduce((acc, curr) => acc + curr, 0);
//         }
//     }
// }


//2) Dato un array di numeri, moltiplicarli per il loro indice
//   rimuovere quelli maggiori di 1000
//   e restituirli in formato stringa, separati da punto e virgola

const test2 = [100, 10, 24, -20, 300, 6, 100, 300];

function multiplyArrayByIndexRemoveGreaterThan1000TurnThemIntoStrings(arr){

    const multipliedArray = arr.map((el, i) => {
    const multipliedValue = el * i;
    return multipliedValue;
  });
  
    const smallArray = multipliedArray.filter(el => {
        if (el >= 1000) {
            return true;
        } else {
            return false;
        }
    })

    const stringArray = smallArray.map(el => el.toString());
    return stringArray;

}

console.log('esercizio 2', multiplyArrayByIndexRemoveGreaterThan1000TurnThemIntoStrings(test2));


function multiplyArrayByIndexRemoveGreaterThan1000TurnThemIntoStrings2(arr){

    return arr.map((el, i) => el * i).filter(el => el >= 1000).map((el => el.toString()));

}

console.log('esercizio 2', multiplyArrayByIndexRemoveGreaterThan1000TurnThemIntoStrings2(test2));



function multiplyArrayByIndexRemoveGreaterThan1000TurnThemIntoStrings(arr) {
    const multipliedArray = arr.map((el, i) => {
      const multipliedValue = el * i;
      return multipliedValue;
    });

    const filteredArray = multipliedArray.filter(el => el <= 1000);
    const stringArray = filteredArray.map(el => el.toString());

    return stringArray;
}



console.log(multiplyArrayByIndexRemoveGreaterThan1000TurnThemIntoStrings3(test2));

//3) Data una stringa, eliminare tutte le parole più corte di 4 caratteri
//   e restituirle in un array ordinate per lunghezza dalla più lunga

const test3 = 'ho fatto il bucato ieri sera ma si è colorato tutto di violetto';

function removeShortWordsReturnWordsFromTheLongest(str){

    let sentenceArray = str.split(' ');
    let smallerArray = sentenceArray.filter(el => {
        if (el.length > 4) {
            return true;
        } else {
            return false;
        }
    })
    
const sortedArray = smallerArray.sort((a, b) => b.length - a.length);
return sortedArray;

}

console.log('esercizio 3', removeShortWordsReturnWordsFromTheLongest(test3));


function removeShortWordsReturnWordsFromTheLongest2(str){

    return str.split(' ').filter(el => el.length > 4).sort((a, b) => b.length - a.length);

}

console.log('esercizio 3', removeShortWordsReturnWordsFromTheLongest2(test3));


function removeShortWordsReturnWordsFromTheLongest3(str){
    const stringArray = str.split(' ');
    
    let accumulator = [];

    for (const str of stringArray) {

        if (str.length > 4) {
            accumulator.push(str);
        };
    }
   let finalAccumulator = accumulator.sort((a, b) => b.length - a.length); 

    return finalAccumulator;
}

console.log('esercizio 3', removeShortWordsReturnWordsFromTheLongest3(test3));
