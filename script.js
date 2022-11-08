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
var cels = parseFloat(prompt('Enter Celsius = '));
var fahrn = (cels * (9 / 5) + 32);
document.write("Temperature in Fahrenheit = " + fahrn.toFixed(2));
