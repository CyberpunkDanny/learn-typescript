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
var person = {
    name: "Teja",
    age: 25,
    hobbies: ["Cricket", "Travel"],
    role: []
};
person.role.push("Cleaner"); //Only Title passed but TS didn't complain
console.log(person);
