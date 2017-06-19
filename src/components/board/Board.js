import React, {Component} from "react";
import {PropTypes} from "prop-types";
import {browserHistory} from "react-router";
import ReactModal from 'react-modal';
import BoardWriteContainer from "../../containers/BoardWriteContainer";
import "./board.scss";

export default class Board extends Component {
  static propTypes = {
    boards: PropTypes.array.isRequired,
    page: PropTypes.number.isRequired,
    getBoards:PropTypes.func.isRequired,
    showModal:PropTypes.bool.isRequired,
    openModal:PropTypes.func.isRequired,
    closeModal:PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  
  handleOpenModal () {
    this.props.openModal();
  }
  
  handleCloseModal () {
    this.props.closeModal();
  }

  componentDidMount() {
    let accessToken = window.localStorage.getItem("accessToken");
    this.props.getBoards(accessToken);
  }

  render() {
    let boards = this.props.boards;
    if (!boards) {
      return null;
    }

    return (
      <div id="boards">
        <table width="80%">
          <colgroup>
            <col width="60px" />
            <col width="" />
            <col width="120px" />
            <col width="80px" />
            <col width="80px" />
          </colgroup>
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>글쓴이</th>
              <th>조회</th>
              <th>추천</th>
            </tr>
          </thead>
          <tbody>
            {boards.map(board => this._renderBoard(board))}
          </tbody>
        </table>
        <div>
          <button onClick={this.handleOpenModal}>글쓰기</button>
        </div>
        <ReactModal 
           isOpen={this.props.showModal}
           contentLabel="onRequestClose Example"
           onRequestClose={this.handleCloseModal}
        >
          <BoardWriteContainer title="" contents="" />
          <button onClick={this.handleCloseModal}>창닫기</button>
        </ReactModal>        
      </div>
    )
  }

  _onClickBoard(idx) {
    browserHistory.push(`/board/${idx}`);
  }

  _renderBoard(board) {
    return (
      <tr key={board.idx} onClick={this._onClickBoard.bind(this, board.idx)}>
        <td>{board.idx}</td>
        <td>{board.title}</td>
        <td>{board.cnuUser.name}</td>
        <td></td>
        <td></td>
      </tr>
    )
  }}
