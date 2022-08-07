//call function and pass in objectives.
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb){
    var result ="";
    result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the " + myAdverb
    return result;
}

console.log(wordBlanks("dog", "big", "ran", "quickly"))

/*arrays
var ourArray = ["ben", 34];

nested array
 var Ourarray = [["jac", 14],["lisa", 14]]

 can access array by indexing
 var ourData = ourArray[0],

 can modify an array
 ourArray[0] = chad;

 append - ourArray.push[3,4]
 remove - ourArray.pop()
 shift - removes the first item in the array ourArray.shift()
 unshift - adds element to the start of the array ourArray.unshift
 */

function reausablecode(){
    console.log("hahahaha")
}
reausablecode();

//functions with arguments
function ourFunctionWithArgs(a,b){
    console.log(a - b);
}
ourFunctionWithArgs(10, 6);

//"scope - visibility of variables"
//global scope  - variable defined outside a function block
var myGlobal = 10;

function fun1(){
    oopsGlobal = 5;
}

function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += "oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}

fun1();
fun2();

//local scope - variable declared within a function as function parameters.
function myLocalscope() {
    var myVar = 5;
    console.log(myVar);
}
myLocalscope();


var outwear = "T-shirt"; //global scope

function myOutFit() {
    var outwear = "jeans"; //local variable

    return outwear;
}
console.log(myOutFit); //return jeans
console.log(outwear);// return T-shirt

//return a value within a funtion

function minusSeven(num) {
    return num - 7;
}

console.log(minusSeven(10)); //returns 3

//assignment with a returned value

var changed = 0;

function change(num) {
    return (num + 5) / 3;
}

changed = change(10);

//stand inline 
//queque - abstract data structure were items are keps in order. new items are added to the back and old are removed from the front

function nextInline(arr, item) {
    arr.push(item); //add an item
    return arr.shift(); //remove the first item
}

var testsArr = [1, 2, 3, 4, 5];

console.log("before:" + JSON.stringify(testsArr));
console.log(nextInline(testsArr,6));
console.log("After: " + JSON.stringify(testsArr));

//booleans (true (on), false (off))\

function booleans(){
    return false;
}

//conditional statements - if statements make decisions.

function Ourtrueorfalse(isItTrue) {
    if(isItTrue) {
        return "yes";
    }
    return "not";
}
 //Equality operator
function testEqual(val) {
    if(val == 12){
        return "equal";
    }
    return "not equal"
}
console.log(testEqual(10));


//strict equalityoperator
function testStrict(val) {
    if(val === 7) {
        return "equal";
    }
    return "not equal"
}

console.log(testStrict(7)); //7 true "7" false


function compareEquality(a, n) {
    if( a == b) {
        return "equal";
    }
    return "not equal"
}

console.log(compareEquality(10, "10"));