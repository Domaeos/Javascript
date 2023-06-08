function pickWinners(numbers) {.
    let winningTickets = [];
    let seatNumber = 0;
    for(let i = 0; i < numbers.length; i++){
        seatNumber = i;
        if(numbers[i] % 2 && i % 2){
            winningTickets.push({seat: seatNumber, ticketCost: numbers[i]})
        }
            
        }
        return winningTickets;
    }


console.log(pickWinners([ 1, 3, 5, 7, 9, 11, 16, 28, 6, 93 ]));
