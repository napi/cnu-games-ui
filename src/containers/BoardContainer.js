import {connect} from "react-redux";
import Login from "../components/board/Board";
import {fetchBoards} from "../actions/board";

const mapStateToProps = (state) => {
  console.log(state);
  return {
    boards: state.board.boards,
    page: state.board.page
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getBoards:(accessToken) => {
      fetchBoards(accessToken)(dispatch);
    }    
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
