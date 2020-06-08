var all_buttons = document.getElementsByTagName('button');
var copyAllButtons = [];
for (let i=0; i<all_buttons.length; i++){
    copyAllButtons.push(all_buttons[i].classList[1]);
}

function buttonColorChange(optionSelecter){
    for(let i=0; i<all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        if (optionSelecter.value == 'red')            all_buttons[i].classList.add('btn-danger');
        else if (optionSelecter.value == 'green')     all_buttons[i].classList.add('btn-success');  
        else if (optionSelecter.value == 'yellow')    all_buttons[i].classList.add('btn-warning');
        else if (optionSelecter.value == 'blue')      all_buttons[i].classList.add('btn-primary'); 
        else if (optionSelecter.value == 'reset'){
            for(let i=0; i<copyAllButtons.length;i++){
                all_buttons[i].classList.add(copyAllButtons[i]);
            }
        } 
        else if (optionSelecter.value == 'random'){
            colorBuffer = ['btn-danger','btn-success','btn-warning','btn-primary'];
            all_buttons[i].classList.add(colorBuffer[Math.floor(Math.random() * 4)]); 
        }   
    }
}