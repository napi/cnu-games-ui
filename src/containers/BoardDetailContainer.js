import {connect} from "react-redux";
import BoardDetail from "../components/board/BoardDetail";
import {fetchBoard, openModal, deleteBoard} from "../actions/board";

const mapStateToProps = (state) => {
  return {
    board: state.boardDetail,
    profile: state.login.profile,
    isLogin: state.login.isLogin
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getBoard:(idx) => {
      dispatch(fetchBoard(idx));
    },
    openModal:() => {
      dispatch(openModal());
    },    
    deleteBoard:(idx) => {
      dispatch(deleteBoard(idx));
    }            
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardDetail);
