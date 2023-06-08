function findBiggestAndSmallest(numbers) {
    // Your code goes here  
    if (numbers.length === 0){
        return {}
    }
    const foundNumbers = {
        smallest: numbers[0],
        biggest: numbers[0]
    }
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < foundNumbers.smallest) {
            foundNumbers.smallest = numbers[i]
        }
        if (numbers[i] > foundNumbers.biggest) {
            foundNumbers.biggest = numbers[i]
        }
    }
    return foundNumbers
}
console.log(findBiggestAndSmallest([1, 2, 99, 100]))