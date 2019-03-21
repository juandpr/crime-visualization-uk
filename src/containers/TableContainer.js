import { connect } from 'react-redux';
import { clearTable } from '../actions'
import CrimeTable from '../components/CrimeTable'

const mapStateToProps = (state) => {
  return {
    crimes: state.crimes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClear: () => {
      dispatch(clearTable())
    }
  }
}

const TableContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CrimeTable);

export default TableContainer;
