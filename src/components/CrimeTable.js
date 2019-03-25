import React, { Component } from 'react';
import { Table, Button } from 'reactstrap';

class CrimeTable extends Component {
  constructor() {
    super();

    this.clearTableHandler = this.clearTableHandler.bind(this);
  }

  clearTableHandler(event) {
    event.preventDefault();
    this.props.clearTable();
  }

  render() {
    return (
      <div className="CrimeTable">
        <h2>Search Results <Button color="link" className="small" href="" onClick={this.clearTableHandler}>(Clear)</Button></h2>
        {this.props.isFetching ? (
          <p>Loading...</p>
        ) : (
          <Table>
            <thead>
              <tr>
                <th>Category</th>
                <th>Outcome</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
            {this.props.crimes.length ? (this.props.crimes.map((crime) => (
              <tr key={crime.id}>
                <td>{crime.category}</td>
                <td>{crime.outcome_status ? crime.outcome_status.category : ''}</td>
                <td>{crime.outcome_status ? crime.outcome_status.date : ''}</td>
              </tr>
            ))) : (
              <tr>
                <td colspan="3">No results.</td>
              </tr>
            )}
            </tbody>
          </Table>
        )}
      </div>
    )
  }
}

export default CrimeTable;
