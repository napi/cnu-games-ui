import {connect} from "react-redux";
import Comment from "../components/comment/Comment";
import {fetchComments, openModal} from "../actions/comment";

const mapStateToProps = (state) => {
  return {
    comments: state.comment.comments,
    profile: state.login.profile,
    isLogin: state.login.isLogin
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getComments:(boardIdx) => {
      dispatch(fetchComments(boardIdx));
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
