function passwordValidation(password) {
    // Your code goes here...
    password = password.toLowerCase();
    let passArray = password.split("");
    if(passArray.includes("n") && passArray.includes("c") && passArray[passArray.length - 1] == "1") {
        return "valid";
    } else {
        return "invalid";
    }
}
passwordValidation("northcoders1") // returns 'valid'
passwordValidation("NORTHCODERS1") // returns 'valid'
passwordValidation("nope1") // returns 'invalid'
passwordValidation("northcoders") // returns 'invalid'