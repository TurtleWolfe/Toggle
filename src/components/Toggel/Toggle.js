import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Container, Row, Col } from 'react-bootstrap';

export class Toggle extends Component {
  constructor(props) {
    super(props);
    // Initial State
    this.state = {
      tglStart: "Start",
      tglVariant: 'btn-success',
    };

    // This binding is necessary to make `this` work in the callback
    this.setToggleOnOff = this.setToggleOnOff.bind(this);

  }

  static propTypes = {
    tglStart: PropTypes.string.isRequired,
    tglVariant: PropTypes.string.isRequired,
  };

  // setToggleOnOff() {
  //   let { tglStart } = this.state;
  //   if (tglStart === "Start") {
  //     this.setState({
  //       tglStart: "Stop",
  //       tglVariant: `"danger"`,
  //     });
  //   } else {
  //     this.setState({
  //       tglStart: "Start",
  //       tglVariant: `"success"`,
  //     });
  //   }
  // }

  setToggleOnOff() {
    let { tglStart } = this.state;
    (tglStart === "Start") ?
      this.setState({
        tglStart: "Stop",
        tglVariant: 'btn-danger',
      }) :
      this.setState({
        tglStart: "Start",
        tglVariant: 'btn-success',
      });
  }

  render() {
    let { tglStart } = this.state;
    let { tglVariant } = this.state;
    return (
      <Container>
        <Row className="justify-content-center">
          <Col as={Button} className={tglVariant} xs={4} sm={4} md={3} lg={2}
            onClick={this.setToggleOnOff}>
            <h4>
              {tglStart}
              <br></br>
              {tglVariant}
            </h4>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Toggle;
