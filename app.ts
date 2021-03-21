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

enum Nation {
  INDIA, //0 is default - can also use TEXT
  USA, //1
  UK, //2
}

const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]; // a TUPLE type - an array of fixed length & fixed type
  nationality: Nation;
  gender: any; //Use 'any' only when input type is not definite
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
