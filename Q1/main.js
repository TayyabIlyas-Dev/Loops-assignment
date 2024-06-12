// // 1. Create a blank array: Start by setting up an empty array named myWork that will hold
// // objects.
// 2. Use a loop to create lessons: Write a for loop that runs from 1 to 10. In each iteration:
// o Create an object representing a lesson.
// o Each lesson should have a name property, which is a string like "Lesson 1",
// "Lesson 2", etc.
// o Each lesson should also have a status property, which alternates between true
// and false. This means "Lesson 1" will have status: true, "Lesson 2" will have
// status: false, and so on.
var myWork = [];
for (var i = 1; i <= 10; i++) {
    var lesson = {
        name: "Lesson ".concat(i),
        status: (i % 2 == 1) ? "correct" : false, // terenary operator (condition) ?  exprsn 1 :  exprsn 2
        //    if condition is true so print 1st expression other then print 2nd expression. 
    };
    // console.log(lesson);
    myWork.push(lesson);
}
console.log(myWork);
