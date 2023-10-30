//Esercitarsi con i valori truthy e falsy

 // Utilizzando i seguenti operandi (false, 23, NaN, ‘Ciao’, null) scegliere i giusti operatori di confronto e logici per fare in modo che il risultato sia true.

    //true e false sono booleani   

    // QUALI SONO I VALORI TRUTHY
    // - numeri diversi da 0 e NaN
    // - stringhe non vuote ('ciao')
    // - true
    // - oggetti

// || -> l'or mi restituisce il primo operando TRUTHY che trova, se non trova nessun operando TRUTHY, mi restituisce l'ultimo operando FALSY che trova.

    // QUALI SONO I VALORI FALSY
    // - il numero 0
    // - il NaN
    // - stringhe vuote
    // - false
    // - undefined
    // - null

    console.log( true && false); //false      
    console.log( true && 23);  //true
    console.log( true && NaN); //true
    console.log( true && 'Ciao'); //true
    console.log( true && null); //true

    console.log( true || false); //true     
    console.log( true || 23);  //true
    console.log( true || NaN); //true
    console.log( true || 'Ciao'); //true
    console.log( true || null); //true


//ESERCIZIO 1
//Scrivi un programma che dati sette valori relativi alle temperature della settimana
//   stabilisca la giornata più calda e quella più fredda.
//   Esempio:
//    Input: a = 10, b = -2, c = 31, d = 22, e = 15, f = -6, g = 7
//    “La temperatura piu’ calda e’ 31  quella piu’ fredda -6”       // 
//coff coff Math.max()  E  Math.min()


let a = 10; 
let b = -2; 
let c = 31; 
let d = 22; 
let e = 15; 
let f = -6; 
let g = 7;

Math.max(a,b,c,d,e,f,g);
console.log(
    Math.max(a,b,c,d,e,f,g)
)


Math.min(a,b,c,d,e,f,g);
console.log (
    Math.min(a,b,c,d,e,f,g)
)


console.log('La temperatura piu calda e', Math.max(a,b,c,d,e,f,g), "quella piu fredda", 
Math.min(a,b,c,d,e,f,g));


//ESERCIZIO2
//Scrivere un programma che converta un voto numerico (v) in un giudizio seguendo questi parametri:
//se v e’ minore di 18,  stampare in console  “insufficiente”
//se v e’ maggiore uguale a 18 e minore di 21,  stampare in console “sufficiente”
//se v e’ maggiore uguale a 21 e minore di 24,  stampare in console: “buono”
//se v e’ maggiore uguale a 24 e minore di 27, stampare in console: “distinto”
//se v e’ maggiore uguale a 27 e minore uguale 29, stampare in console: “ottimo”
//se v e’ uguale a 30, stampare in console:  “eccellente”
 // Esempio:
  //let v = 29;
 // Output: Ottimo
//Cercate di risolvere questo esercizio utilizzando prima if, else e poi con switch, case.


let voto = 29;

if(voto < 18 && voto >= 0)

{
    console.log('Insufficiente');
} else if(voto < 21)

{
   console.log('Sufficiente');
 } else if(voto < 24)
 {

    console.log('Buono');
 }
    else if(voto < 27)
    {
        console.log('Distinto');
}

else if(voto <= 29)

    {
        console.log('Distinto');
    }

else if (voto === 30)
{
   console.log('Eccellente')
}


let voto2=29;

switch (true) {
    case (voto2 < 18): 
        console.log("Insufficiente");
    break;
  
    case (voto2 < 21): 
        console.log("Sufficiente");
    break;

    case (voto2 < 24): 
        console.log("Buono");
    break;

    case (voto2 < 27): 
    console.log("Distinto");
    break;

    case (voto2 <= 29): 
    console.log("Ottimo");
    break;

    case (voto2 < 30): 
    console.log("Eccellente");
    break;
}


//ESERCIZIO3
//Scrivi un programma che dato un numero, let num = 2, stampi la rispettiva tabellina corrispondente.


let num = 2;

console.log(`Tabellina del ${num}:`);
for (let i = 1; i <= 10; i++) {
    let risultato = num * i;
    console.log(`${num} x ${i} = ${risultato}`)
    };


//ESERCIZIO 4
// Scrivi un programma che, dato il numero dei tiri da effettuare per ciascun giocatore (N),
//simuli un gioco di dadi tra due utenti, stampando il giocatore che ha totalizzato più punti,
//supponendo che ogni dado abbia al massimo 6 facce, ogni giocatore tirerà il dado N volte, ciò  significa che verrà generato un numero casuale ad ogni tiro che sarà sommato ai precedenti per calcolare il punteggio del giocatore.
   
//Suggerimento:
// Usiamo questa formula per generare un numero random
// Math.floor(Math.random() * (max - min + 1) + min);


let tiriPerGiocatore= 5;
let scoreG1= 0;
let scoreG2= 0;

for (let i = 1; i <= tiriPerGiocatore; i++) {
   let tiroG1= Math.floor(Math.random() * (6 - 1 + 1) + 1);
   let tiroG2= Math.floor(Math.random() * (6 - 1 + 1) + 1);
   scoreG1 += tiroG1
   scoreG2 += tiroG2
}

console.log("Il punteggio del Giocatore 1 e "+ scoreG1);
console.log("Il punteggio del Giocatore 2 e "+ scoreG2);

if (scoreG1>scoreG2) {
    console.log("G1 Vince");
    
} else if (scoreG1<scoreG2) {
    console.log("G2 Vince");  
} else {console.log("Pareggio");

}

//ESERCIZIO5
//farlo con lo switch
//Scrivi un programma che dato un numero intero compreso tra 1 a 7
// visualizzi il corrispondente giorno della settimana. Sapendo che:
//   1 = lunedì
//   2 = martedì
//   3 = mercoledì
//   ...
//   7 = domenica
// Esempi:
//   Input: numero = 6
//   Output: "Sabato"
//   Input: numero = 10
//   Output: “Errore! Giorno della settimana non valido!"

let giornoDellaSettimana= Math.floor(Math.random() * (8 - 1 + 1) + 1)

switch (giornoDellaSettimana) {
    case (1): 
        console.log("lunedì");
    break;
  
    case (2): 
        console.log("Martedì");
    break;

    case (3): 
        console.log("Mercoledì");
    break;

    case (4): 
    console.log("Giovedì");
    break;

    case (5): 
    console.log("Venerdì");
    break;

    case (6): 
    console.log("Sabato");
    break;
    
    case (7): 
        console.log("Domenica")
        break;

   
    default: console.log("Giorno della settimana non esistente");
        break;
}
   
//Scrivere un programma che simuli un distributore di bevande:
//fare in modo che l’utente possa inserire il numero corrispondente alla bevanda, mediante l’istruzione prompt:
//se inserisce 1, seleziona acqua e quindi stampare in console: “E’ stata selezionata l’acqua”
//se inserisce 2, seleziona coca cola e quindi stampare in console: “E’ stata selezionata coca cola”
//se inserisce 3, seleziona birra e quindi stampare in console: “E’ stata selezionata birra”
//se inserisce qualcosa di diverso, il programma dovra’ riproporre la domanda di partenza


while (true) {
    let scelta = prompt("Inserisci il numero corrispondente alla bevanda (1 per acqua, 2 per coca cola, 3 per birra):");

    switch (scelta) {
      case "1":
        console.log("È stata selezionata l'acqua");
        break;
      case "2":
        console.log("È stata selezionata coca cola");
        break;
      case "3":
        console.log("È stata selezionata birra");
        break;
      default:
        console.log("Scelta non valida. Riprova.");
        continue; // Riprende il ciclo while per una nuova scelta
    }

    break;
  }