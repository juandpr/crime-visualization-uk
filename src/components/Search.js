import React, { Component } from 'react';
import { Collapse, Nav, Navbar, NavItem, Input } from 'reactstrap';
import { fetchCrimeTypes, fetchForces, fetchMonths } from '../api';

class Search extends Component {
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

  render() {
    return (
      <div className="Search">
        <Navbar color="dark" light expand="md">
          <Collapse navbar>
            <Nav navbar>
              <NavItem>
                <Input type="select">
                {this.props.crimeTypes.map((crimeType) => (
                  <option key={crimeType.url} value={crimeType.url}>{crimeType.name}</option>
                ))}
                </Input>
              </NavItem>
              <NavItem>
                <Input type="select">
                {this.props.forces.map((force) => (
                  <option key={force.id} value={force.id}>{force.name}</option>
                ))}
                </Input>
              </NavItem>
              <NavItem>
                <Input type="select">
                {this.props.months.map((month) => (
                  <option key={month.id} value={month.id}>{month.name}</option>
                ))}
                </Input>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Search;
