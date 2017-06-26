import {connect} from "react-redux";
import CommentWrite from "../components/comment/CommentWrite";
import {writeComment, closeModal} from "../actions/comment";

const mapStateToProps = (state) => {
  return {
    showModal: state.comment.showModal,
    parentIdx: state.comment.parentIdx    
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setComment:(accessToken, boardIdx, parentIdx, comment) => {
      writeComment(accessToken, boardIdx, parentIdx, comment)(dispatch);
    },
    closeModal:() => {
      dispatch(closeModal());
    }        
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentWrite);
