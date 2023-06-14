function isPartyViable(guests) {
    // Your code goes here...(guests.length === 5) ? (guests.reduce((acc, guest) => acc + guest.paidForTicket) > 100) ? true : false : false
    if (!(guests.length >= 5)) {
        return false;
    }
    let totalTickets = 0;
    for (let guest of guests) {
        totalTickets += guest.paidForTicket;
    }
    return (totalTickets < 100) ? false : true;
}


const guests = [
    { name: "diya", paidForTicket: 15 },
    { name: "amul", paidForTicket: 2 },
    { name: "saleh", paidForTicket: 2 },
    { name: "philippa", paidForTicket: 30 },
]
const guests2 = [
    { name: "diya", paidForTicket: 15 },
    { name: "amul", paidForTicket: 2 },
    { name: "saleh", paidForTicket: 2 },
    { name: "philippa", paidForTicket: 30 },
    { name: "kev", paidForTicket: 6 },
    { name: "sarah", paidForTicket: 11 },
]
const guests3 = [
    { name: "diya", paidForTicket: 15 },
    { name: "amul", paidForTicket: 20 },
    { name: "saleh", paidForTicket: 2 },
    { name: "philippa", paidForTicket: 30 },
    { name: "kev", paidForTicket: 26 },
    { name: "sarah", paidForTicket: 11 },
]

function orderSupplies(supplies, guests) {// Your code goes here...
    let totalCost = 0;
    for (const [item, cost] of Object.entries(supplies)) {
        totalCost += cost * guests
    }
    return totalCost;
}

function calculateTables(guests, seats) {
    let tablesAndGuests = {}
    tablesAndGuests.tables = Math.floor(guests / seats);
    tablesAndGuests.remainingGuests = guests % seats;
    return tablesAndGuests;
}

calculateTables(4, 2);
// should return { tables: 2 , remainingGuests: 0 }

calculateTables(14, 6);
// should return { tables: 2 , remainingGuests: 2 }

calculateTables(26, 5);
// should return { tables: 5 , remainingGuests: 1 }

function calculateTaxiFare(seconds) {
    // Your code goes here...
    let baseRate = 500;
    if (seconds - 180 <= 0) {
        return baseRate;
    } else {
        let newCost = baseRate + Math.ceil((seconds - 180) / 60) * 70
        return newCost;
    }
}

calculateTaxiFare(150);
// should return 500

calculateTaxiFare(360);
// should return 710

calculateTaxiFare(491);
// should return 920

function pickWinners(numbers) {
    // Your code goes here...
    const winningNumbers = [];
    for(let i in numbers) {
        if (!(i % 2 === 0)) {
            let newWinner = {
                seat: i,
                ticketCost: numbers[i]
            }
            winningNumbers.push(newWinner)
        }
    }
    console.log(winningNumbers);
    return winningNumbers;
}

pickWinners([6, 7, 12, 49])
// should return [{seat: 1, ticketCost: 7}, {seat: 3, ticketCost: 49}]

pickWinners([1, 3, 5, 7, 9, 11])
// should return [{seat: 1, ticketCost: 3}, {seat: 3, ticketCost: 7}, {seat: 5, ticketCost: 11} ]

pickWinners([1, 6, 13, 8, 29, 50])
// should return []