import { connect } from 'react-redux'
import Scratch from '../components/Scratch'
import { scratch } from '../actions'

const mapStateToProps = (state) => {
  return {
    ticket: state.currentTicket
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (ticket) => {
      dispatch(scratch(ticket))
    }
  }
}


// const mergeProps = (state, dispatchProps) => {
//   console.log(state)
//   const { dispatch } = dispatchProps;
//   return {
//     onClick: () => {
//       dispatch(scratch(state.ticket))
//     }
//   }
// }

const ScratchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Scratch)

export default ScratchContainer
