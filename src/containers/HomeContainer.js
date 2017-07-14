import {connect} from "react-redux";
import Home from "../components/home/Home";

const mapStateToProps = (state) => {
  return {
    accessToken: state.login.accessToken
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
