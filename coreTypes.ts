//  Core Types in TS

/**
 * Number,
 * String,
 * Boolean
 * */
function add(num1: number, num2: number, showResult: boolean, phrase: string) {
  const result = num1 + num2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
}

const numA = 10;
const numB = 2.8;
const printResult = true;
const resultPhrase = "Result is: ";

add(numA, numB, printResult, resultPhrase);

/**
 * Enumeration
 * - 0 is assigned by default to first enum var and corresponding are incremented by 1;
 * - Each enum var can be assigned diff values (numbers/ text)
 */
enum Nation {
  INDIA, //0
  USA,
  UK,
}

/**
 * Array,
 * Object,
 * Tuple: an array of fixed length & fixed type
 * Any: use 'any' only when input type is not definite
 */
const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
  nationality: Nation;
  gender: any;
} = {
  name: "Teja",
  age: 25,
  hobbies: ["Cricket", "Travel"],
  role: [3, "Teacher"],
  nationality: Nation.INDIA,
  gender: "F",
};
person.role = [2, "Principal"];
person.gender = "Prefer not to say";
console.log(person);

/**
 * Type Aliases
 * - substitutes to actual union types
 */
type NumeroText = number | string;
type Greeting = "Hello" | "Namaste";

/**
 * Union
 * - allows multiple types of value for a var
 */
function combine(input1: NumeroText, input2: NumeroText) {
  if (typeof input1 === "number" && typeof input2 === "number") {
    return input1 + input2;
  } else {
    return input1.toString() + input2.toString();
  }
}

console.log("CombinedAges: ", combine(23, 34));
console.log("CombinedNames: ", combine("Divya", "teja"));

/**
 * Literals
 * - instead of just type, var of literal types take value too
 */
let someNumber: 24;
someNumber = 24; // Cannot be any number other than 24
let someText: Greeting;
someText = "Hello"; // 'Hello' or 'Namaste' only

/**
 * Function Type
 */
let combineValues: (a: NumeroText, b: NumeroText) => NumeroText;
combineValues = combine;
//  combineValues = add;
/**
 *  Above commented stmt throws an error as combineValues is of Function type which takes 2 params of type NumeroText
 *  and returns value of type NumeroText
 */
console.log(combineValues("Hello", 786));
