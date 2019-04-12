import React from "react";
import Smurf from "./Smurf.js";
import { connect } from "react-redux";
import { fetchSmurfs } from "../actions";

class Smurfs extends React.Component {
  componentDidMount() {
    this.props.fetchSmurfs();
  }
  render() {
    if (this.props.fetchingSmurfs) {
      return (
        <div className="loading">
          <h1>Collecting smurfs...</h1>
        </div>
      );
    }
    return (
      <div className="smurf-list">
        {this.props.smurfs.map(smurf => {
          return <Smurf key={smurf.id} smurf={smurf} />;
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs
  };
};

export default connect(
  mapStateToProps,
  { fetchSmurfs }
)(Smurfs);
