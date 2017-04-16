export const setTicket = (ticket) => {
  console.log(ticket);
  return {
    type: 'SET_TICKET',
    ticket
  }
}

export const scratch = (ticket) => {
  console.log(ticket);
  return {
    type: 'SCRATCH',
    ticket
  }
}
