import React, { Component } from 'react';
import './App.css';
import { Container, Row, Col, Jumbotron } from 'reactstrap';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import SearchContainer from './containers/SearchContainer';
import TableContainer from './containers/TableContainer';

class App extends Component {
  render() {
    const store = configureStore();
    return (
      <Provider store={store}>
        <Container className="App">
          <Row>
            <Col>
              <Jumbotron>
                <h1>Crime visualization in the UK</h1>
              </Jumbotron>
              <SearchContainer />
              <TableContainer />
            </Col>
          </Row>
        </Container>
      </Provider>
    );
  }
}

export default App;
