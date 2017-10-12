var result = lastResult = action = number = '0';
var operation = '';



window.onload = function() {
    //kai naršyklės langas užsikrauna arba persikrauna
    //atliekamas veiksmas
    //alert('Valio'); dialogo langas
    document.getElementById("result").innerHTML = result;
};
 function clearr(){
     result = lastResult = action ='0';
     dots = 0;
     document.getElementById("result").innerHTML = result;
 }

 /*function zero(){
     var zero = 0;
     //action += zero; //action = action = +zero;
     notZero(zero);
 }

 function one(){
     var one = 1;
     notZero(one);
 }

 function two(){
     var two = 2;
     notZero(two);
 }

 function three(){
     var three = 3;
     notZero(three);
 }

 function four(){
     var four = 4;
     notZero(four);
 }

function five(){
     var five = 5;
    notZero(five);
 }

function six(){
     var six = 6;
    notZero(six);
 }

function seven(){
     var seven = 7;
    notZero(seven);
 }

function eight(){
     var eight = 8;
    notZero(eight);
 }

function nine(){
     var nine = 9;
    notZero(nine);
 }*/
 function numberInput(number) {

     if(digitLimit()) {
        return false;
     }

     if (action == '' || action == 0) {
         action = number;
         document.getElementById("result").innerHTML = action;
     } else {
         action = action + '' + number;
         document.getElementById("result").innerHTML = action;
     }
 }


function digitLimit(){
    if(action.length > 8){
        alert('Pasiektas maksimalus ivesties limitas');
        return true;
    }
    return false;
}

 function plusNumbers(){
    result = action;
    action = '';
    dots = 0;
    operation = 'plus';
    document.getElementById("result").innerHTML = '+';
 }

function minusNumbers(){
    result = action;
    action = '';
    dots = 0;
    operation = 'minus';
    document.getElementById('result').innerHtml = '-';
}

function timesNumbers(){
    result = action;
    action = '';
    dots = 0;
    operation = 'times';
    document.getElementById('result').innerHtml = '*';
}

function divideNumbers(){
    result = action;
    action = '';
    dots = 0;
    operation = 'divide';
    document.getElementById('result').innerHtml = '/';
}

function backSpace(){
    var numberLength = action.length - 1;
    if (numberLength > -1){
        action = action.substring(0, numberLength);
    }
    if(action == ''){
        action = 0;
    }
    document.getElementById('result').innerHTML = action;
}

var dots = 0;

function addDot(){
    if(dots == 0){
        action=action + ".";
        document.getElementById('result').innerHTML = action;
    }
    dots += 1;
}



 function showResult() {

    lastResult = parseFloat(lastResult);

    if(lastResult != ''){
        result = lastResult;
    }
     if(operation == 'plus'){
      lastResult = parseFloat(result) + parseFloat(action);
     }
     else if (operation == 'minus') {
         lastResult = parseFloat(result) - parseFloat(action); //+ parseFloat(action); //parseFloat tekstini formata pakeicia i realiuosius skaicius.
     }
     else if(operation == 'times'){
         lastResult = parseFloat(result) * parseFloat(action);
     }
     else if(operation == 'divide') {
         lastResult = parseFloat(result) / parseFloat(action);
     }
     else {
         lastResult = '0';
     }
     document.getElementById('result').innerHTML = lastResult;

     result = action = operation = ''; //Išvalome visus duomenis skaičiuotuve
 }


/**
 * Created by Indrė on 2017-10-11.
 */
