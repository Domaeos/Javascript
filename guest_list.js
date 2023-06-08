function makeGuestList(person) {
    // Your code goes here...
    person.firstName = person.name.slice(0, person.name.indexOf(" "))
    person.lastName = person.name.slice(person.name.indexOf(" ") + 1)
    delete person.name
    return person
}

makeGuestList({ name: "Hannah Fry", age: 46 });
// should return { firstName: "Hannah", lastName: "Fry", age: 46 }

makeGuestList({ name: "Paul Erdős", age: 46 });
// should return { firstName: "Paul", lastName: "Erdős", age: 46 }