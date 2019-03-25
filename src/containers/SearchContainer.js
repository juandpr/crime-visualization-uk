import { connect } from 'react-redux';
import { receiveCrimeTypes, receiveForces, receiveMonths, requestCrimes, receiveCrimes, receiveCrimesError } from '../actions'
import Search from '../components/Search'

const mapStateToProps = (state) => {
  return {
    crimeTypes: state.crimeTypes,
    forces: state.forces,
    months: state.months
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    receiveCrimeTypes: (crimeTypes) => {
      dispatch(receiveCrimeTypes(crimeTypes))
    },
    receiveForces: (forces) => {
      dispatch(receiveForces(forces))
    },
    receiveMonths: (months) => {
      dispatch(receiveMonths(months))
    },
    requestCrimes: () => {
      dispatch(requestCrimes())
    },
    receiveCrimes: (crimes) => {
      dispatch(receiveCrimes(crimes))
    },
    receiveCrimesError: (err) => {
      dispatch(receiveCrimesError(err))
    }

  }
}

const SearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);

export default SearchContainer;
