import React, {Component} from "react";
import BoardWriteContainer from '../../containers/BoardWriteContainer';
import CommentContainer from '../../containers/CommentContainer';
import {browserHistory} from "react-router";
import {PropTypes} from "prop-types";
import "./board.scss";

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

export default class Board extends Component {
  static propTypes = {
    params: PropTypes.object.isRequired,
    board: PropTypes.object.isRequired,
    getBoard: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    isLogin: PropTypes.bool.isRequired,
    openModal:PropTypes.func.isRequired,    
    deleteBoard:PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentWillReceiveProps(nextProp) {    
    if (!this.props.isLogin
      && nextProp.isLogin) {      
      this.props.getBoard(this.props.params.idx);
    }
  }

  componentDidMount() {    
    if (this.props.isLogin) {
      this.props.getBoard(this.props.params.idx);
    }
  }

  _onClickList() {
    browserHistory.push(`/board`);
  }

  handleOpenModal () {
    this.props.openModal();
  }

  handleDelete(idx) {
    if (confirm('정말로 삭제하시겠습니까?')) {
      this.props.deleteBoard(idx);
    }    
  }

  render() {
    let board = this.props.board;
    if (!board || !board.idx || board.idx != this.props.params.idx) {
      return null;
    }

    const style = {

    }
    return (
      <div id="board">
        <article>
          <div className="board-header">
            <h3>
              <span>제목 : {board.title}</span><br/>
            </h3>
              <span>작성자 : {board.cnuUser.name}</span>
            
          </div>
          <div className="board-body">
            <h3>본문</h3>
            <p>{board.contents}</p>
          </div>
          <div className="board-footer">
            {this.props.profile.idx == board.cnuUser.idx && <button onClick={this.handleOpenModal.bind(this)}>수정하기</button>}
            {this.props.profile.idx == board.cnuUser.idx && <button onClick={this.handleDelete.bind(this, board.idx)}>삭제하기</button>}
            <button onClick={this._onClickList.bind(this)}>목록으로</button>
          </div>
        </article>
        <CommentContainer boardIdx={board.idx} />

        <BoardWriteContainer title={board.title} contents={board.contents} idx={board.idx} />
      </div>
    )
  }
}