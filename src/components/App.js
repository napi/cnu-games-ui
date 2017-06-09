import React, {Component} from "react";
import {PropTypes} from "prop-types";
import Login from "../containers/LoginContainer";


export default class App extends Component {
  static propTypes = {
    // dispatch: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    // routes: PropTypes.array.isRequired,
    location: PropTypes.object.isRequired
  }

  componentDidMount() {
  }

  render() {
    const {location} = this.props;

    return (
      <div id="app">
        <Login />
        <div className="content-area">
          {this.props.children}
        </div>
      </div>
    )
  }
}
