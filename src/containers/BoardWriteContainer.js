import {connect} from "react-redux";
import BoardWrite from "../components/board/BoardWrite";
import {writeBoard, closeModal} from "../actions/board";

const mapStateToProps = (state) => {
  return {
    showModal: state.board.showModal    
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setBoard:(accessToken, title, contents, idx) => {
      writeBoard(accessToken, title, contents, idx)(dispatch);
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
