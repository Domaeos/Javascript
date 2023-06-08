function greetGuest(name) {
    // Your code goes here
    let firstLetter = ""
    let remainingLetters = ""
    if (typeof name === "string" && name !== "") {
        firstLetter = name[0].toUpperCase()
        remainingLetters = name.slice(1)
    }

    return `Hello ${firstLetter + remainingLetters}!`
}
console.log(greetGuest(""))