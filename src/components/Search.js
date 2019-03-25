import React, { Component } from 'react';
import { Collapse, Nav, Navbar, NavItem, Input, Button } from 'reactstrap';
import { fetchCrimeTypes, fetchForces, fetchMonths, fetchCrimes } from '../api';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      selectedCrimeType: '',
      selectedForce: '',
      selectedMonth: ''
    };

    this.searchHandler = this.searchHandler.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount() {
    fetchCrimeTypes().then((types) => {
      this.props.receiveCrimeTypes(types);
    });

    fetchForces().then((forces) => {
      this.props.receiveForces(forces);
    });

    fetchMonths().then((months) => {
      this.props.receiveMonths(months);
    });
  }

  /**
   * Triggered when the Search button is clicked
   */
  searchHandler() {
    let { selectedCrimeType, selectedForce, selectedMonth } = this.state;

    if (!this.isFormValid(selectedCrimeType, selectedForce, selectedMonth)) {
      alert('You must select a valid Crime Type, Police Force and Month.');
      return false;
    }

    this.props.requestCrimes();

    fetchCrimes(
      this.state.selectedCrimeType,
      this.state.selectedForce,
      this.state.selectedMonth
    ).then((crimes) => {
      this.props.receiveCrimes(crimes);
    }).catch((err) => {
      this.props.receiveCrimesError(err);
    });
  }

  /**
   * Returns true if the values are not empty
   *
   * @param {string} crimeType
   * @param {string} force
   * @param {string} month
   * @return boolean
   */
  isFormValid(crimeType, force, month) {
    return crimeType !== '' && force !== '' && month !== '';
  }

  /**
   * Triggered when any of the input changes
   *
   * @param {object} event
   */
  handleInputChange(event) {
    let {name, value} = event.target;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className="Search">
        <Navbar color="dark" light expand="md">
          <Collapse navbar>
            <Nav navbar>
              <NavItem>
                <Input type="select" name="selectedCrimeType" value={this.state.selectedCrimeType} onChange={this.handleInputChange}>
                  <option>Crime Type</option>
                  {this.props.crimeTypes.map((crimeType) => (
                    <option key={crimeType.url} value={crimeType.url}>{crimeType.name}</option>
                  ))}
                </Input>
              </NavItem>
              <NavItem>
                <Input type="select" name="selectedForce" value={this.state.selectedForce} onChange={this.handleInputChange}>
                  <option>Police Force</option>
                  {this.props.forces.map((force) => (
                    <option key={force.id} value={force.id}>{force.name}</option>
                  ))}
                </Input>
              </NavItem>
              <NavItem>
                <Input type="select" name="selectedMonth" value={this.state.selectedMonth} onChange={this.handleInputChange}>
                  <option>Month</option>
                  {this.props.months.map((month) => (
                    <option key={month.id} value={month.id}>{month.name}</option>
                  ))}
                </Input>
              </NavItem>
            </Nav>
          </Collapse>
          <Button onClick={this.searchHandler}>Search</Button>
        </Navbar>
      </div>
    );
  }
}

export default Search;
