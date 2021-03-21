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
