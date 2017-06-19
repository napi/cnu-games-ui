import React, {Component} from "react";
import ReactModal from 'react-modal';
import BoardWriteContainer from '../../containers/BoardWriteContainer';
import {browserHistory} from "react-router";
import {PropTypes} from "prop-types";
import "./board.scss";

export default class Board extends Component {
  static propTypes = {
    params: PropTypes.object.isRequired,
    board: PropTypes.object.isRequired,
    getBoard: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    showModal:PropTypes.bool.isRequired,
    openModal:PropTypes.func.isRequired,
    closeModal:PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  componentDidMount() {
    let accessToken = window.localStorage.getItem("accessToken");
    this.props.getBoard(accessToken, this.props.params.idx);
  }  

  _onClickList() {
    browserHistory.push(`/board`);
  }

  handleOpenModal () {
    this.props.openModal();
  }
  
  handleCloseModal () {
    this.props.closeModal();
  }

  render() {
    let board = this.props.board;
    if (!board || !board.idx) {
      return null;
    }

    return (
      <div id="board">
        <div className="board-header">
          <h3>
            <span>제목 : {board.title}</span><br/>
            <span>작성자 : {board.cnuUser.name}</span>
          </h3>
        </div>
        <div className="board-body">
          <h3>본문</h3>
          <p>{board.contents}</p>
        </div>
        <div className="board-footer">
          {this.props.profile.idx == board.cnuUser.idx && <button onClick={this.handleOpenModal.bind(this, board.idx)}>수정하기</button>}
          <button onClick={this._onClickList.bind(this)}>목록으로</button>
        </div>

        <ReactModal 
           isOpen={this.props.showModal}
           contentLabel="onRequestClose Example"
           onRequestClose={this.handleCloseModal}
        >
          <BoardWriteContainer title={board.title} contents={board.contents} idx={board.idx} />
          <button onClick={this.handleCloseModal}>창닫기</button>
        </ReactModal>        
      </div>
    )
  }
}