console.log ('oggetti.');

const studente = {nome: 'Damiano', anno: 1993, sposato: false}                              //le parentesi graffe inizializzano un oggetto. Gli array ragionano in ordine, gli oggetti per etichette (vediamo come)

//nome: è quella che chiamiamo etichetta, anno è un'altra etichetta. Idem sposato. Possono essere sia stringhe, sia numeri, sia booleani
//l'ordine non è importante, ma è importante che ognuno dei lavori sia correlato a un'etichetta

console.log(studente);

//come leggo solo uno dei valori?

console.log(studente.nome);

//o scrivendo questo...

//sennò come segue

console.log(studente['anno']);

//come si aggiunge un'etichetta a un elemento? Visto che l'ordine non conta come nell'array, non importano differenze come push vs unshift

studente.indirizzo = 'Taggia';

//mi printerà studente con la proprietà nuova, cioè indirizzo

console.log(studente.conto); //se provo a printare questa cosa, che non è un'etichetta in mio possesso, ottengo solo undefined

//per conoscere tutte le etichette di un oggetto:

console.log(Object.keys(studente));  //mi printa un ARRAY con tutte le etichette dell'oggetto che gli ho chiesto. L'etichetta si chiama key

console.log(Object.values(studente));

for (const key in studente) {                    //fa un ciclo nel mio array (la key di string)
    
    const value = studente[key];                
    console.log(value);
}

//questo for cicla in tutte le key di studente e me le printa con il loro value
//"in" è la parola chiave che mi dice che sto ciclando un oggetto

const studente2 = {                                    //un oggetto può contenere anche cose come array o magari altri oggetti
    name: 'Manuela',
    yob: 1988,
    isMarried: false,
    address: 'Genova',
    marks: [8, 9, 7, 8, 10],
    dog: {
        name: 'Nala',
        breed: 'lupo cecoslovacco',
        yob: 2017               
    }

}

console.log(studente2);

function calculateAge(student) {

    const actualYear = new Date().getFullYear();

    const age = actualYear - student.yob                    //per interrogare la proprietà si usa appunto oggeto.proprietà
    
    return age;
}


const studente3 = { name: 'Cesare',
yob: 2003,
isMarried: false,
address: 'Genova',
marks: [9, 9, 7, 8, 6],
dog: {
    name: 'Luna',
    breed: 'bull terrier',
    yob: 2016    
}

}

console.log(calculateAge(studente3));


const studente4 = { name: 'Stefano',
yob: 1998,
isMarried: false,
address: 'Genova',
marks: [9, 10, 6, 8, 6],
dog: null                       //non ha un cane, quindi indichiamo che è un campo vuoto con null
}

console.log(calculateAge(studente4));

function calculateDogAge(student){

    if (student.dog) {                                       //se metto solo questo nell'if, implica una condizione di esistenza. Se student.dog esiste (quindi per tutti tranne Stefano non si applica)
    const actualYear = new Date().getFullYear();

    const dogAge = (actualYear - student.dog.yob) * 7;

    return dogAge;
    } else {
        return -1;                                           //-1 è un valore che un'età non può avere, per cui piuttosto che far rompere tutto, mi faccio uscire un valore impossibile che segnala un errore
    }
}

console.log(calculateDogAge(studente2));

console.log(calculateDogAge(studente3));

console.log(calculateDogAge(studente4));

//visto che studente4 non ha proprio l'oggetto perché è null, si rompe e non mi

function calculateMean(student) {
    let sum = 0;

    for (const mark of student.marks) {
        sum += mark;                            //sum += mark è come dire sum = sum + mark
    }

    const mean = sum/student.marks.length;              //length è una di quelle parole che è meglio non usare per questo scopo

    return mean;


}

console.log(calculateMean(studente2));

console.log(calculateMean(studente4));

console.log(calculateMean(studente3));