import React, { Component } from "react";
import "./App.css";
import Smurfs from "./Smurfs";
import SmurfForm from "./SmurfForm";
import { connect } from "react-redux";
import { addSmurfs } from "../actions";

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <SmurfForm addSmurfs={this.props.addSmurfs} />
        <Smurfs smurf={this.props.smurf} />
      </div>
    );
  }
}
export default connect(
  null,
  { addSmurfs }
)(App);
