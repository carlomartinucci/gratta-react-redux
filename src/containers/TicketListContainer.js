import { connect } from 'react-redux'
import TicketList from '../components/TicketList'

const mapStateToProps = (state) => {
  return {
    tickets: state.tickets
  }
}

const TicketListContainer = connect(
  mapStateToProps
)(TicketList)

export default TicketListContainer
