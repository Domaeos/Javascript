function isOver40(user) {
    return (user.age > 40) ? true : false;
}
function getUserAge(user) {
    return 2023 - user.yearOfBirth;
}
function getUserPetAge(user) {
    return user.pet.age;
}

function createNorthcoder(name, yearOfBirth) {
    const Coder = {
        name: name,
        age: 2023 - yearOfBirth,
        language: "Javascript"
    }
    console.log(Coder)
    return Coder;
}


function updateVoterAddress(voter, correctHouseNumber) {
    voter.address.houseNumber = correctHouseNumber;
}

function createUserString(userObj) {
    return `name: ${userObj.name}, age: ${userObj.age}, language: ${userObj.language}`
}

function getAlbumProperties(obj) {
    return Object.keys(obj)
}

function getNorthcodersNames(northcoders) {
    const nameArray = [...northcoders].map(function (obj) {
        return obj.name;
    })
    console.log(nameArray)
    return nameArray;
}

function deleteManyPasswords(users) {
    for (let user in users) {
        console.log(users[user].password)
        delete users[user].password
    }
    return users;
}

function countTheObjects(arr) {
    // Your code goes here...
    let numberOfObjects = arr.reduce(function (acc, current) {
        if (typeof current === "object") {
            if (current === null || Array.isArray(current)) {
                return acc;
            } else {
                return acc + 1;
            }
        } else {
            return acc;
        }
    }, 0)
    console.log(numberOfObjects)
    return numberOfObjects;
}
countTheObjects([1, 2, 3, 'hi']) //returns 0;
countTheObjects([{}, {}]) //returns 2;
countTheObjects([1, 2, 3, 'hi', {}, {}, [], null]) //returns 2;

