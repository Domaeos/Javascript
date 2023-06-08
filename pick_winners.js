function pickWinners(numbers) {
    const Winners = numbers.map(function(val, index){
        if(val % 2 === 1 && index % 2 === 1){
            return {seat: index, ticketCost: val};
        } else {
            return false;
        }
    }).filter(isTruthy => isTruthy)
    return Winners;
    };



console.log(pickWinners([ 1, 3, 5, 7, 9, 11, 16, 28, 6, 93 ]));
