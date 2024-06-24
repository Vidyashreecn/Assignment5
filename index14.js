//14. write a  function that returns first name and last name in an array of objects

function getName(name) {
    let fullNames = [];
    for (let i = 0; i < name.length; i++) {
        let person = name[i];
        let fullName = person.firstName + " " + person.lastName;
        fullNames.push(fullName);
    }

    return fullNames;
}

const name= [
    { firstName: 'Vidya', lastName: 'Shree' },
    { firstName: 'Jane', lastName: 'Smith' },
    { firstName: 'John', lastName: 'Doe' }
];

const fullNames = getName(name);
console.log(fullNames);

