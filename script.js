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



//Type Conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(String(23), 23);

//Type Coercion
console.log('I am ' + 23 + ' years old');
console.log('I am ' + '23' + ' years old');
console.log('23' - '10' - 3);
console.log('23' * '2');



// 5 falsy values 0, '', undefined , null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));

const money = 100
    ;
if (money) {
    console.log("Don't spend it all :)");
} else {
    console.log('You should get a job')
}

let height = 0;
if (height) {
    console.log('Height is defined');
} else {
    console.log('Height is UNDEFINED');
}


const age = '18';
if (age == 18) console.log('you just became an adult :D loose');

if (age === 18) console.log('you just became an adult :D strict');

const favorite = Number(prompt("what's your favorite number?"));
console.log(favorite);

if (favorite === 14) {
    console.log('cool! 14 is a good number')
} else if (favorite === 7) {
    console.log('7 is also cool number')
} else if (favorite === 9) {
    console.log('9 is also cool number')
} else {
    console.log("Number is not 14 or 7")
}

if (favorite !== 14) console.log('why not 14')



const hasDriversLicense = true; //A
const hasGoodVision = true; //B

console.log(hasDriversLicense && hasGoodVision) //AND operator
console.log(hasDriversLicense || hasGoodVision) //OR operator
console.log(!hasDriversLicense)


// if (hasDriversLicense && hasGoodVision) {
//     console.log('Sarah is able to drive!')
// } else {
//     console.log('someone else should drive')
// }

const isTired = false; //C
console.log(hasDriversLicense || hasGoodVision || isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive!')
} else {
    console.log('someone else should drive')
}


//Coding Challenge #3

//test 1

//variables
const dolphinesAverageScore = (96 + 108 + 89) / 3
const koalasAverageScore = (88 + 91 + 110) / 3

console.log(dolphinesAverageScore)
console.log(koalasAverageScore)

if (dolphinesAverageScore === koalasAverageScore) {
    console.log(`It's a tie`);
} else if (dolphinesAverageScore > koalasAverageScore) {
    console.log('Dolphines Win!')
} else {
    console.log('Koalas Win!')
}

//test 2

//variables
const dolphinesAverageScore = 103
const koalasAverageScore = 109
//103
//109

if (dolphinesAverageScore === koalasAverageScore) {
    console.log(`It's a tie`);
} else if ((dolphinesAverageScore > koalasAverageScore) && (dolphinesAverageScore >= 100)) {
    console.log('Dolphines Win!');
} else if ((koalasAverageScore > dolphinesAverageScore) && (koalasAverageScore >= 100)) {
    console.log('Koalas Win!')
}

//Test 3

//variables
const dolphinesAverageScore = 103
const koalasAverageScore = 103


if ((dolphinesAverageScore === koalasAverageScore) && (dolphinesAverageScore > 100) && (koalasAverageScore > 100)) {
    console.log(`It's a tie`);
} else if ((dolphinesAverageScore > koalasAverageScore) && (dolphinesAverageScore > 100)) {
    console.log('Dolphines Win!');
} else if ((koalasAverageScore > dolphinesAverageScore) && (koalasAverageScore > 100)) {
    console.log('Koalas Win!')
} else {
    console.log('nobody Wins')
}



const day = 'monday';

switch (day) {
    case 'monday': // day === 'monday'
        console.log('plan course structure');
        console.log('go to coding meetup');
        break;
    case 'tuesday':
        console.log('prepare theory videos');
    case 'wednesday':
    case 'thursday':
        console.log('write code examples');
        break;
    case 'friday':
        console.log('record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend')
        break;
    default:
        console.log('not a valid day')
}

if (day === 'monday') {
    console.log('plan course structure');
    console.log('go to coding meetup');
} else if (day === 'tuesday') {
    console.log('prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('write code examples');
} else if (day === 'friday') {
    console.log('record videos');
} else if (day === 'saturday' || day === 'sunday') {
    console.log('Enjoy the weekend')
} else {
    console.log('not a valid day')
}



//expressions
3 + 4
1996
true && false && !false

//statements
if (23 > 10) {
    const str = '23 is bigger';
}


console.log(`I'm ${2037 - 1991} years old`) //this works because it has an expression in it
console.log(`I'm ${2037 - 1991} years old` ${ if(23 > 10) {  //this won't because it has a statement in it, JS expects an expression
    const str = '23 is bigger';
})



const age = 23;
// age >= 18 ? console.log('I like to drink wine') :
//     console.log('I like to drink water')

const drink = age >= 18 ? 'wine' : 'water'
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = 'wine';
} else {
    drink2 = 'water';
}

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);

*/

//Coding Challenge #4

//if else version
// const bill = 275;
// let tip;

// const tip = bill >= 50 && <= 300 '0.15' :

// if ((bill >= 50) && (bill <= 300)) {
//     tip = bill * 0.15;
// } else if ((bill < 50) || (bill > 300)) {
//     tip = bill * 0.20;
// }

// let totalCost = bill + tip;

// console.log(`the Bill was ${bill}, the tip was ${tip}, Total Cost is ${totalCost}`);

//Ternary operator version. 
const bill = 275;
let tip;

(bill >= 50) && (bill <= 300) ? tip = bill * 0.15 : tip = bill * 0.20

let totalCost = bill + tip;

console.log(`the Bill was ${bill}, the tip was ${tip}, Total Cost is ${totalCost}`);
