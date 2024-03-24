//Equality and Inequality Test 01
console.log("Equality test with strings:","Apple" === "Apple");
//Equality and Inequality Test 02
console.log("Inequality test with strings:",("Apple" as string) != "Orange");

//Tests Using the lower case function.
console.log("Lower Case function test: ","Hello".toLowerCase() === "hello");

//Numerical tests involving Equality
console.log("Equality test with number: ", 26 === 26);
//Numerical tests involving Inequality
console.log("Inequality test with number: ", (26 as number) != 35);

//Greater than Test
console.log("Greater than test: ", 10 > 5);
//Less than Test
console.log("Less than test: ", 5 < 10);

//Greater than or equal to
console.log("Greater than and equal to test: ", 10 >= 10);
//Less than or equal to
console.log("Less than and equal to test: ", 5 <= 10);

//Tests using "and" Operators
console.log("AND Operator test: ", 5===5 && 10>5);
//Tests using "OR" Operators
console.log("OR Operator test: ", 5===5 || false);

//Test whether an item is in a array
const fruits :string[] = ['Grapes','Banana','Mango'];
console.log('Test "Grapes" in the array: ' , fruits.includes("Grapes"));
//Test whether an item is not in a array
console.log('Testing "Apple" is not a array:' , !fruits.includes("Apple"));



