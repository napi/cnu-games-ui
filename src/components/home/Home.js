import React, {Component} from "react";
import {PropTypes} from "prop-types";
import Board from "../../containers/BoardContainer";

export default class Home extends Component {
  static propTypes = {
  }

  componentDidMount() {
  }

  render() {
    let accessToken = window.localStorage.getItem("accessToken");
    return (      
      <div id="home">
        {accessToken && <span>HOME</span>}
        {!accessToken && <span>You must login</span>}
        <Board />
      </div>
    )
  }
}
