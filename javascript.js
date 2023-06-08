function pickWinners(numbers) {
    // Your code goes here...
    // index position = seat number. Check if odd
    // return odd numbered seats and ticket price as an array of objects
    const winners = []
    let currentSeat = 1
    for (let i = 0; i < numbers.length; i+=2) {
        if (numbers[i] % 2 === 1) {
            let newWinner = {
                seat: currentSeat,
                ticketCost: numbers[i+1]
            }
            winners.push(newWinner)
        }
        currentSeat += 1
        console.log(winners)
    }
    return winners
} 
console.log(pickWinners([1, 3, 5, 7, 9, 11]))
// should return [{seat: 1, ticketCost: 3}, {seat: 3, ticketCost: 7}, {seat: 5, ticketCost: 11} ]