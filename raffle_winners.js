function pickWinners(numbers) {
    // Your code goes here...
    // index position = seat number. Check if odd
    // return odd numbered seats and ticket price as an array of objects
    const winners = []
    let currentSeat = 1
    for (let i = 0; i < numbers.length; i+=2) {
        if (numbers[i] % 2 === 1) {
            let newWinner = {
                "seat": currentSeat,
                ticketCost: numbers[i+1]
            }
            console.log(newWinner)
            winners.push(newWinner)
        }
        currentSeat += 1
    }
    console.log(winners)
    return winners
}

pickWinners([6, 7, 12, 49])
// should return [{seat: 1, ticketCost: 7}, {seat: 3, ticketCost: 49}]

pickWinners([1, 3, 5, 7, 9, 11])
// should return [{seat: 1, ticketCost: 3}, {seat: 3, ticketCost: 7}, {seat: 5, ticketCost: 11} ]

pickWinners([1, 6, 13, 8, 29, 50])
// should return []
