import React from 'react'
import PropTypes from 'prop-types';
import TicketContainer from '../containers/TicketContainer'
import './TicketList.css'

const TicketList = ({tickets}) => {
  // console.log(tickets);
  return (
    <div className="TicketListContainer">
      <h2 style={{textAlign: 'center'}}>Scegli un biglietto: </h2>
      <ul className="TicketList">
        {tickets.map((ticket) => <TicketContainer key={ticket.name} ticket={ticket} />)}
      </ul>
    </div>
  )
}

TicketList.PropTypes = {
  tickets: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      cost: PropTypes.number,
      winnings: PropTypes.arrayOf(
        PropTypes.shape({
          quantity: PropTypes.number,
          win: PropTypes.number
        })
      )
    })
  )
}

export default TicketList
