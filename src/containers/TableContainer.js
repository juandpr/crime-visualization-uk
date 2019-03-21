import { connect } from 'react-redux';
import { clearTable } from '../actions'
import Table from '../components/Table'

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
)(Table);

export default TableContainer;
