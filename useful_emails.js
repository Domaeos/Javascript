function findTicketPrices(emailString) {
    // Your code goes here...
    
    for (let i = 0; i < emailString.length; i++) {
        if (!(isNaN(parseInt(emailString[i])))) {
            return true
        }
    }
    return false
    
}

console.log(findTicketPrices("hello"))