import {connect} from "react-redux";
import BoardDetail from "../components/board/BoardDetail";
import {fetchBoard, openModal, deleteBoard} from "../actions/board";

const mapStateToProps = (state) => {
  return {
    board: state.boardDetail,
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
    deleteBoard:(accessToken, idx) => {
      deleteBoard(accessToken, idx)(dispatch);
    }            
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardDetail);
