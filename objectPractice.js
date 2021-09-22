let student = {
    firstName: 'Juan',
    lastName: 'Yepes',
    city: 'Boca Raton',
    family: {
        mom: 'sandra',
        father: 'fernando',
        bro: 'domininc',
        girlfriend: 'harumy',
        pets: ['😸', '🐶', '🐠']
    },
    education: {
        university: 'UCF',
        bootcamp: 'Boca Code',


    }
}

console.log('Full Name:', student.firstName + " " + student.family.pets)
// console.log(student)
console.log('Girlfriend name:', student.family.girlfriend)
console.log('Dog:', student.family.pets[1])
console.log('BootCamp:', student.education.bootcamp.toUpperCase())



