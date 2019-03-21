import { connect } from 'react-redux';
import { search, receiveCrimeTypes, receiveForces, receiveMonths } from '../actions'
import Search from '../components/Search'

const mapStateToProps = (state) => {
  return {
    crimeTypes: state.crimeTypes,
    forces: state.forces,
    months: state.months
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    search: () => {
      dispatch(search(ownProps.crimeType, ownProps.force, ownProps.month))
    },
    receiveCrimeTypes: (crimeTypes) => {
      dispatch(receiveCrimeTypes(crimeTypes))
    },
    receiveForces: (forces) => {
      dispatch(receiveForces(forces))
    },
    receiveMonths: (months) => {
      dispatch(receiveMonths(months))
    }
  }
}

const SearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);

export default SearchContainer;
