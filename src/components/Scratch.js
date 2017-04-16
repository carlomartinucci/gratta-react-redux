import React from 'react'
import PropTypes from 'prop-types';

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

Scratch.PropTypes = {
  onClick: PropTypes.func,
  ticket: PropTypes.shape({
    name: PropTypes.string,
    cost: PropTypes.number,
    winnings: PropTypes.arrayOf(
      PropTypes.shape({
        quantity: PropTypes.number,
        win: PropTypes.number
      })
    )
  })
}

export default Scratch
