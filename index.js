
let numbers = [1, 2, 3, 4, 5, 6, 7, 8]
let kata1 = "abc";
let kata2 = "the moon was walking sideways"
let numerator = 91;
let denominator = 2;
let valueList = "1 3 5 3 7 3 1 1 5";
let wantedValues = "1 3 5 7";

//kata 8

let equation1 = "a + b + c - d";
let values1 = {
    a: 1,
    b: 7,
    c: 3,
    d: 14
}

//  1 kata 1 Reverse a string

function reverseString(string) {
    let reversed = string.split('').reverse().join('')
    return reversed;
}
console.log("Kata 1: " + reverseString(kata1));


//Kata 1 test 1
let k1t1 = "boar";
let k1t2 = "apparently";

console.assert((reverseString(k1t1)) == "raob");
console.assert((reverseString(k1t2)) == "yltnerappa");

//Kata 2 - Reverse a sentence ("bob likes dogs" -> "dogs likes bob")

function reverseSentence(string) {
    let sentenceArray = string.split('').join('');
    let reversedSentenceArray = sentenceArray.split(' ').reverse().join(' ');
    return reversedSentenceArray;
}

console.log("Kata 2: " + reverseSentence(kata2));

//Kata 2 test 1 
let k2t1 = "I am not happy with you";
let k2t2 = "Grandma put the knife down";
console.assert((reverseSentence(k2t1)) == "you with happy not am I");
console.assert((reverseSentence(k2t2)) == "down knife the put Grandma");

//Kata 3 Find the maximum value in an array

function max(numbers) {
    let max = Math.max(...numbers);
    return max;
}
console.log("Kata 3: " + max(numbers));

let k3t1 = [43, 56, 76, 12, 5, 99];
let k3t2 = [11, 13, 56, 778, 9900];

console.assert((max(k3t1)) == 99);
console.assert((max(k3t2)) == 9900);

//Kata 4 Find the minimum value in an array

function min(numbers) {
    let min = Math.min(...numbers);
    return min;
}
console.log("Kata 4: " + min(numbers));

let k4t1 = [43, 56, 76, 12, 5, 99];
let k4t2 = [11, 13, 56, 778, 9900];

console.assert((min(k4t1)) == 5);
console.assert((min(k4t2)) == 11);

//Kata 5 Calculate a remainder (given a numerator and denominator)

function calcRemainder(numerator, denominator) {
    remainder = (numerator % denominator);
    return remainder;
}

console.log("Kata 5: " + calcRemainder(numerator, denominator));

let k5t1N = 3;
let k5t1D = 1;
let k5t2N = 56;
let k5t2D = 34;

console.assert((calcRemainder(k5t1N, k5t1D)) == 0);
console.assert((calcRemainder(k5t2N, k5t2D)) == 22);
//Kata 6 Return distinct values from a list including duplicates (i.e. "1 3 5 3 7 3 1 1 5" -> "1 3 5 7")

function distinctValues(list) {
    let targetList = list.split(' ');
    // let result = new Set(targetList);
    let result = [];
    for (var i = 0; i < targetList.length; i++) {
        if (!result.includes(targetList[i])) {
            result.push(targetList[i]);
        }
    }
    return result.join(" ");
}
console.log("Kata 6: ");
console.log(distinctValues(valueList));

let k6t1 = "2 6 7 9 2 2 2 6 7 9 9 9 7 2 7 9 6";
let k6t2 = "32 45 67 89 32 32 45 67 89 89 45 67 32";
console.assert((distinctValues(k6t1) == "2 6 7 9"));
console.assert((distinctValues(k6t2)) == "32 45 67 89");

//Kata 7 Return distinct values and their counts (i.e. the list above becomes "1(3) 3(3) 5(2) 7(1)")

function countDistinctValues(list, expectedValue) {
    let targetList = list.split(' ');
    let result = new Set(targetList);
    let uniqueCounts = [];

    result.forEach(value => {
        let count = 0;
        targetList.forEach(expectedValue => {
            if (value === expectedValue) {
                count++
            }
        });
        uniqueCounts.push(value + "(" + count + ")");
    })

    return uniqueCounts.join(' ');
}

console.log("Kata 7: " + countDistinctValues(valueList, wantedValues));

let k7t1A = "2 6 7 9 2 2 2 6 7 9 9 9 7 2 7 9 6";
let k7t1B = "2 6 7 9";
let k7t2A = "32 45 67 89 32 32 45 67 89 89 45 67 32";
let k7t2B = "32 45 67 89";

console.assert((countDistinctValues(k7t1A, k7t1B) == "2(5) 6(3) 7(4) 9(5)"));
console.assert((countDistinctValues(k7t2A, k7t2B) == "32(4) 45(3) 67(3) 89(3)"));

//Kata 8 Given a string of expressions (only variables, +, and -) and an object describing a set of variable/value pairs like {a: 1, b: 7, c: 3, d: 14}, return the result of the expression ("a + b+c -d" would be -3).

function solve(solveFor, mathValues) {
    let equation = solveFor;
    let values = mathValues;
    let answer = "";
    for (let i = 0; i < equation.length; i++) {
        let currentValue;
        let symbol;
        for (let key of Object.keys(values)) {
            let keyValue = values[key];
            if (equation[i] == key) {
                currentValue = keyValue
            } else if (equation[i] == "-" || equation[i] == "+" || equation[i] == "/" || equation[i] == "*" || equation[i] == "(" || equation[i] == ")") {
                symbol = equation[i];
            } else {}
        }
        answer += (" " + currentValue);
        answer += (" " + symbol);
    }
    let finalAnswer = answer.split(" ").join(" ").replace(/undefined/g, "");

    return eval(finalAnswer);
}
console.log("Kata 8: " + solve(equation1, values1));

let equation2 = "(a * b) * c / d";
let values2 = {
    a: 5,
    b: 14,
    c: 1,
    d: 9
}
let equation3 = "(a - (b * (c / d))) + e * f";
let values3 = {
    a: 14,
    b: 51,
    c: 34,
    d: 8,
    e: 67,
    f: 4,

}
console.assert((solve(equation2, values2)) == 7.777777777777778);
console.assert((solve(equation3, values3)) == 65.25);
// As an example, a unit test for the 8th kata might look like:
// console.assert(evaluateExpression("a + b + c - d", {a: 1, b: 7, c: 3, d: 14}) === -3);