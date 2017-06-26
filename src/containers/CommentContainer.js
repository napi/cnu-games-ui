import {connect} from "react-redux";
import Comment from "../components/comment/Comment";
import {fetchComments} from "../actions/comment";

const mapStateToProps = (state) => {
  console.log(state);
  return {
    comments: state.comment.comments,
    profile: state.login.profile
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getComments:(accessToken) => {
      fetchComments(accessToken)(dispatch);
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comment);
