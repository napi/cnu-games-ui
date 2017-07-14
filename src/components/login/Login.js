import React, {Component} from "react";
import {PropTypes} from "prop-types";

export default class Login extends Component {
  static propTypes = {
    profile: PropTypes.object.isRequired,
    login: PropTypes.func.isRequired
  }

  componentDidMount() {    
    window.fbAsyncInit = function() {
      FB.init({
        appId      : '188579878330277',
        cookie     : true,  // enable cookies to allow the server to access 
                            // the session
        xfbml      : true,  // parse social plugins on this page
        version    : 'v2.8' // use graph api version 2.8
      });

      FB.getLoginStatus(function(response) {
        this._statusChangeCallback(response);
      }.bind(this));
    }.bind(this);    
  }  

  _statusChangeCallback(response) {
    console.log(response);
    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().
    if (response.status === 'connected') {
      // Logged into your app and Facebook.
      window.localStorage.setItem("accessToken", response.authResponse.accessToken);
      this.props.login(response.authResponse.accessToken);
    } else {
      // The person is not logged into your app or we are unable to tell.
      console.log("Need to login!!");
      window.localStorage.removeItem("accessToken");
    }
  }

  render() {
    return (
      <div>
        {!this.props.profile.name && <span>Need to login</span>}
        {this.props.profile.name && <span>{this.props.profile.name}</span>}
        <br/><span>{window.localStorage.getItem("accessToken")}</span>
        <div className="fb-login-button" data-max-rows="1" data-size="small" data-show-faces="false" data-auto-logout-link="true"></div>
      </div>
    )
  }
}
