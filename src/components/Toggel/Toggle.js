import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Container, Row, Col } from 'react-bootstrap';

export class Toggle extends Component {
  constructor(props) {
    super(props);
    // Initial State
    this.state = {
      tglStart: "Start",
      tglVariant: '"success"',
    };

    // This binding is necessary to make `this` work in the callback
    this.setQuote = this.setQuote.bind(this);

  }

  static propTypes = {
    tglStart: PropTypes.string.isRequired,
    tglVariant: PropTypes.string.isRequired,
  };

  setQuote(tglStart) {
    this.setState({
      tglStart: "Stop",
      tglVariant: `"danger"`,
    });
  }

  render() {
    let { tglStart } = this.state;
    let { tglVariant } = this.state;
    return (
      <Container>
        <Row className="justify-content-center">
          <Col as={Button} variant="success" xs={2} sm={2} md={2} lg={2}
            onClick={this.setQuote}>
            <h1>
              {tglStart}
              <br></br>
              {tglVariant}
            </h1>
          </Col>
        </Row>
        {/* <Row className="justify-content-center">
          <Col as={Button} variant="success" xs={2} sm={2} md={2} lg={2} >
            <h1>
              Stop
            </h1>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col as={Button} variant="danger" xs={2} sm={2} md={2} lg={2} >
            <h1>
              {tglVariant}
            </h1>
          </Col>
        </Row> */}
      </Container>
    );
  }
}

export default Toggle;
