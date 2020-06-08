function searchForLastPosting(){
    Microsoft.Dynamics.NAV.InvokeExtensibilityMethod('ButtonCalculation', '');
}
function getLastSalesPost(DataFeed){
    var contentdiv = document.getElementById('contentdiv1');
    var lastDocText = document.createElement('h2');
    lastDocText.id = 'DocumentNo';
    lastDocText.innerText = 'The last sales document:' + DataFeed['DocumentNo'];
    contentdiv.appendChild(lastDocText);

    var lastDocText = document.createElement('p');
    lastDocText.id = 'CustomerName';
    lastDocText.innerText = 'Customer name:' + DataFeed['CustomerName'];
    contentdiv.appendChild(lastDocText);
    
    var lastDocText = document.createElement('p');
    lastDocText.id = 'DocumentAmount';
    lastDocText.innerText = 'Document amount:' + DataFeed['Amount'];
    contentdiv.appendChild(lastDocText);
    //outputArray = [{'Response': 'text is appended'}];
    Microsoft.Dynamics.NAV.InvokeExtensibilityMethod('FoundLastPost', outputArray);
}

function clickTest(){
    console.log('click successed');
    var contentdiv = document.getElementById('contentdiv1');
    var newbutton = document.createElement('button');
    newbutton.id = 'newButton';
    newbutton.innerText = 'newButton';
    contentdiv.appendChild(newbutton);
}