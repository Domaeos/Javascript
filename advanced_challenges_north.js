function flipBooleans(bools) {
    // Your code goes here...
    const returnArray = bools.map(value => (value) ? false : true);
    console.log(returnArray);
    return returnArray;
}

function translateKey(student, keyToChange, translation) {
    // Your code goes here...
    const translatedStudent = {
        ...student
    }
    translatedStudent[translation] = student[keyToChange]
    delete translatedStudent[keyToChange]
    console.log(translatedStudent)
    return translatedStudent
}

function findFirstDentist(people) {
    // Your code goes here...
    let dentistFoundIndex = false;
    people.some(function (value, index) {
        if (value.isDentist === true) {
            dentistFoundIndex = index;
            return true;
        }
    });
    if (dentistFoundIndex === false) {
        return null;
    } else {
        return people[dentistFoundIndex]
    }
}

function tallyPeopleInManchester(people) {
    // Your code goes here..
    let counter = 0;
    people.map(value => value.lives.city === "Manchester" && counter++);
    return counter;
}

function getPugOwners(owners) {
    // Your code goes here...
    const pugOwners = [];
    owners.map(function (owner) {
        if (owner.breed === "Pug") {
            pugOwners.push(owner.owner);
        }
    });
    console.log(pugOwners)
    return pugOwners

}

function pluraliseKeys(obj) {
    // Your code goes here...
    
    const newObject = {
        ...obj
    }
    for (let key in obj) {
        if (Array.isArray(obj[key])) {
            console.log(key)
            if (obj[key].length > 0 && key.endsWith("s") === false) {
                newObject[key + "s"] = obj[key];
                delete newObject[key];
            }
        }
    }
    console.log(newObject)
    return newObject
}
pluraliseKeys({
    name: 'Tom',
    job: ['writing katas'],
    favouriteShop: [
        "Paul's Donkey University",
        "Shaq's Taxidermy Shack",
        "Sam's Pet Shop"
    ]
})


function getWordLengths(string) {
    // Your code goes here...
    let wordArray = [];
    if (string.length == 0) {
        return [];
    } else {
        wordArray = string.split(" ")
            .map(function (value) {
                return value.length
            })
    }
    return wordArray;
}

function getPalindromes(words) {
    // Your code goes here...
    const palindromes = [];
    if (words.length > 0) {
        for (let i in words) {
            const wordArray = words[i].split("")
            const reverseWord = [];
            for (let j in wordArray) {
                reverseWord.unshift(words[i][j])
            }
            const str1 = wordArray.join("")
            const str2 = reverseWord.join("")
            if (str1 === str2) {
                palindromes.push(words[i]);
            }
        }
    }

    return palindromes

}

function replaceLettersWithXs(string) {
    // Your code goes here...
    const pattern = /[A-Za-z]/gi;
    const newString = string.replace(pattern, "X")
    return newString;
}

function validMobileNumber(mobileNumber) {
    // Your code goes here... 
    const pattern = /^(\+447|07|00447)\d{9}$/
    return pattern.test(mobileNumber)
}

function sumDigitsFromString(string) {
    // Your code goes here...
    const digitsFound = string.match(/\d/g)
    let counter = 0;
    if (digitsFound === null) {
        return counter;
    } else {
        counter = digitsFound.reduce((acc, value) => acc + parseInt(value), 0);
    }
    return counter;
}

function getWilliams(names) {
    // Your code goes here...
    const pattern = /Williams$/i;
    const williamsInName = names.filter(function (value) {
        return (pattern.test(value)) ? value : null
    })
    return williamsInName;

}

function getFactorials(nums) {
    // Your code goes here...
    const factorials = nums.map(function (value) {
        let current = 1;
        for (let i = 1; i <= value; i++) {
            current *= i
        }
        return current;
    })
    return factorials;
}

function largestNumber(number) {
    // Your code goes here...
    const numbersOrdered = number.toString()
        .split("")
        .sort((a, b) => b - a)
        .join("")
    return parseInt(numbersOrdered)
}

function generateMatrix(number) {
    // Your code goes here...
    const Matrix = [];
    for (let i = 1; i <= number; i++) {
        Matrix.push(new Array(number).fill(null))
    }
    return Matrix;
}

function findWrongWayFruit(orchard) {
    // Your code goes here...
    const str = orchard[0];
    const reverseStr = str.split("").reverse().join("")
    let strCount = 0;
    let revCount = 0;
    orchard.filter(function (value, index) {
        if (value === str) {
            strCount++;
        } else {
            revCount++
        }
    })
    if (strCount === revCount) {
        return 0;
    } else {
        if (strCount > revCount) {
            return orchard.indexOf(reverseStr);
        } else {
            return orchard.indexOf(str);
        }
    }
}

function dnaPairs(dnaString) {
    // Your code goes here...
    dnaString = dnaString.toUpperCase();
    const pairCodes = {
        G: "C",
        C: "G",
        T: "A",
        A: "T"
    }
    if (dnaString.length === 0) {
        return [];
    }
    let dnaArray = dnaString.split("")
        .map(function (value) {
            if (Object.keys(pairCodes).includes(value)) {
                console.log(pairCodes[value])
                return value + pairCodes[value];
            }
        }).filter(value => value !== undefined);
    console.log(dnaArray)
    return dnaArray;
}

function tallyHashtagsAndMentions(str) {
    // Your code goes here...
    const tallyObject = {}
    const hashtags = /\#/g;
    const mentions = /\@/g;
    const hashCount = str.match(hashtags)
    const mentionsCount = str.match(mentions)
    tallyObject.hashtags =  (hashCount !== null) ? hashCount.length : 0;
    tallyObject.mentions =  (mentionsCount !== null) ? mentionsCount.length : 0;
    console.log(tallyObject)
    return tallyObject
}
tallyHashtagsAndMentions("So excited to start at @northcoders on Monday! learntocode codingbootcamp");