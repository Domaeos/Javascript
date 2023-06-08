function isPartyViable(guests) {
    // Your code goes here...
    // Check attendance > 5
    // Check total sales > 100
    if (Object.keys(guests).length < 5) {
        return false
    }
    let ticketSales = 0
    for (const key in guests) {
        ticketSales += guests[key].paidForTicket
        console.log(guests[key].paidForTicket)
    }  
    if (ticketSales < 100) {
        return false
    }
    return true
}

  
  const guests = [
    { name: "diya", paidForTicket: 15 },
    { name: "amul", paidForTicket: 2 },
    { name: "saleh", paidForTicket: 2 },
    { name: "philippa", paidForTicket: 30 },
    { name: "kev", paidForTicket: 6 },
    { name: "sarah", paidForTicket: 11 },
  ]
  console.log(isPartyViable(guests));
  // should return false
  