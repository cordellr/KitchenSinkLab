let firstName = "John";
let age = 17;
const numberStates = 50;
let fivePlusFour = 5 + 4;

console.log(fivePlusFour);

if (firstName.charCodeAt(0) == 76) {
    //checks to see if first letter in firstName is "L" and gives it a value accordingly
    console.log("Back of the line!");
} else {
    console.log("Next!");
}

function sayHello() {
    alert("Hello World!");
}

sayHello();

function checkAge(firstName, age) {
    if (age < 21) {
        alert("Sorry " + firstName + ", you aren't old enough to view this page!");
    } 
}

checkAge();

let vegetables = ["cucumber", "onion", "ginger", "avocado", "potato"];
let numberVeg = vegetables.length;

for (let whichVeg = 0; whichVeg < numberVeg; ++whichVeg) {
    console.log(vegetables[whichVeg]);
}

let people = [
    {
        firstName: "Rachel",
        age: 37
    },
    {
        firstName: "Lenny",
        age: 49
    },
    {
        firstName: "Jack",
        age: 19
    }, 
    {
        firstName: "Sarah",
        age: 15
    },
    {
        firstName: "Steve",
        age: 23
    }
];

for (let i=0; i < people.length; i++) {
    checkAge(people[i].firstName, people[i].age);
}

function getLength(string) {
    return string.length;
}

let wordLength = getLength("Hello World");

if (wordLength % 2 === 0) {
    console.log ("The world is nice and even!");
} else {
    console.log ("The world is an odd place");
}







