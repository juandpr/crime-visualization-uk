import React, { Component } from 'react';
import './App.css';
import { Container, Row, Col, Jumbotron } from 'reactstrap';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

class App extends Component {
  render() {
    const store = configureStore();
    return (
      <Provider store={store}>
        <Container className="App">
          <Row>
            <Col>
              <Jumbotron>
                <h1>Crimse visualization in the UK</h1>
              </Jumbotron>
            </Col>
          </Row>
        </Container>
      </Provider>
    );
  }
}

export default App;
