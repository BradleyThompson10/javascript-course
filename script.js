/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log("Jonas")
console.log(23)

let firstName = "Jonas";
console.log(firstName);


let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

javascriptIsFun = 'YES!'; //This is dynamic Typing, we have changed the value of javascriptIsFun
console.log(typeof javascriptIsFun);

let age = 30;
age = 31;

const birthYear = 1996;
//birthYear = 1990;

//const job;

var job = 'programmer';
job = 'teacher';

lastName = 'Thompson';
console.log(lastName);

//math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
//2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Bradley';
const lastName = 'Thompson';
console.log(firstName + ' ' + lastName);
// assigment Operators
let x = 10 + 5; //this = 15
x += 10; //x = x + 10  = 25
x *= 4; // x =x * 4 = 100
x++; // x = x + 1 = 101
x--;
x--;
console.log(x);

// Comparison Operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(now - 1991 > now - 2018);

console.log(25 - 10 - 5); // left to right operations

let x, y;
x = y = 25 - 10 - 5; // this is executed right to left because - is a 14 on precedence and = has a 3
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2
console.log(ageJonas, ageSarah, averageAge);


//Coding Challenge #1
//Test 1 Variables 
const marksWeightTest1 = 78;
const marksHeightTest1 = 1.69;
const JohnsWeightTest1 = 92;
const JohnsHeightTest1 = 1.95;
//Test 2 variables
const marksWeightTest2 = 95;
const marksHeightTest2 = 1.88;
const JohnsWeightTest2 = 85;
const JohnsHeightTest2 = 1.76;

//Test 1
marksBmiTest1 = marksWeightTest1 / marksHeightTest1 ** 2;
console.log(marksBmiTest1);

johnsBmiTest1 = JohnsWeightTest1 / JohnsHeightTest1 ** 2;
console.log(johnsBmiTest1);

const markHigherBmiTest1 = marksBmiTest1 > johnsBmiTest1;
console.log(markHigherBmiTest1);

//Test 2
marksBmiTest2 = marksWeightTest2 / marksHeightTest2 ** 2;
console.log(marksBmiTest2);

johnsBmiTest2 = JohnsWeightTest2 / JohnsHeightTest2 ** 2;
console.log(johnsBmiTest2);

const markHigherBmiTest2 = marksBmiTest2 > johnsBmiTest2;
console.log(markHigherBmiTest2);



//Strings and Template Literals
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`just a regular string`)

console.log('string with \n\
mutiple \n\
lines');

console.log(`string with
multiple
lines`);



const age = 15;

if (age >= 18) {
    console.log('Sarah can start drivers license 🚗');
} else {
    const yearsLeft = 18 - age;
    console.log(`sarah is too young. Wait another ${yearsLeft} Years :)`);
}

const birthYear = 2012;

let century
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century);

*/

//Conding Challenge #2

//Variables 
const marksWeight = 78;
const marksHeight = 1.69;
const JohnsWeight = 92;
const JohnsHeight = 1.95;

//Test 1
marksBmi = marksWeight / marksHeight ** 2;

johnsBmi = JohnsWeight / JohnsHeight ** 2;

if (marksBmi > johnsBmi) {
    console.log(`Mark's BMI ${marksBmi} is higher than John's ${johnsBmi}`);
} else {
    console.log(`Johns's BMI ${johnsBmi} is higher than Mark's ${marksBmi}`);
}

//new line 


















