import React from 'react'
import PropTypes from 'prop-types';

import './Ticket.css'

const Ticket = ({ticket, selected, onClick}) => (
  <li onClick={onClick} className={"Ticket" + (selected ? " active" : "")}>
    {ticket.name}
    <span style={{float: 'right'}}>{ticket.cost} €</span>
  </li>
)

Ticket.PropTypes = {
  ticket: PropTypes.shape({
    name: PropTypes.string,
    cost: PropTypes.number,
    winnings: PropTypes.arrayOf(
      PropTypes.shape({
        quantity: PropTypes.number,
        win: PropTypes.number
      })
    )
  }),
  selected: PropTypes.bool,
  onClick: PropTypes.func
}

export default Ticket
