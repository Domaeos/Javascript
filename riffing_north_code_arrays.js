function getSandwichFilling(sandwich) {
    // Your code goes here...
    let newArr = sandwich.filter(function (value, i) {
        if (!(i === 0 || i == sandwich.length - 1)) {
            return value;
        }
    });
    console.log(newArr);
    return newArr;
}

function removeItem(array, n) {
    let newArr = [...array].filter((value, index) => (index === n) ? false : value)
    return newArr;
}
removeItem([1, 2, 3], 1) //returns [1, 3]

removeItem([3], 0) //returns []


function mergeArrays(arr1, arr2) {
    // Your code goes here...
    let newArr = arr1.concat(arr2)
    return newArr;
}

function isItemOmnipresent(arrayOfArrays, item) {
    // Your code goes here...
    for (let i = 0; i < arrayOfArrays.length; i++) {
        if (arrayOfArrays[i].includes(item)) {
            if (i == arrayOfArrays.length - 1) {
                return true;
            }
        } else {
            break;
        }

    }
    return false;
}

function getLastItems(array, n) {
    // Your code goes here...
    let newArr = [...array].filter(function(value, index){
        if (index >= array.length - n) {
            return true;
        } else {
            return false;
        }
    });
    return newArr;
}
getLastItems([1, 2, 3, 4, 5], 2) //returns [4, 5];