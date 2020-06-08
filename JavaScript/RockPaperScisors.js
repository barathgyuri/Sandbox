function rpsGame(yourChoice){
    console.log('Your choice is:')
    console.log(yourChoice.id);
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = numberToChoice(randToRpsInt());
    results = decideWinner(humanChoice,botChoice); 
    console.log(results);
    message = finalMessage(results);
    console.log(message);
    rpsFrontEnd(humanChoice,botChoice,message);
}

function randToRpsInt(){
    return Math.floor(Math.random() * 3);
}
function numberToChoice(number){
    return ['rock','paper','scissors'][number];
}
function rpsFrontEnd(humanChoice,computerChoice,returnmessage){
    var imagesDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');
    humanDiv.innerHTML = "<img src='" + imagesDatabase[humanChoice] + "' height = 150 width = 150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>";
    messageDiv.innerHTML = "<h1 style='color: " + returnmessage['color'] + "; font=size: 60px; padding: 30px'>" + returnmessage['message'] + "</h1>";
    botDiv.innerHTML = "<img src='" + imagesDatabase[computerChoice] + "' height = 150 width = 150 style='box-shadow: 0px 10px 50px rgba(243, 30, 24, 1);' >";
    document.getElementById('flex-box-div').appendChild(humanDiv);
    document.getElementById('flex-box-div').appendChild(messageDiv);
    document.getElementById('flex-box-div').appendChild(botDiv);
}
function decideWinner(humanChoice,computerChoice){
    var rpsDatabase={
        'rock':{'scissors': 1, 'rock':0.5, 'paper': 0},
        'paper':{'rock':1, 'paper':0.5, 'scissors':0},
        'scissors':{'paper':1, 'scissors':0.5, 'rock':0}
    }
    var yourScore = rpsDatabase[humanChoice][computerChoice]
    var computerScore = rpsDatabase[computerChoice][humanChoice]
    return [yourScore, computerScore]
}
function finalMessage([yourScore,computerScore]){
    if (yourScore == 0) {
        return {'message': 'You lost', 'color':'red'}
    }
    else if (yourScore == 0.5){
        return {'message': 'You tied', 'color':'yellow'}
    }
    return {'message': 'You won', 'color':'green'}
}

