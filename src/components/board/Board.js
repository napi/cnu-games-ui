import React, {Component} from "react";
import {PropTypes} from "prop-types";
import {browserHistory} from "react-router";
import BoardWriteContainer from "../../containers/BoardWriteContainer";
import "./board.scss";

export default class Board extends Component {
  static propTypes = {
    boards: PropTypes.object.isRequired,
    openModal:PropTypes.func.isRequired,    
    getBoards:PropTypes.func.isRequired    
  }

  constructor(props) {
    super(props);
    this.handleOpenModal = this.handleOpenModal.bind(this);    
  }

  handleOpenModal () {
    this.props.openModal();
  }
  
  componentDidMount() {
    let accessToken = window.localStorage.getItem("accessToken");
    let page = 1;
    if (this.props.location.query.page) {
      page = this.props.location.query.page;
    }             
    this.props.getBoards(accessToken, page);
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
            {boards.content && boards.content.map(board => this._renderBoard(board))}
          </tbody>            
        </table>
        <div>
          {this._renderPaging(boards)}
        </div>
        <div>
          <button onClick={this.handleOpenModal}>글쓰기</button>
        </div>
        <BoardWriteContainer title="" contents="" />
      </div>
    )
  }

  _onClickBoard(idx) {
    browserHistory.push(`/board/${idx}`);
  }

  _onClickPage(page) {
    browserHistory.push(`/board?page=${page}`);
    let accessToken = window.localStorage.getItem("accessToken");
    this.props.getBoards(accessToken, page);
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
  }

  _renderPaging(board) {
    var pageSize = 5;
    var startIdx = (Math.floor(board.number / pageSize) * pageSize) + 1;
    var lastIdx = (Math.floor(board.number / pageSize) * pageSize) + pageSize;
    lastIdx = lastIdx < board.totalPages ? lastIdx : board.totalPages;

    var pages = [];
    if (startIdx != 1) {
      pages.push(<span key="first" onClick={this._onClickPage.bind(this, 1)}>&#60;&#60;</span>);
    }
    for (var i = startIdx ; i <= lastIdx ; i++) {
      pages.push(<span key={i} onClick={this._onClickPage.bind(this, i)}>{i}</span>);
    }
    if (lastIdx != board.totalPages) {
      pages.push(<span key="last" onClick={this._onClickPage.bind(this, board.totalPages)}>&#62;&#62;</span>); 
    }

    return (
      <div>
        {pages}
      </div>
    );
  }
}