import {connect} from "react-redux";
import Login from "../components/login/Login";
import {fetchProfile} from "../actions/login";

const mapStateToProps = (state) => {
  return {
    profile: state.login.profile,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getProfile:(accessToken) => {
      fetchProfile(accessToken)(dispatch);
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
