import React, {Component, PropTypes} from "react";

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
        <div className="content-area">
          {this.props.children}
        </div>
      </div>
    )
  }
}
