import {connect} from "react-redux";
import Board from "../components/board/Board";
import {fetchBoards, openModal, changePage} from "../actions/board";

const mapStateToProps = (state) => {
  return {
    boards: state.board.boards,
    profile: state.login.profile
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getBoards:(accessToken, page) => {
      fetchBoards(accessToken, page)(dispatch);
    },
    openModal:() => {
      dispatch(openModal());
    }    
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);
