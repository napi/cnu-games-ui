import React, {Component} from "react";
import {PropTypes} from "prop-types";
import Login from "../../containers/LoginContainer";

export default class Home extends Component {
  static propTypes = {
  }

  componentDidMount() {
    // FB.api('/me?fields=id,name,picture,email,gender,name_format&locale=ko_KR', function(response) {
    //   console.log('Successful login for: ' + response.name);
    //   console.log(response);
    //   console.log(response);
    //   document.getElementById('status').innerHTML =
    //     'Thanks for logging in, ' + response.name + '!';
    // });    
  }

  render() {
    return (      
      <div id="home">
        <Login />
        <span>HOME</span>
      </div>
    )
  }
}
