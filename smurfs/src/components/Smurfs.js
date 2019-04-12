import React from "react";
import Smurf from "./Smurf.js";
import { connect } from "react-redux";
import { fetchSmurfs } from "../actions";

class Smurfs extends React.Component {
  componentDidMount() {
    this.props.fetchSmurfs();
  }
  render() {
    return (
      <div>
        {this.props.smurfs.map(smurf => {
          return <Smurf id={smurf.id} smurf={smurf} />;
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs
  };
};

export default connect(
  mapStateToProps,
  { fetchSmurfs }
)(Smurfs);
