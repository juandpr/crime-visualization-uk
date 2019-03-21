import { connect } from 'react-redux';
import { search } from '../actions'
import Search from '../components/Search'

const mapStateToProps = (state) => {
  return {
    types: state.types,
    forces: state.forces
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSearch: () => {
      dispatch(search(ownProps.crimeType, ownProps.force, ownProps.month))
    }
  }
}

const SearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);

export default SearchContainer;
