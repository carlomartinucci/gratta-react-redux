import React from 'react'
import './Ticket.css'

const Ticket = ({ticket, selected, onClick}) => (
  <li onClick={onClick} className={"Ticket" + (selected ? " active" : "")}>{ticket.name}</li>
)

export default Ticket
