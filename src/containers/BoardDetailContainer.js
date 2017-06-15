import {connect} from "react-redux";
import BoardDetail from "../components/board/BoardDetail";
import {fetchBoard} from "../actions/board";

const mapStateToProps = (state) => {
  return {
    board: state.boardDetail,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getBoard:(accessToken, idx) => {
      fetchBoard(accessToken, idx)(dispatch);
    }    
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardDetail);
