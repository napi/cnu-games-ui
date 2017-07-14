import React, {Component} from "react";
import {PropTypes} from "prop-types";

export default class Home extends Component {
  static propTypes = {
    accessToken:PropTypes.string.isRequired
  }

  componentDidMount() {
  }

  render() {
    return (      
      <div id="home">
        {this.props.accessToken && <span>HOME</span>}
        {!this.props.accessToken && <span>You must login</span>}
      </div>
    )
  }
}
