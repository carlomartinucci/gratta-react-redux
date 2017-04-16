const scratch = (ticket) => {
  let picked = Math.floor(Math.random()*ticket.quantity);
  const winning = ticket.winnings.find((winning) => {
    picked -= winning.quantity;
    return picked < 0
  }) || {win: 0}
  return winning.win
}

// function gratta(biglietto) {
//   //console.log("lotto: " + biglietto.lotto);
//   var estratto = Math.floor(Math.random()*biglietto.lotto);
//   update_biglietti_grattati(biglietto.id);
//   update_euro_grattati(biglietto.costo);
//   for (var vn in biglietto.tipi_di_vincita) {
//       var vincita = parseInt(biglietto.tipi_di_vincita[vn][0]);
//       var numero = biglietto.tipi_di_vincita[vn][1];
//       estratto -= numero;
//       if (estratto < 0) {
//         update_ritorno_medio(vincita);
//         return vincita
//       }
//   }
//   update_ritorno_medio(0);
//   return 0
// }

const credit = (state = {creditID: 0, current: 100, lastCost: 0, lastWin: 0}, action) => {
  switch (action.type) {
    case 'SCRATCH':
      if (action.ticket && state.current >= action.ticket.cost) {
        const lastWin = scratch(action.ticket)
        const lastCost = action.ticket.cost
        const current = state.current - lastCost + lastWin
        return {creditID: state.creditID + 1, current, lastWin, lastCost}
      } else if (action.ticket && state.current < action.ticket.cost) {
        return {...state, lastCost: 0, lastWin: 0}
      }
      return state
    default:
      return state
  }
}

export default credit