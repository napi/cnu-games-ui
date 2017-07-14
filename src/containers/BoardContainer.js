import {connect} from "react-redux";
import Board from "../components/board/Board";
import {fetchBoards, openModal, changePage} from "../actions/board";

const mapStateToProps = (state) => {
  return {
    boards: state.board.boards,
    profile: state.login.profile,
    isLogin: state.login.isLogin
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getBoards:(page) => {
      dispatch(fetchBoards(page));
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
