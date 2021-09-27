// creation
// objects <-- keys
let student = {
  firstName: "Juan",
  lastName: "Yepes",
  city: "Boca Raton",
  family: {
    mama: "sandra",
    bro: "domininc",
    pets: ["😸", "🐶", "🐠"],
  },
  education: {
    university: "UCF",
    bootcamp: "Boca Code",
  },
};
console.log("Full Name:", student.firstName + " " + student.family.pets);
console.log("Dog:", student.family.pets[1]);
console.log("BootCamp:", student.education.bootcamp.toUpperCase());

// Object && function array of objects, kinda like json
const students = [
  {
    firstName: "John",
    lastName: "Doe",
    age: 33,
    gender: "female",
  },
  {
    firstName: "Juan",
    lastName: "Yepes",
    age: 24,
    gender: "male",
  },
];

function returnsFullName(person) {
  const fullName = `${person.firstName} ${person.lastName}`;
  console.log(fullName);
}
for (let i = 0; i < students.length; i++) {
  returnsFullName(students[i]);
}

// object reference //
// person.firstName // dot notation
// person['firstname'] // bracket notation

/***** destructuring *****/
//      shortcut    //
// let {ages, awesomes} = student

//     equal to  //
// let ages = person.ages
// let awesomes = person.awesomes
