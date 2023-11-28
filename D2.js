/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num1
let num2

if (num1 > num2) {
  console.log("il numero più grande è il " + num1)
} else if (num1 < num2) {
  console.log("il numero più grande è il " + num2)
} else {
  console.log("I numeri sono uguali")
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let num 

if (num !== 5) {
  console.log("not equal")
} else {
  console.log(num + " is equal to 5")
}


/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num3

if (num3%5 === 0) {
  console.log(num3 + " è divisibile per 5")
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/


/* SCRIVI QUI LA TUA RISPOSTA */
let numero1
let numero2

if (numero1 === 8 || numero2 === 8 || numero1+numero2 === 8) {
  console.log("la condizione è verificata")
} else {
  console.log("la condizione non è verificata")
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// let totalShoppingCart = 60
// const deliveryCost = 10

// if (totalShoppingCart > 50) {
//   console.log("Il totale da addebitare è " + totalShoppingCart)
// } else {
//   let totalShippingCost = totalShoppingCart + deliveryCost
//   console.log("Il totale da addebitare è "+ totalShippingCost )
// }

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart = 23
const discountBlackFriday = 0.2
const deliveryCost = 10
 if (totalShoppingCart > 50) {
  let totalCost = totalShoppingCart - (totalShoppingCart*discountBlackFriday)
  console.log("Il costo totale è di " + totalCost )
 } else {
  let totalWithShipping = totalShoppingCart + deliveryCost
  let totalCost = totalWithShipping - (totalWithShipping * discountBlackFriday)
  console.log("Il costo totale è di " + totalCost)
 }

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x = 14
let y = 464
let z = 6894

if (x >= y && x >= z) {
  if ( y>= z) {
    console.log("l'ordine è " + x +" "+ y+" " + z)
  } else {
    console.log("l'ordine è " + x + " "+z+" " + y )
  }
} else if (y >= x && y>= z){
  if (x >= z) {
    console.log("l'ordine è " + y +" "+ x +" "+ z)
  } else {
    console.log("l'ordine è " + y + " "+z + " "+x)
  }
} else {
  if (x >= y) {
    console.log("l'ordine è " + z +" "+ x +" "+ y)
  } else {
    console.log("l'ordine è " + z + " "+y +" "+ x)
  }
}


/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let a = 3
if (typeof a === 'number') {
  console.log("il valore è un numero")
} else {
  console.log("il valore non è un numero")
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let value
if (value%2 === 0) {
  console.log("il numero fornito è pari")
} else {
  console.log("il numero fornito è dispari")
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let val = 10
  if (val < 5) {
      console.log("Meno di 5");
    } else if (val < 10) {
      console.log("Meno di 10");
    } else {
      console.log("Uguale a 10 o maggiore");
    }

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}
/* SCRIVI QUI LA TUA RISPOSTA */
me.city = "Toronto"
console.log(me)

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName
console.log(me)

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
me.skills.pop()
console.log(me)

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const example = []
example.push(1,2,3,4,5,6,7,8,9,10)
console.log(example)

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
example.splice(9, 1, 100)
console.log(example)
