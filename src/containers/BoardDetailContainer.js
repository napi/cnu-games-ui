import {connect} from "react-redux";
import BoardDetail from "../components/board/BoardDetail";
import {fetchBoard, openModal, closeModal} from "../actions/board";

const mapStateToProps = (state) => {
  return {
    board: state.boardDetail,
    showModal: state.board.showModal,    
    profile: state.login.profile
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getBoard:(accessToken, idx) => {
      fetchBoard(accessToken, idx)(dispatch);
    },
    openModal:() => {
      dispatch(openModal());
    },
    closeModal:() => {
      dispatch(closeModal());
    }        
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardDetail);
