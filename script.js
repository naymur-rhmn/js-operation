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
var names = new Array();
names[0] = "Tamim";
names[1] = "Rasel";
names[2] = "Tarek";
names[3] = "Rohim";
names[4] = "Sohel";
*/
/*
// example 2
var names = ['Tamim', 'Rasel', 'Tarek', 'Rohim', 'Sohel'];
// add element in array end
console.log(names.length);
names.push('Sojib');
console.log(names.length);
// remove element from end
names.pop();
console.log(names);
*/

// loop in array
/*
var num = [10, 12, 14, 16, 18, 20, 22, 24, 26, 28];
for (i = 0; i < num.length; i++) {
  var x = num[i];
  document.write(' ' + x);
  console.log(x);
}
*/


// array methods
/*
var names = ['Anis', 'Rohim', 'Korim', 'Badal', 'Rabbi'];

// push method array te last element add kore
names.push('Sojib');

// pop method array er last elemetn remove kore
names.pop();

// shift method (array er prothom theeke element remove kore)
names.shift();

// unshift method (array er prothom e element add kore)
names.unshift('Komola');

// splice method diye array te element remove and add kora jay
// add element using splice method
names.splice(1, 0, 'Parvej', 'Kamrul');

// remove element using splice method
// prothom songkha index target kore, ditiyo songkha kotogulo element remove korbe target kore
names.splice(2, 1);

// slice method returns selected elements in an array, as a new array
// slice method does not change the original array
// slice method selects from a given start, up to a given end

var newArr = names.slice(2, 5)

// negative value works from end
var newArr = names.slice(-5, -1)

// sort method alphabet order e array element show kore
names.sort()

// reverse method alphabet reverse order e element show kore
names.reverse()


// number sort in an array
var num = [3, 1, 22, 12, 9, 7, 30, 21]
num.sort(function (a, b) {
  // a - b coto theke boro songkha dekhabe, b - a boro theke coto songkha dekhabe (smile)
  return a - b;
})
console.log(num);
*/

// Task 8 - Create a function called highestScore that will
// (1) receive a 1directional array called scores, (2) return the highest score
/*
var scores = [55, 99, 44, 88, 89, 67, 94, 51];

function highestScore(scores) {
  let max = 0;
  for (var i = 0; i < scores.length; i++) {
    if (scores[i] > max) {
      max = scores[i];
    }
  }
  return max;
}
console.log(highestScore(scores));
*/

// Task 9 - Create a function called highestRunScorer that will
// (1) Receive a 2d(directional) array caled playersInfo, (2) Besed don highest score, return the name of the player
/*
let playersInfo = [
  ['Mushfiq', 499],
  ['Liton', 459],
  ['Shakib', 672],
  ['Mashrafe', 500],
  ['Taskin', 351],
  ['Mahmudullah', 444],
  ['Nasir', 400],
  ['Tamim', 747]
]

function highestRunScorer(playersInfo) {
  let highestScore = playersInfo[0][1];
  let highestScorer = playersInfo[0][0];

  for (let i = 1; i < playersInfo.length; i++) {
    if (highestScore < playersInfo[i][1]) {
      highestScorer = playersInfo[i][0]
      highestScore = playersInfo[i][1]
    }
  }
  return highestScorer;
}

const bestPlayer = highestRunScorer(playersInfo);
console.log(bestPlayer);
*/

// Object
/*
const student1 = {
  name: 'Rasel',
  age: 23,
  height: 5.8,
  class: 8,
  language: ['bangla', 'english']
}

// constructor (constructor function er nam capital letter diye likha hoy, eti ekti constructor sohojei bojhar jonno)

function Student(name, age, cgpa, lang) {
  this.name = name;
  this.age = age;
  this.cgpa = cgpa;
  this.lang = lang;
  this.display = function () {
    console.log(this.name);
    console.log(this.age);
  }
}
const student2 = new Student('Fahim', 20, 4.8, ['bangla', 'english'])
const student3 = new Student('Anam', 22, 5, ['bangla', 'english', 'hindi', 'portuguise'])

student2.display();
console.log(student2);
*/

// Guessing Game
/*
let match = 0;
let clash = 0;

for (let i = 1; i < 6; i++) {
  let userNumber = parseInt(prompt('Enter any number (5 time) between 1 - 5 :'));

  let randomNum = Math.floor((Math.random() * 5) + 1);
  console.log(randomNum);

  if (userNumber == randomNum) {
    match += 1;
    console.log('You win!');

  } else {
    clash++;
    console.log('You did not win!');
  }
}
document.write('You have won:' + match + 'times' + '<br/>');
document.write('You have lost:' + clash + 'times');

if (match > clash) {
  document.write('<h2>Hurrah! You Won</h2>');
} else {
  document.write('<h2>You Lost!</h2>');
}
*/

// date object and date methods
/*
let date = new Date();
console.log(date);

console.log(date.getDate());
console.log(date.getDay());
console.log(date.getFullYear());
*/

//  DOM
/*
const para = document.getElementById('text');
para.innerHTML = 'hello i am changed';

const tagName = document.getElementsByTagName('p')[0];
tagName.innerHTML = 'hei! whats up? i am changed again by Tagname';

const className = document.getElementsByClassName('heading')[0];
className.innerHTML = 'hello i am come from className';

const querySelect = document.querySelector('li a');
querySelect.innerHTML = 'query selector';

const querySelectAll = document.querySelectorAll('p')[0];
console.log(querySelectAll);
querySelectAll.innerHTML = 'All are beautiful!'
*/

// event handler onclick
/*
let para = document.querySelector('.txt');
let img = document.querySelector('#img');

function btnAlert() {
  para.innerHTML = 'Button 1 clicked'
}
function btnAlert1() {
  para.innerHTML = 'Button 2 clicked'
}

function imgChange() {
  img.src = './nr.jpg';
}
function imgChange1() {
  img.src = './img2.PNG';
}
*/

// DOM
/*
const headingThree = document.getElementById('heading3');
headingThree.innerHTML = 'heading three has changed by js';
headingThree.style.backgroundColor = 'green';

const h4 = document.getElementsByClassName('h4')[0];
h4.style.color = 'red';

const myDiv = document.querySelector('#my-div');
myDiv.style.textTransform = 'uppercase';

const para = document.createElement('p');
const txt = document.createTextNode('hello createTextNode')
para.appendChild(txt);

// myDiv.appendChild(para);


const myHeading1 = document.getElementById('h1')
const myHeading = document.getElementById('h2')
myDiv.insertBefore(para, myHeading1)
*/



// DOM traversing & manipulating
// Downwards, UpWards, Sideways

// (1) Downwards 
const parent = document.querySelector('.my-list');
const child1 = parent.querySelectorAll('li')[1];
child1.style.color = 'blue'
// Downwards children
const child3 = parent.children[2];
child3.style.textTransform = 'capitalize'



// (2) Upwards
const studentA = document.querySelector('.student-a');
const studentList = studentA.parentElement;
studentList.style.backgroundColor = 'red';


// (3) Sideways
const studentB = document.querySelector('.student-b');
const studentC = studentB.nextElementSibling;
const studenta = studentB.previousElementSibling;
studentC.style.color = 'white'
studenta.style.textTransform = 'uppercase'

const studentParent = studentB.parentElement;
studentParent.style.border = '3px solid green'
const student3 = studentParent.children[2];
student3.style.border = '2px dashed black'

