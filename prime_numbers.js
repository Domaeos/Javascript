function checkIsPrime(num) {
    // Your code goes here...
    if (num === 1) {
        return false
    }
    for (let i = num - 1 ; i > 1; i--) {
        if(num % i === 0) {
            return false
        }
    }
    return true
}
checkIsPrime()