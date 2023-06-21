console.log('hello world!')

// VARIABILI
// crea una scatola "pippo" che contiene un valore

// // variabili con LET ---------------------------------------

// let pippo = 5; 

// console.log(typeof pippo);

// pippo = 'viva il caffè';

// console.log(typeof pippo);

// console.log(pippo)

// variabili con CONST ----------------------------------------

// const pluto = 12;

// pluto = 23;

// console.log(pluto);



// variabili con VAR ------------------------------------------

// var paperino = true;

// console.log(paperino);

// paperino = -123;

// console.log(paperino);
// ------------------------------------------------------------
// differenza con let:
// non posso usare una cosa prima di averla creata;

// topolino = 5;

// let topolino;
// ------------------------------------------------------------

// con var sì, cerca prima il var nella pagina e poi esegue il codice - hoisting

// minnie = 5;

// var minnie;

// console.log(minnie);
// ------------------------------------------------------------

// // BOOLEAN ----------------------------------------------------

// const etabeta = true;
// console.log(etabeta);

// /* 
// //    ! (not)
//     !true => false;
//     !false => true;
// */

// console.log(!etabeta);

// /*   
// //  && (and) 
//     true && true => true;
//     true && false => false;
//     false && true => false;
//     false && false => false;

//     && è vero solo quando entrambi sono veri
//     */

// const gastone = false;
// console.log(etabeta && gastone);
// console.log(etabeta && !gastone);

// // il none ha precedenza nelle altre operazioni


// /*
// // OPERAZIONI LOGICHE

// || (or) true || true => true
//         true || false => true
//         false || true => true
//         false || false => false
// */

// console.log(etabeta || !gastone); // true
// console.log(etabeta || gastone); // true
// console.log(!etabeta || gastone); // false
// console.log(!etabeta || !gastone); // true

// console.log(( etabeta || gastone ) && etabeta);  // true


// // STRINGHE ----------------------------------------------------
// // espressioni testuali che mettiamo tra 'virgolette'

// const orazio = 'io adoro javascript';

// console.log(orazio[0])
// console.log(orazio[9])
// // voglio il primo elemento della stringa

// // manipolazione delle stringhe
// // si inizia a contare da 0 e si considerano anche gli spazi

// const clarabella = 'perchè non sono sano di mente';

// console.log(orazio + clarabella);
// console.log(orazio + ' ' + clarabella); // aggiungo lo spazio
// // lo spazio è una stringa

// const aladin = 27;

// console.log(orazio + 27); // lo converte in stringa, cast implicita

// console.log(clarabella.length);

// console.log(clarabella.toUpperCase());
// // lenght lunghezza

// const alvin ="!!!"
// console.log((clarabella+alvin+' ').toUpperCase());


// // Undefined e NULL
// const macchiaNera = 5;
// // mentre CONST deve essere riempita al momento

// let paperinik;

// paperinik = 12;

// console.log(paperinik);
// // let può essere riempita in un secondo momento
// // se il console.log lo scrivo prima di aver definito la variabile mi da errore undefined

// let sbagliato;
// console.log(sbagliato); // undefined => scatola vuota
// sbagliato = 12;


// paperinik = undefined; // noooooooooooo;
// console.log(paperinik);

// paperinik = null;
// console.log(paperinik);


// OPERATORI DI CONFRONTO = < > diverso

// const nonnaPepera = 12;
// const ciccio = 24;
// const joseCarioca = '12';

// /* 
//     >  (maggiore)
//     >= (maggiore o uguale)
// */

// console.log(ciccio >= nonnaPepera);

// /* 
//     <  (minore)
//     <= (minore o uguale)
// */

// console.log(ciccio < nonnaPepera);

// // !== (diverso)

// console.log(ciccio !== nonnaPepera);

// /*
//      == (uguale con cast)
//      fa una sorta di conversione
    
//      === (uguale stretto)
// */

// console.log(nonnaPepera == joseCarioca); // (mai usare questo qui!!!!!)
// console.log(nonnaPepera === joseCarioca);

// ---------------------------------------------------------------

// corto circuito degli operatori

// let biancaNeve = 'spaghetti';

// let ariel = 'ciao';

// console.log(biancaNeve || ariel);

// // devo passare un parametro
// // va a controllare il primo che trova vuoto e allora prende il secondo


// let biancaNevy; // in questo caso è vuoto
// let ariely = 'ciao';
// console.log(biancaNevy || ariely);
// // se il primo è vero non gli serve guardare il secondo, altrimenti prende il secondo


// let cenerentola = biancaNeve || ariel; 
// // controlla il primo se ha contenuto, altrimenti controlla il secondo
// console.log(cenerentola);


// let biancaNevyy; // in questo caso è vuoto
// let arielyy; // in questo caso è vuoto
// console.log(cenerentoly);

// ALERT e PROMPT

// alert('ciao a tutti!');

// const elsa = prompt('come ti chiami?');

// console.log(elsa);



// ---------------------------------
// IF ELSE CONTROL FLOW

// const mulan = 40;

// if (mulan < 50){
//     console.log('numero piccolo');
// }

// console.log('fine del programma')


// ---------------------------------

// const mario = 80;

// if (mario < 50){
//     console.log('numero grande');
// }
// console.log('fine programma')

// ---------------------------------


// const milan = prompt('dimmi un numero');

//     if ( milan < 50){
//         console.log('numero piccolo')
//     } else {
//         console.log('numero grande')
//     }

// console.log('fine del programma')


// ------------------------------------

// const milano = prompt('dimmi un numero');

//     if ( (milano % 2) === 0){
//         alert('hai inserito un numero pari')
//     } else {
//         alert('hai inserito un numero dispari')
//     }

// console.log('fine del programma')

// ---------------------------------------

// gioco: FITZ BUZZ divisibile per 3 o per 5

const jasmine = prompt('dimmi un numero');

const isJasmineDivisibleBy3 = jasmine % 3 === 0;
const isJasmineDivisibleBy5 = jasmine % 5 === 0;
// faccio un controllo - check


    //  if (condition)

    // if (isJasmineDivisibleBy3 && isJasmineDivisibleBy5) {
    //     alert('FIZZBUZZ');
    // } else if (isJasmineDivisibleBy3){
    //     alert('FIZZ');
    // } else if (isJasmineDivisibleBy5){
    //     alert('BUZZ');
    // } else {
    //     alert(jasmine);
    // }



//// SWITCH control flow ----------------------------------------

const rapunzel = prompt ('inserisci FIZZ, BUZZ o FIZZBUZZ')

// switch (key) {
//     case value:

//         break;
    
//     default:

//         break;
// }



switch (rapunzel) {
        case 'FIZZ':
    alert('vuoi un numero divisibile per tre');
            break;
        case 'BUZZ':
    alert('vuoi un numero divisibile per cinque');
            break;
        case 'FIZZBUZ':
    alert('vuoi un numero divisibile per tre e per cinque');
            break;
        default:
    alert('hai sbagliato a scrivere la parola');
            break;
} 


// WHILE AND LOOP ESCLUSO
// eloquentjavascript.net/01_values.html

// https://www.codewars.com/