import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import QRCreator from "./qrCreator";
import QRScanner from "./qrScanner";
function App() {
  return (
    <div className="App">
      <div className="ribbon">
        A work by Sadiq
        <br /> mdsadiq6692@gmail.com
      </div>
      <h2>Web QR Checkin Application</h2>
      <h4>You are looking at a simple proof of concept</h4>
      <QRCreator />
      <br />
      <div>
        <QRScanner />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
