

// DOM 
// creo variabile container
container = document.getElementById("container");

// creo un input nel documento 
// questo serve solo a definirlo?
inputEmail = document.createElement("input");
// inserisco l input nel container
container.append(inputEmail);


// questo serve solo a definirlo?
buttonEmail = document.createElement("button");
// inserisco l input nel container
container.append(buttonEmail);

// salva input quando clicchi il bottone
buttonEmail.addEventlListener("click",
    function () {

        userEmail = document.querySelector("input").value;
        console.log(userEmail);
    }

    )



// EMAIL


// chiedere all utente la sua mail
// let userEmail = prompt(",inserisci la tua mail");
// console.log(userEmail)
// inventati una lista di chi può accedere
const whoCanAccess = ["simone@gmail.com", "massimo@gmail.com", "tony@gmail.com"];
console.log(whoCanAccess);
// controlla che sia nella lista di chi può accedere
for (i=0 ; i<whoCanAccess.length ; i++) {

    if (userEmail == whoCanAccess[i]) {
        accessText = "Accesso effettuato"
    } else {
        accessText = "Accesso negato"
    }
    
};
console.log(accessText)
// stampa messaggio esito controllo



// DADI

// generare numero random da 1 a 6 per giocatore
let numeroGiocatore = Math.floor(Math.random() * 6) +1;
console.log(numeroGiocatore);
// generare numero random da 1 a 6 per computer
let numeroComputer = Math.floor(Math.random() * 6) +1;
console.log(numeroComputer);

// stabilire vincitore e restituire messaggio con esito

if (numeroGiocatore > numeroComputer)
{
    winnerText = "ha vinto il giocatore"
}

    else if (numeroComputer > numeroGiocatore) {
        winnerText = "ha vinto il computer"
    }

    else {winnerText = "è un pareggio"}

    console.log(winnerText);