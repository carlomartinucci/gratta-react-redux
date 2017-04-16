import { connect } from 'react-redux'
import Ticket from '../components/Ticket'
import { setTicket } from '../actions'

const mapStateToProps = (state, ownProps) => {
  return {
    selected: state.currentTicket.name === ownProps.ticket.name
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setTicket(ownProps.ticket))
    }
  }
}

const TicketContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Ticket)

export default TicketContainer
