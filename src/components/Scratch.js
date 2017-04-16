import React, { PropTypes } from 'react'
import './Scratch.css'

const Scratch = ({onClick, ticket}) => (
  <div className="Scratch">
    <button className="Scratch-button" onClick={() => onClick(ticket)}>
      { ticket ?
        `Gratta un ${ticket.name}`
        : "Scegli un gratta e vinci prima"
      }
    </button>
  </div>
)

export default Scratch
