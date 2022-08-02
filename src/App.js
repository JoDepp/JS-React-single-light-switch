import React, { Component } from "react";

class App extends Component {
  state = { on: false };
  /* add event handler called toggle to update the state of the light*/
  toggle = () => {
    /*the value shoudl be set to on*/
    const isOn = this.state.on;
    this.setState({ on: !isOn });
  };
  render() {
    let wallClass = "wall off";
    if (this.state.on) {
      wallClass = "wall on";
    }
    return (
      <div className={wallClass}>
        <div className="switch-plate">
          <div className="screw" />
          {/*set event listener to call event handler*/}
          <div className="switch" onClick={this.toggle}>
            <div className="switch-handle" />
          </div>
          <div className="screw" />
        </div>
      </div>
    );
  }
}

export default App;
