function ageInDays(){
    var birthYear = prompt('What year were you born?');
    var noOfDays = (2020 - birthYear) *365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are ' + noOfDays + ' days old.');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
    log(new Date())
}

function reset(){
    document.getElementById('ageInDays').remove();
}