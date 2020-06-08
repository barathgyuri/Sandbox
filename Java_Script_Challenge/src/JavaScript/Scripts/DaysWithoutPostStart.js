Microsoft.Dynamics.NAV.InvokeExtensibilityMethod('Ready', '');

var CtrlParentBox = document.getElementById('controlAddIn');
var mainDiv = document.createElement('div');
mainDiv.id = 'mainDiv';
mainDiv.className = 'mainDiv';
mainDiv.innerHTML = '<h2>Days since last posting</h2>'+
                    '<div class="content-div" id="contentdiv1"></div>'+
                    '<div class="button-div" id="buttondiv1">'+
                    '<button id=calculateBtn1>Calculate</button>'+
                    '</div>';
CtrlParentBox.appendChild(mainDiv);

document.querySelector('#calculateBtn1').addEventListener('click', searchForLastPosting);