import {connect} from "react-redux";
import CommentWrite from "../components/comment/CommentWrite";
import {writeComment, closeModal} from "../actions/comment";

const mapStateToProps = (state) => {
  return {
    showModal: state.comment.showModal    
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setBoard:(accessToken, comment, idx) => {
      writeComment(accessToken, comment, idx)(dispatch);
    },
    closeModal:() => {
      dispatch(closeModal());
    }        
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardWrite);
