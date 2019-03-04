"use strict";

import QrReader from "react-qr-reader";
import React, { Fragment } from "react";

// TODO: live update demo
class QRScanner extends React.Component {
  state = {
    result: "No result"
  };

  handleScan = data => {
    if (data) {
      this.setState({
        result: data
      });
    }
  };
  handleError = err => {
    console.error(err);
  };
  render() {
    return (
      <>
        <h3 style={{ color: "red" }}>{this.state.result}</h3>
        <QrReader
          delay={300}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ width: "100%", margin: "auto" }}
        />
      </>
    );
  }
}
export default QRScanner;
