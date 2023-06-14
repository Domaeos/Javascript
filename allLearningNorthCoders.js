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
    const Winners = numbers.map(function (val, index) {
        if (val % 2 === 1 && index % 2 === 1) {
            return { seat: index, ticketCost: val };
        } else {
            return false;
        }
    }).filter(isTruthy => isTruthy)
    return Winners;
};


pickWinners([6, 7, 12, 49])
// should return [{seat: 1, ticketCost: 7}, {seat: 3, ticketCost: 49}]

pickWinners([1, 3, 5, 7, 9, 11])
// should return [{seat: 1, ticketCost: 3}, {seat: 3, ticketCost: 7}, {seat: 5, ticketCost: 11} ]

pickWinners([1, 6, 13, 8, 29, 50])
// should return []

function gatherFeedback(feedbackArray) {
    const feedBackObj = {
        positive: 0,
        negative: 0,
        neutral: 0
    }
    for (let i = 0; i < feedbackArray.length; i++) {
        if (feedbackArray[i][1] >= 7) {
            feedBackObj.positive += 1;
        } else if (feedbackArray[i][1] <= 3) {
            feedBackObj.negative += 1;
        } else {
            feedBackObj.neutral += 1;
        }
    }
    console.log(feedBackObj)
    return feedBackObj;
}

gatherFeedback([['maddie', 10], ['jatinder', 3], ['rose', 6]]);
// returns {positive: 1, negative: 1, neutral:1}

gatherFeedback([['maddie', 10], ['jatinder', 10], ['rose', 10]]);
// returns {positive: 3, negative: 0, neutral:0}

gatherFeedback([['maddie', 10], ['jatinder', 10], ['rose', 1]]);
// returns {positive: 2, negative: 1, neutral:0}