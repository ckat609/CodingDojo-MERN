// 1
// console.log(hello);
// var hello = 'world';

console.log("*****1******");
var hello;
console.log(hello);
hello = "world";

// 2
// var needle = 'haystack';
// test();

// function test() {
//     var needle = 'magnet';
//     console.log(needle);
// }

console.log("*****2******");
var needle = "haystack";

function test() {
    var needle = "magnet";
    console.log(needle);
}
test();


// 3
console.log("*****3******");
var brendan = 'super cool';

function print() {
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

// no changes


// 4
// var food = 'chicken';
// console.log(food);
// eat();

// function eat() {
//     food = 'half-chicken';
//     console.log(food);
//     var food = 'gone';
// }


console.log("*****4******");
var food = "chicken";
console.log(food);

function eat() {
    food = "half-chicken";
    console.log(food);
    var food = "gone";
}

eat();



// 5
// mean();
// console.log(food);
// var mean = function () {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);
// CRASHES


// 6
// console.log(genre);
// var genre = "disco";
// rewind();

// function rewind() {
//     genre = "rock";
//     console.log(genre);
//     var genre = "r&b";
//     console.log(genre);
// }
// console.log(genre);

console.log("*****6******");
var genre;
console.log(genre);
genre = "disco";

function rewind() {
    var genre;
    genre = "rock";
    console.log(genre);
    genre = "r&b";
    console.log(genre);
}
rewind();
console.log(genre);

// 7
// dojo = "san jose";
// console.log(dojo);
// learn();

// function learn() {
//     dojo = "seattle";
//     console.log(dojo);
//     var dojo = "burbank";
//     console.log(dojo);
// }
// console.log(dojo);

console.log("*****7******");
dojo = "san jose";
console.log(dojo);

function learn() {
    var dojo = "seattle";
    console.log(dojo);
    dojo = "burbank";
    console.log(dojo);
}

learn();
console.log(dojo);


// 8 - Bonus ES6: const
// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));
// function makeDojo(name, students){
//     const dojo = {};
//     dojo.name = name;
//     dojo.students = students;
//     if(dojo.students > 50){
//         dojo.hiring = true;
//     }
//     else if(dojo.students <= 0){
//         dojo = "closed for now";
//     }
//     return dojo;
// }

// console.log("*****8******");

// function makeDojo(name, students) {
//     const dojo = {};
//     dojo.name = name;
//     dojo.students = students;
//     if (dojo.students > 50) {
//         dojo.hiring = true;
//     } else if (dojo.students <= 0) {
//         dojo = "closed for now";
//     }
//     return dojo;
// }
// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));