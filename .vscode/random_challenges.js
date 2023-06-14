function ArraySquared(arr) {
    const newArr = arr.map(value => Math.pow(value, 2));
    console.log(newArr);
    return newArr;
}

function sumAllPositives(arr) {
    const newArr = arr.reduce((previous, current) => (current > 0) ? previous + current : previous);
    console.log(newArr);
    return newArr;
}

function medianAndMean(arr) {
    arr.sort();
    let median;
    let mean;
    if (arr.length % 2 !== 0) {
        median = arr[(arr.length - 1) / 2];
    } else {
        let middleIndexOne = Math.floor((arr.length - 1) / 2);
        let middleIndexTwo = middleIndexOne + 1;
        median = (arr[middleIndexTwo] + arr[middleIndexOne]) / 2;
    }
    mean = (arr.reduce((current, total) => current + total)) / arr.length;
    return { mean: mean, median: median };
}

function nameToInitials(str) {
    const nameArray = str.split("");
    let initialStr = "";
    nameArray.map(function (value) {
        if (value === value.toUpperCase()) {
            initialStr = initialStr.concat(value);
        }
    })
    console.log(initialStr);

}

function youngestAndOldest(arr) {
    let ageArray = [];
    ageArray = arr.map(obj => obj.age);
    let maxAge = Math.max(...ageArray);
    let minAge = Math.min(...ageArray);
    let ageDifference = maxAge - minAge;
    console.log(maxAge, minAge, ageDifference)
    return [minAge, maxAge, ageDifference]
}

function numeronyns(str) {
    let strArray = str.split(" ");
    let abbreviation = strArray.map(function(element) {
        let newElement ="";
        if (element.length > 4) {
             return newElement.concat(element[0], element.length - 2, element[element.length - 1])
        } else {
            return element;
        }
    });
    const newStr = abbreviation.join(" ")
    console.log(newStr)
}

function nWithMapAndReduce (nNumber) {
    const numberArray = Array(nNumber)
    .fill(1)
    .map((value, index) => value + index)
    .reduce((previous, current) => previous * current);
    console.log(numberArray) 
}

function countElementsInArrays (arr) {

}
const input = [
    ["a", "b", "c"],
    ["c", "d", "f"],
    ["d", "f", "g"],
  ];
