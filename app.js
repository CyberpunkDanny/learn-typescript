//  Core Types in TS
/**
 * Number,
 * String,
 * Boolean
 * */
function add(num1, num2, showResult, phrase) {
    var result = num1 + num2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
var numA = 10;
var numB = 2.8;
var printResult = true;
var resultPhrase = "Result is: ";
add(numA, numB, printResult, resultPhrase);
/**
 * Enumeration
 * - 0 is assigned by default to first enum var and corresponding are incremented by 1;
 * - Each enum var can be assigned diff values (numbers/ text)
 */
var Nation;
(function (Nation) {
    Nation[Nation["INDIA"] = 0] = "INDIA";
    Nation[Nation["USA"] = 1] = "USA";
    Nation[Nation["UK"] = 2] = "UK";
})(Nation || (Nation = {}));
/**
 * Array,
 * Object,
 * Tuple: an array of fixed length & fixed type
 * Any: use 'any' only when input type is not definite
 */
var person = {
    name: "Teja",
    age: 25,
    hobbies: ["Cricket", "Travel"],
    role: [3, "Teacher"],
    nationality: Nation.INDIA,
    gender: "F"
};
person.role = [2, "Principal"];
person.gender = "Prefer not to say";
console.log(person);
/**
 * Union
 * - allows multiple types of value for a var
 */
function combine(input1, input2) {
    if (typeof input1 === "number" && typeof input2 === "number") {
        return input1 + input2;
    }
    else {
        return input1.toString() + input2.toString();
    }
}
console.log("CombinedAges: ", combine(23, 34));
console.log("CombinedNames: ", combine("Divya", "teja"));
