function palindrome(str) {
    let newStr = str.toLowerCase();
    newStr = str.replace(/[^\w\s]/gi, '');

    for (let i = 0; i < newStr.length; i++) {
        if (newStr[i] !== newStr[newStr.length - 1 - i]) {
            return false
        }
    }
    return true
}

palindrome("eye");


palindrome("_eEe");