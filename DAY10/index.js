const cards =document.querySelectorAll('.cards');

let OneflippedCard = false;
let lock = false;
let firstCard, secondCard;
var moves = 0


function flipCard(){
    
    if(lock) return;
    if(this === firstCard) return;
    
    this.classList.add('flipped');
    if(!OneflippedCard){
        OneflippedCard=true;
        firstCard=this;
        return;
    }
    secondCard = this;
    lock = true;
    
    match();
}

function match(){
    moves+=1;
    document.getElementById('jsmoves').innerText = moves
    firstCard.dataset.name === secondCard.dataset.name ? disableCards()  : unflipCards();
}

function  disableCards(){
    
    firstCard.removeEventListener('click',flipCard);
    secondCard.removeEventListener('click',flipCard);
    reset();
}

function unflipCards(){
    setTimeout(()=> {
        firstCard.classList.remove('flipped');
        secondCard.classList.remove('flipped');
        reset();
    },1500)

}

function reset(){
    OneflippedCard= false;
    lock=false;
    firstCard=null;
    secondCard= null;
}
cards.forEach(card => card.addEventListener('click',flipCard));