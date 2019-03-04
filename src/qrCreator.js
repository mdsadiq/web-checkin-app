"use strict";

var QRCode = require("qrcode.react");
var React = require("react");
var ReactDOM = require("react-dom");

// TODO: live update demo
class QRCreator extends React.Component {
  state = {
    idris: "{ 'name': 'Idris', 'employeeId': '560072' }",
    ram: "{ 'name': 'Ram Gopal', 'employeeId': '960082' }",
    size: 200,
    fgColor: "#000000",
    bgColor: "#ffffff",
    level: "H",
    renderAs: "svg",
    includeMargin: false
  };

  render() {
    return (
      <div>
        <QRCode
          value={this.state.idris}
          size={this.state.size}
          fgColor={this.state.fgColor}
          bgColor={this.state.bgColor}
          level={this.state.level}
          renderAs={this.state.renderAs}
          includeMargin={this.state.includeMargin}
          style={{ padding: "0px 30px" }}
        />
        <QRCode
          value={this.state.ram}
          size={this.state.size}
          fgColor={this.state.fgColor}
          bgColor={this.state.bgColor}
          level={this.state.level}
          renderAs={this.state.renderAs}
          includeMargin={this.state.includeMargin}
          style={{ padding: "0px 30px" }}
        />
      </div>
    );
  }
}
export default QRCreator;
// ReactDOM.render(<Demo />, document.getElementById("demo"));
