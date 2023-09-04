console.log('wewe');

/* 

Consegna 1
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.


Consegna 2
Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: **nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

BONUS:
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
difficoltà 1 ⇒ 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
difficoltà 2 ⇒ 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
difficoltà 3 ⇒ 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
*/


const fieldEl = document.querySelector('.container_field');
const bottone = document.querySelector('.btn')
const result = document.getElementById('risultato')

const bombe = 16 
let listaBombe = []
let limit 
let points = 0; 
let gameOver = false
console.log(gameOver);




/**
 * 
 * 
 * quello che questa funzione fa e creare una griglia e adattarla in base alla difficolta scelta e quando una casella viene cliccata si colora se blu t'appost e +1 ai punti se rossa sei scoppiato e ti compare un'allerta di sconfitta + punteggio se il giocatore riesce a non toccare nessuna bomba allora comparira un allerta con scritto 'hai vinto' e in entrambi i casi ricarichera la pagina
 * 
 * 
 * @param {number} limit 
 * @param {listanumeri} listaBombe 
 */
function griglia(limit, listaBombe) {
    
    for (let i = 0; i < limit; i++) {
        const casellaEL = document.createElement('div')
        casellaEL.classList.add('box')
        casellaEL.append(i + 1)
        fieldEl.append(casellaEL)
        casellaEL.style.width = `calc(100% / ${Math.sqrt(limit)})`

        
            casellaEL.addEventListener('click', function (){


                if(listaBombe.includes(i + 1)){
                    casellaEL.classList.add('bg_lose')
                    console.log(`la casella ${i + 1} e una bomba hai perso`);
                    gameOver = true 

                    if(gameOver = true){
                        result.append(`hai perso il tuo punteggio e ${points}`)

                    }

                }else{
                    casellaEL.classList.add('bg_active') 
                    console.log(`e stata attivata la casella ${i + 1}`);
                    points++

                    if (points == (limit  - listaBombe.length)){
                        gameOver = true
                        
                        if (gameOver =true) {
                            result.append(`hai vinto hai raggiunto il massimo dei punti`)   
                            
                        }
                    }
                }

            })
    } 
    
}

function bombGenerator(bombe, limit) {
    let i = 0
    while (i < bombe) {
        randomN = Math.ceil(Math.random() * limit);
        if (!listaBombe.includes(randomN)) {
            listaBombe.push(randomN);
            i++;
        }
    }

    return listaBombe;
}



bottone.addEventListener('click', function(){
    const difficulty = document.getElementById('difficulty').value
    
    fieldEl.innerHTML = ''
    result.innerHTML = ''
    points = 0
    gameOver = false
    listaBombe = []


    limit = difficulty
    listaBombe = bombGenerator(bombe, limit);
    
    console.log(listaBombe);
    griglia(limit,listaBombe)
})




