let input1 = prompt("Enter First Input");
let input2 = prompt("Enter Second Input");

console.log("Before Swapping\nInput 1: " + input1 + ", Input 2: " + input2);
[input1, input2] = [input2, input1];
console.log("After Swapping\nInput 1: " + input1 + ", Input 2: " + input2);