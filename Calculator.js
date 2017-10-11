var result = '0';
var action = '';


window.onload = function() {
    //kai naršyklės langas užsikrauna arba persikrauna
    //atliekamas veiksmas
    //alert('Valio'); dialogo langas
    document.getElementById("result").innerHTML = result;
};
 function clearr(){
     result = '0';
     action = result;
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
     if (action == '0' || action == 0) {
         action = number;
         document.getElementById("result").innerHTML = action;
     } else {
         action = action + '' + number;
         document.getElementById("result").innerHTML = action;
     }
 }


/**
 * Created by Indrė on 2017-10-11.
 */
