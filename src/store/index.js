import { createStore } from 'redux'
import grattaApp from '../reducers'

import database from '../tickets.json'

const credit = {creditID: 0, current: 100, lastCost: 0, lastWin: 0}

const initialState = {
  tickets: database.tickets,
  currentTicket: database.tickets[0],
  credit
}

let store = createStore(grattaApp, initialState)

export default store