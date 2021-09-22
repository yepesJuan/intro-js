const students = [{
    firstName: 'Alina',
    lastName: 'Maliuk',
    age: 33, 
    gender: 'female'
}, {
    firstName: 'Dariel',
    lastName: 'Mera',
    age: 32, 
    gender: 'male'
}, {
    firstName: 'Khrystofer',
    lastName: 'Gil',
    age: 30, 
    gender: 'male'
}, {
    firstName: 'Gabby',
    lastName: 'Taylor',
    age: 22, 
    gender: 'female'
}, {
    firstName: 'Juan',
    lastName: 'Yepes',
    age: 24, 
    gender: 'male'
}]

function returnsFullName(person) {
    const fullName = `${person.firstName} ${person.lastName}`
    console.log(fullName)
}

returnsFullName(students[0])

for(let i = 0; i < students.length; i++) {
    returnsFullName(students[i])
}
