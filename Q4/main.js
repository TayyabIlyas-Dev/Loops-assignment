// 4.Exploring Objects with for...in Loop
// Objective: Practice working with objects in TypeScript and iterating over their properties using
// a for...in loop.
// Instructions:
// 1. Create a simple object with three items:
// o Define an object called myObject with three properties: item1, item2, and item3,
// each with corresponding string values.
var myObject = {
    item1: 'lapi',
    item2: 'mobi',
    item3: 'bike',
};
for (var key in myObject) {
    console.log("The item: ".concat(key, " & the name of its: ").concat(myObject[key]));
}
