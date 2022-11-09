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
var i = 0;
do {
  document.write('do loop =' + (i = i + 3) + '<br/>')
  i++;
} while (i <= 10)

// break & continue