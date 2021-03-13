// Javascript intro asignment

// Creating variables with string values
var a = "Jenny";
var b = "James";
var c = "Mufasa";
var d = "Lorena";

// Creating variables with numbers as values.
var p = 10;
var q = 20;
var r = 30;
var s = 40;

// Concatenating strings
console.log('My name is ' +a+ '.');
console.log('At school ' +a+ ' and ' +b+ ' are good friends');
console.log('But ' +c+ ' and ' +d+ ' hate each other, they fight all the time.');

// Concatenating numbers.
console.log('my marks in two classes are ' + p + q );
console.log('My favorite num ' + r + s );

// Conditional statement for checking one's age
let myBirthYear = prompt("In which year were you born")

if(2021 - myBirthYear >= 18){
    alert('You are free to Enjoy')
}else{
    alert('Alcohol is not sold to persons under the age of 18')
};
