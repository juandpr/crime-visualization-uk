import React, { Component } from 'react';
import { Table } from 'reactstrap';

class CrimeTable extends Component {
  render() {
    return (
      <div className="CrimeTable">
        <h2>Search Results</h2>
        <Table>
          <thead>
            <tr>
              <th>Category</th>
              <th>Outcome</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
          {this.props.crimes.map((crime) => (
            <tr>
              <td>{crime.category}</td>
              <td>{crime.outcome_status.category}</td>
              <td>{crime.outcome_status.date}</td>
            </tr>
          ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default CrimeTable;
