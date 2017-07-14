import {connect} from "react-redux";
import Login from "../components/login/Login";
import {fetchLogin} from "../actions/login";

const mapStateToProps = (state) => {
  return {
    profile: state.login.profile
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login:(accessToken) => {
      fetchLogin(accessToken)(dispatch);
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
