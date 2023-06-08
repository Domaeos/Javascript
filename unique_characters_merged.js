//*
const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')

*/

function longest(s1, s2) {
    // your code
    const newArray = []
    for (let i =0; i < s1.length; i++) {
        if (newArray.includes(s1[i])==false) {
            newArray.push(s1[i])
        }
    }
    for (let i = 0; i < s2.length; i++) {
        if(newArray.includes(s2[i])==false){
            newArray.push(s2[i])
        }
    }
    return newArray.sort().join("")
}
longest("loopingisfunbutdangerous", "lessdangerousthancoding")//, "abcdefghilnoprstu")