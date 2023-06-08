var countBits = function(n) {
    // Program Me
    let binNum = n.toString(2)
    let sumBins = 0
    for (let i=0; i < binNum.length; i++){
        console.log(binNum[i])
        sumBins+=parseInt(binNum[i])
    }
    console.log(sumBins)
    return sumBins
  };
  countBits(50)