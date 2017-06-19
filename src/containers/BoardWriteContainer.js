import {connect} from "react-redux";
import BoardWrite from "../components/board/BoardWrite";
import {writeBoard} from "../actions/board";

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setBoard:(accessToken, title, contents, idx) => {
      writeBoard(accessToken, title, contents, idx)(dispatch);
    }    
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardWrite);
