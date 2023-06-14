function findEvenIndex(arr) {
    //Code goes here!
    let leftSum = 0;
    let rightSum = 0;
    for (let i = 1; i < arr.length - 1; i++) {
        for (let j = 0; j < i; j++) {
            leftSum += arr[j];
        }
        for (let k = i + 1; k < arr.length; k++) {
            rightSum += arr[k];
        }
        console.log(rightSum);
        console.log(leftSum);
        if (rightSum === leftSum) {
            return i;
        }
        rightSum=0
        leftSum=0;
    }
    return -1;


}

findEvenIndex([1, 2, 3, 4, 3, 2, 1])
