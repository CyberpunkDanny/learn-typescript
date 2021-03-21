function add(num1, num2, showResult, phrase) {
    var result = num1 + num2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
var numA;
numA = 10;
var numB = 2.8;
var printResult = true;
var resultPhrase = "Result is: ";
add(numA, numB, printResult, resultPhrase);
