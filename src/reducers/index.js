import { combineReducers } from 'redux'
import currentTicket from './currentTicket'
import tickets from './tickets'
import credit from './credit'

const grattaApp = combineReducers({
  tickets,
  currentTicket,
  credit
})

export default grattaApp