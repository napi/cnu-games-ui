import React, {Component} from "react";
import {PropTypes} from "prop-types";
import {Provider} from "react-redux";
import routes from "../routes";
import {Router, applyRouterMiddleware} from "react-router";

export default class Root extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
  }


  componentDidMount() {
  }

  render() {
    const {store, history} = this.props;
    console.log(routes);

    return (
      <Provider store={store}>
        <Router history={history}
                routes={routes}
                render={applyRouterMiddleware()}>
        </Router>
      </Provider>
    )
  }
}
