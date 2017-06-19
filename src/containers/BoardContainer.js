import {connect} from "react-redux";
import Board from "../components/board/Board";
import {fetchBoards, openModal, closeModal} from "../actions/board";

const mapStateToProps = (state) => {
  console.log(state);
  return {
    boards: state.board.boards,
    page: state.board.page,
    showModal: state.board.showModal,
    profile: state.login.profile
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getBoards:(accessToken) => {
      fetchBoards(accessToken)(dispatch);
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
)(Board);
