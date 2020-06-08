let blackjackGame = {
    'you':{'scoreSpan': '#your-blackjack-result','div': '#your-box', 'score': 0},
    'dealer':{'scoreSpan': '#dealer-blackjack-result', 'div': '#dealer-box', 'score': 0},
    'cards':['2','3','4','5','6','7','8','9','10','K','J','Q','A'],
    'cardsMap':{'2':2, '3':3, '4':4, '5':5, '6':6, '7':7, '8':8, '9':9, '10':10, 'K':10, 'J':10, 'Q':10, 'A':[1,11]}
};
const YOU = blackjackGame['you'];
const DEALER = blackjackGame['dealer'];


document.querySelector('#hit').addEventListener('click', blackjackHit);
document.querySelector('#deal').addEventListener('click', blackjackDeal);
document.querySelector('#stand').addEventListener('click', blackjackStand);
function blackjackHit(){
    if (DEALER['score'] > 0)
        return;
    showCard(YOU);    
     //showCard(DEALER);
}
function blackjackStand(){
    if ((YOU['score'] == 0) | (DEALER['score'] > 0))
        return;    
    stop = false;
    while (!stop){
        showCard(DEALER);
        if (DEALER['score']>15)
            stop = true;
    }
    showResult();      
}

function showResult(){
    currentState = 0;
    if ((YOU['score'] <= 21) && ((YOU['score'] > DEALER['score']) || (DEALER['score'] > 21))) {
        document.querySelector('#blackjack-result').textContent = 'You won';
        document.querySelector('#blackjack-result').style.color = 'green';
        currentState = parseInt(document.querySelector('#wins').textContent);
        currentState += 1;
        document.querySelector('#wins').textContent = currentState;

    }else if ((YOU['score'] == DEALER['score'])||((YOU['score']>21)&&(DEALER['score']>21))) {
        document.querySelector('#blackjack-result').textContent = 'Draw';
        document.querySelector('#blackjack-result').style.color = 'yellow';
        currentState = parseInt(document.querySelector('#draws').textContent);
        currentState += 1;
        document.querySelector('#draws').textContent = currentState;
    }else {
        document.querySelector('#blackjack-result').textContent = 'You lost';
        document.querySelector('#blackjack-result').style.color = 'red'; 
        currentState = parseInt(document.querySelector('#losses').textContent);
        currentState += 1;
        document.querySelector('#losses').textContent = currentState;       
    }
}

function showCard(activePlayer) {
    if (activePlayer['score'] > 21)
        return;
    let cardImage = document.createElement('img');
    currentCard = blackjackGame['cards'][Math.floor(Math.random() * 13)];
    cardImage.src = currentCard + '.jpg';
    updateScore(activePlayer,currentCard);
    document.querySelector(activePlayer['div']).appendChild(cardImage);
}

function blackjackDeal(){
    resetPlayer(YOU);
    resetPlayer(DEALER);   
}
function resetPlayer(player){
    let playerImages = document.querySelector(player['div']).querySelectorAll('img');
    for (i = 0;i<playerImages.length;i++){
        playerImages[i].remove();
    }
    player['score'] = 0;
    updateScore(player,'NAN');
    document.querySelector('#blackjack-result').textContent = "Let's play";
    document.querySelector('#blackjack-result').style.color = 'white';      
}

function updateScore(activePlayer,currentCard){
    if (currentCard != 'NAN'){
        if (currentCard != 'A')
            activePlayer['score'] += blackjackGame['cardsMap'][currentCard];
        else if ((activePlayer['score'] + blackjackGame['cardsMap'][currentCard][1])<=21)
            activePlayer['score'] += blackjackGame['cardsMap'][currentCard][1];
        else
            activePlayer['score'] += blackjackGame['cardsMap'][currentCard][0];
    }

    if (activePlayer['score'] <= 21){
        document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];
        document.querySelector(activePlayer['scoreSpan']).style.color = 'white'
    } else{
        document.querySelector(activePlayer['scoreSpan']).textContent = 'BUSTED';
        document.querySelector(activePlayer['scoreSpan']).style.color = 'red';
    }
}