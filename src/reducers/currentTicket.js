const currentTicket = (state = null, action) => {
  switch (action.type) {
    case 'SET_TICKET':
      return action.ticket
    default:
      return state
  }
}

export default currentTicket