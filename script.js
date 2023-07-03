// Example GIVEN
// console.log(example);
// var example = "I'm the example!";
// AFTER HOISTING BY THE INTERPRETER
// var example;
// console.log(example); // logs undefined
// example = "I'm the example!";


//! Problem 1
// console.log(hello);
// var hello = 'world';

// -- After Interpreter: --
// console.log(hello); -->  hello not defined
// let hello = 'world';

// -- Correct Syntax --
// let hello = 'world';
// console.log(hello); --> would log "world"

//! Problem 2 
// var needle = 'haystack';
// test();
// function test(){
//     var needle = 'magnet';
//     console.log(needle);
// }

// -- After Interpreter: --
// var needle = 'haystack';
// test();  --> function not defined
// function test(){ --> no call to function
//     var needle = 'magnet';
//     console.log(needle);
// }

// -- Correct Syntax --
// var needle = 'haystack';
// function test(){
//     var needle = 'magent';
//     console.log(needle);
// }
// test(); --> outcome = "magnet"

//! Problem 3 
// var brendan = 'super cool';
// function print(){
//     brendan = 'only okay';
//     console.log(brendan);
// }
// console.log(brendan);

// -- After Interpreter: --
// var brendan = 'super cool';
// function print(){
//     brendan = 'only okay';
//     console.log(brendan);
// }
// console.log(brendan); --> 'super cool'

// -- Correct Syntax --
// currently works fine, but the function is never called

//! Problem 4
// var food = 'chicken';
// console.log(food);
// eat();
// function eat(){
//     food = 'half-chicken';
//     console.log(food);
//     var food = 'gone';
// }

// -- After Interpreter: --
// var food = 'chicken';
// console.log(food); --> log 'chicken'
// eat(); --> function not defined
// function eat(){
//     food = 'half-chicken'; --> not defined
//     console.log(food);
//     let food = 'gone';
// }

// -- Correct Syntax --
// var food = 'chicken';
// console.log(food); --> log 'chicken'
// function eat(){
//     let food = 'gone';
//     food = 'half-chicken';
//     console.log(food);
// }
// eat(); --> log 'half-chicken'






//! Problem 5
// mean(); --> undefined
// console.log(food); --> undefined
// var mean = function() { --> function not called
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food); --> undefined


// -- After Interpreter: --
// mean(); --> undefined
// console.log(food); --> undefined
// var mean = function() {  --> function not called
//     food = "chicken";
//     console.log(food);
//     let food = "fish";
//     console.log(food);
// }
// console.log(food); --> undefined

// -- Correct Syntax --
// let food = "fish";
// console.log(food); --> log 'fish'
// var mean = function() {  
//     food = "chicken";
//     console.log(food); --> log 'chicken'
//     console.log(food); --> log 'chicken'
// }
// console.log(food); --> log 'fish'
// mean(); 




//! Problem 6
// console.log(genre); --> undefined
// var genre = "disco";
// rewind();
// function rewind() {
//     genre = "rock";
//     console.log(genre); --> 'rock'
//     var genre = "r&b";
//     console.log(genre); --> 'r&b'
// }
// console.log(genre); --> undefined

// -- After Interpreter: --
// console.log(genre); --> undefined
// let genre = "disco";
// rewind();
// function rewind() { --> function isn't called
//     let genre = "r&b";
//     console.log(genre); --> log 'r&b'
//     genre = "rock";
//     console.log(genre); --> log 'rock'
// }
// console.log(genre); --> undefined


// -- Correct Syntax --
// let genre = "disco";
// console.log(genre); --> log 'disco'
// function rewind() {
//     let genre = "r&b";
//     console.log(genre); --> log 'r&b'
//     genre = "rock";
//     console.log(genre); --> log 'rock'
// }
// rewind(); --> call function
// console.log(genre); --> log 'disco'





//! Problem 7
// dojo = "san jose";
// console.log(dojo); --> not defined
// learn(); --> undefined
// function learn() { --> is not called
//     dojo = "seattle";
//     console.log(dojo); --> log 'burbank'
//     var dojo = "burbank";
//     console.log(dojo); --> log 'seattle'
// }
// console.log(dojo); --> not defined



// -- After Interpreter: --
// dojo = "san jose";
// console.log(dojo); --> not defined
// learn(); --> undefined
// function learn() { --> is not called
//     dojo = "seattle";
//     console.log(dojo); --> log 'burbank'
//     let dojo = "burbank";
//     console.log(dojo); --> log 'seattle'
// }
// console.log(dojo); --> not defined


// -- Correct Syntax --
// let dojo = "san jose";
// console.log(dojo); --> log 'san jose'
// function learn() { --> is not called
//     let dojo = "burbank";
//     console.log(dojo); --> log 'burbank'
//     dojo = "seattle";
//     console.log(dojo); --> log 'seattle'
// }
// learn(); --> calls function above
// console.log(dojo); --> log 'san jose' 




//! Bonus Problem 8 - TBD....
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}


-- After Interpreter: --



-- Correct Syntax --


