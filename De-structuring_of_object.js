const course ={
    courseName: "javascript",
    price: 2999,
    courseInstructor: "Nikhil seth"
}

// console.log(course.courseName);
console.log(course.price);
// console.log(courseInstructor); // to remove this error developers introduce the concept of De-structuring of an object;

// DE-structuring of an object 
// const {courseName}=course;
console.log(courseName)
const {courseInstructor,price}=course;
console.log(courseInstructor)
console.log(price)
