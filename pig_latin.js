function pigIt(str) {
    //Code here
    let strArr = str.split(" ");
    let firstLetter = "";
    let cutStr;
    let newSentence = "";
    strArr.map(function (newStr) {
        firstLetter = newStr[0];
        // check for punctuation at end of word
        if (/^[!,.:;?]/.test(newStr)) {  
            newSentence = newSentence + newStr + " ";
            console.log(newStr)
        } else {
            cutStr = newStr.slice(1);
            if (/[!,.:;?]$/.test(newStr)) {
                cutStr = cutStr.slice(0, cutStr.length - 1) + firstLetter + "ay" + cutStr.slice(cutStr.length - 1) + " "
            } else {
                cutStr = cutStr + firstLetter + "ay ";
            }
            newSentence = newSentence + cutStr;
        }
    });
    return newSentence.slice(0, -1);

}
console.log(pigIt("Yeah so what !"));