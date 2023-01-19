let one = document.getElementById("oneDollar");
let two = document.getElementById("two");
let five = document.getElementById("five");
let ten = document.getElementById("ten");
let twenty = document.getElementById("twenty");
let fifty = document.getElementById("fifty");
let oneHundred = document.getElementById("oneHundred");
let twoHundred = document.getElementById("twoHundred");
let fiveHundred = document.getElementById("fiveHundred");
let clear = document.getElementById("clear");

let int = document.getElementById("output");
let integer = 0;

one.addEventListener('click', function(){
    integer+=1;
    int.innerHTML = "$" + integer;
})

two.addEventListener('click', function(){
    integer+=2;
    int.innerHTML = "$" + integer;
})

five.addEventListener('click', function(){
    integer+=5;
    int.innerHTML = "$" + integer;
})

ten.addEventListener('click', function(){
    integer+=10;
    int.innerHTML = "$" + integer;
})

twenty.addEventListener('click', function(){
    integer+=20;
    int.innerHTML = "$" + integer;
})

fifty.addEventListener('click', function(){
    integer+=50;
    int.innerHTML = "$" + integer;
})

oneHundred.addEventListener('click', function(){
    integer+=100;
    int.innerHTML = "$" + integer;
})

twoHundred.addEventListener('click', function(){
    integer+=200;
    int.innerHTML = "$" + integer;
})

fiveHundred.addEventListener('click', function(){
    integer+=500;
    int.innerHTML = "$" + integer;
})

clear.addEventListener('click', function(){
    integer = 0;
    int.innerHTML = "$" + integer;
})