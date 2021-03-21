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
var Nation;
(function (Nation) {
    Nation[Nation["INDIA"] = 0] = "INDIA";
    Nation[Nation["USA"] = 1] = "USA";
    Nation[Nation["UK"] = 2] = "UK";
})(Nation || (Nation = {}));
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
