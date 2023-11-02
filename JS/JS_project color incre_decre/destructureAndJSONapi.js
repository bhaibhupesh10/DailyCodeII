//OBject de-structure and JSON API intro
const course = {
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"bhupesh"
}
// course.courseInstructor
const {courseInstructor: instructor}=course

// console.log(courseInstructor);
console.log(instructor);

//react example
// const navbar = (props.company) =>{
// // destructuring
//     const navbar = ({company})
// }

// navbar(company="bhupesh")

