// GIVEN
console.log(example);
var example = "I'm the example!";
// AFTER HOISTING BY THE INTERPRETER
// var example;
// console.log(example); // logs undefined
// example = "I'm the example!";

// 1
console.log(example);
let example = "I'm the example!";    
// logs syntax error

// 2
// original
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
// interpreter
// var needle;
// function test{
//     var needle = 'magnet';
//     console.log(needle);
// }
// test();
// var needle = 'haystack';
// console logs magnet

// 3
// original
var brendan = 'super cool';
function print() {
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

// interpreter
// var brendan = 'super cool';
// console.log(brendan);
// function print() {
//     brendan = 'only okay';
//     console.log(brendan);
// }
// console logs super cool

// 4
// original
var food = 'chicken';
console.log(food);
eat();
function eat() {
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

// interpreter
// var food = 'chicken';
// console.log(food); 
// eat();
// function eat() {
//     var food = 'half-chicken';
//     console.log(food);
//     var food = 'gone';
// }
// console logs chicken and then half-chicken

// 5
// original
mean();
console.log(food);
var mean = function () {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

// interpreter
// function mean ();
// produces an error, mean is not a function

// 6
// original
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

// interpreter
// var genre;
// console.log(genre);
// genre = "disco";
// rewind();
// function rewind() {
//     var genre = "rock";
//     console.log(genre);
//     var genre = "r&b";
//     console.log(genre);
// }
// console.log(genre);
// console logs undefined, rock, r&b, and then disco. 

// 7
// original
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

// interpreter
// var dojo = "san jose";
// console.log(dojo);
// function learn() {
//     var dojo = "seattle";
//     console.log(dojo);
//     var dojo = "burbank";
//     console.log(dojo);
// }
// learn();
// console.log(dojo);
// console logs san jose, seattle, burbank, san jose

// 8
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students) {
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if (dojo.students > 50) {
        dojo.hiring = true;
    }
    else if (dojo.students <= 0) {
        dojo = "closed for now";
    }
    return dojo;
}

// interpreter
function makeDojo(name, students) {
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if (dojo.students > 50) {
        dojo.hiring = true;
    }
    else if (dojo.students <= 0) {
        dojo = "closed for now";
    }
    return dojo;
}
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
//error because dojo is remained a constant; you need double equal signs. 
