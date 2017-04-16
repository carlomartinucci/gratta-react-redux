import React from 'react'
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
export default TicketList
