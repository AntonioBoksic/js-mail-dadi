// EMAIL

// chiedere all utente la sua mail
// controlla che sia nella lista di chi può accedere
// stampa messaggio esito controllo

// DADI

// generare numero random da 1 a 6 per giocatore
let numeroGiocatore = Math.floor(Math.random() * 6) +1;
console.log(numeroGiocatore);
// generare numero random da 1 a 6 per computer
let numeroComputer = Math.floor(Math.random() * 6) +1;
console.log(numeroComputer);
// stabilire vincitore

if (numeroGiocatore > numeroComputer)
{
    winnerText = "ha vinto il giocatore"
}

    else if (numeroComputer > numeroGiocatore) {
        winnerText = "ha vinto il computer"
    }

    else {winnerText = "è un pareggio"}

    console.log(winnerText);