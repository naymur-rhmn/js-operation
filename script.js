/*
var num1 = prompt('Enter first Number : ');
var num2 = prompt('Enter Second Number : ');

num1 = parseInt(num1, 10);
num2 = parseInt(num2, 10);

var result;

result = num1 + num2;
document.write(num1 + " + " + num2 + " = " + result + '<br/>');

result = num1 - num2;
document.write(num1 + " - " + num2 + " = " + result + '<br/>');

result = num1 * num2;
document.write(num1 + " * " + num2 + " = " + result + '<br/>');

result = num1 / num2;
document.write(num1 + " / " + num2 + " = " + result + '<br/>');

result = num1 % num2;
document.write(num1 + " % " + num2 + " = " + result);

*/

// fahrenheit to celsius
/*
var fahren = parseFloat(prompt('Enter Fahrenheit = '));
var cels = (fahren - 32) * (5 / 9);
document.write("Temperatue in Celsius = " + cels.toPrecision(4));
*/

// Celsius to fahrenheit
/*
var cels = parseFloat(prompt('Enter Celsius = '));
var fahrn = (cels * (9 / 5) + 32);
document.write("Temperature in Fahrenheit = " + fahrn.toFixed(2));
*/

// grade calculator
/*
var result = parseFloat(prompt('Enter your marks : ', '1-100'));

if (result > 100 || result < 0) {
  document.write('Invalid marks')
}
else if (result >= 80 && result <= 100) {
  document.write("Your Grade is 'A+'");
}
else if (result >= 70 && result < 80) {
  document.write("Your Grade is 'A'")
}
else if (result >= 60 && result < 70) {
  document.write("Your Grade is 'A-'")
}
else if (result >= 50 && result < 60) {
  document.write("Your Grade is 'B'")
}
else if (result >= 40 && result < 50) {
  document.write("Your Grade is 'C'")
}
else if (result >= 33 && result < 40) {
  document.write("Your Grade is 'D'")
}
else {
  document.write('You are Fail')
}
*/

// vowel & consonant detecting
/*
var letter = prompt("Enter a letter : ");
letter = letter.toLowerCase();

if (letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u') {
  document.write(letter.toUpperCase()() + " is a Vowel")
}
else {
  document.write("'" + letter.toUpperCase()() + "'" + " is a Consonant")
}
*/

// Task 5- input a letter and check it is vowel or consonant using switch
/*
var letter = prompt('Enter a letter : ').toLowerCase();
console.log(letter);
switch (letter) {
  case 'a':
  case 'e':
  case 'i':
  case 'o':
  case 'u':
    document.write(letter.toUpperCase() + ' is a Vowel');
    break;
  default:
    document.write(letter.toUpperCase() + ' is a Consonant');
}
*/

// Task 6 - write a program  that will print sum of all the numbers  that are divisible by 3 and 5 from 1-100
/*
var i = 1;
var sum = 0;

while (i <= 100) {
  if (i % 3 == 0 && i % 5 == 0) {
    sum = sum + i;
  }
  i++;
}
document.write(sum + ' ');
*/

// do while loop
/*
var i = 0;
do {
  document.write('do loop =' + i + '<br/>')
  i++;
} while (i <= 10)
*/

// break & continue
/*
var evenNum;

for (var i = 1; i <= 50; i++) {
  if (i % 2 != 0) {
    continue;
  }
  evenNum = i;
  document.write('Even Number : ' + evenNum + '<br/>');
}
*/

// ternary operator
/*
var number = Number(prompt('Enter a number : '));
// var result = number < 0 ? 'Negative' : 'Positive';
var result = number > 0 ? 'Positive' : number < 0 ? 'Negative' : 'Zero';

document.write(result);
*/

// traditional function
/*
var number = Number(prompt('Enter any number to square : '))

function square(param) {
  var result = param * param;
  return result;
}

var x = square(number);
document.write(x);
*/

// IIFEs (Immediately Invokeable Function Expression)
// IIFE is Immediately Invokeable Function
/*
(function adition(num1, num2) {
  var result = num1 + num2;
  document.write(result);
})(5, 6);
*/

// function expression
// function ke variable e store korle take function expression bole
/*
var display = function displaymsg(msg) {
  document.write(msg);
}
// display();
display('Hello world');
*/


// array
// array er index 0 theke suru hoy
/*
// Example 1
// var names = new Array(5);
var names = new Array(5);
names[0] = "Tamim";
names[1] = "Rasel";
names[2] = "Tarek";
names[3] = "Rohim";
names[4] = "Sohel";
*/
// example 2
var names = ['Tamim', 'Rasel', 'Tarek', 'Rohim', 'Sohel'];
// add element in array end
console.log(names.length);
names.push('Sojib');
console.log(names.length);
// remove element from end
names.pop();
console.log(names);
