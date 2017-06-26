import {connect} from "react-redux";
import Comment from "../components/comment/Comment";
import {fetchComments, openModal} from "../actions/comment";

const mapStateToProps = (state) => {
  return {
    comments: state.comment.comments,
    profile: state.login.profile
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getComments:(accessToken, boardIdx) => {
      fetchComments(accessToken, boardIdx)(dispatch);
    },
    openModal:(parentIdx) => {
      dispatch(openModal(parentIdx));
    }            
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comment);
