import { connect } from 'react-redux'
import Credit from '../components/Credit'

const mapStateToProps = (state) => {
  return {
    ...state.credit
  }
}

const CreditContainer = connect(mapStateToProps)(Credit)

export default CreditContainer
