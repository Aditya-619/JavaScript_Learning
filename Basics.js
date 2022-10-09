
// variables

//integers
const a = 10;
const b = 23;

// char
const ch = 'A';


//strings
const firstName = "Aditya"
const lastName = "Ranjan"

// old way of concatanation
// const sentense = "Hello " + firstName + " " + lastName + " how are you ?"
// console.log(sentense);

// new way
const sentense = `Hello ${firstName} ${lastName}! How are you?`;
console.log(sentense);


// boolean
const lightOn = true;
const anything = false;


// conditionals
const color = "Red";
if(color == "Red") {
    console.log("True");
} else {
    console.log("False");
}


// loops

let addOne = 0;
while(addOne < 10) {
    addOne++;
}
console.log(addOne);

let addTwo = 0;
const n = 10;
for(let i=0; i<n; i++) {
    addTwo += 2;
}
console.log(addTwo);

// console.log(addOne+" "+addTwo);
console.log(`${addOne} ${addTwo}`);


// functions
function sumOfTwoNumbers(num1, num2) {
    return num1+num2;
}

let ans1 = sumOfTwoNumbers(5, 2);
console.log(ans1);

function sumOfTwoNumbers(num1, num2) {
    return num1+num2;
}

let ans2 = sumOfTwoNumbers("Aditya", "Ranjan");
console.log(ans2);

// various ways to write functions

function bark() {
    console.log("Woof");
}

const meow = function() {
    console.log("Meow");
}

bark();
meow();


// Some of the common Builtins

const temp = "tHis iS WeIrEd CaSiNg MaN"
const lowerCase = temp.toLowerCase();
console.log(lowerCase);


const number = 3.18
const roundOff = Math.round(number);
console.log(roundOff);


const s1 = "The quick brown fox jumps over the lazy dog";
const s2 = "He is comming.";
const s3 = "comming";

// includes return true if a string contains another string in it otherwise return false;
console.log(s1.includes(s3));
console.log(s2.includes(s3));


// objects -> stores different set of data together
const me = {
    name: "Aditya",
    age: 20,
    favSport: "cricket",
    isMale: true,
};

console.log(me.name);
console.log(me.age);


const person1 = {
    name: "Ronaldo",
    age: 38,
    club: "Man-United",
};
const person2 = {
    name: "Messi",
    age: 40,
    club: "Barca"
};

function info(person){
    if(person.age == 38) {
        console.log(person1.name);
    } else {
        console.log(person2.name);
    }
}

info(40);

// Objects can as well have nested objects inside of them.
//e.g.

const myInfo = {
    name: {
        fullName: "Aditya Ranjan",
        age: 20,
    },
    locality: {
        country: "India",
        State: "Punjab",
        city: "Mohali",
    },
    getAddress() {
        return `${this.name.fullName} 
        ${this.name.age}
        ${this.locality.country} ${this.locality.city}`;
    },
};

console.log(myInfo.name.fullName);
console.log(myInfo.locality.city);

console.log(myInfo.getAddress());


// Arrays

const arr = [1, 2, 3, 4, 5, 12, 13];
console.log(arr);