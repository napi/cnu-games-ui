import React, {Component} from "react";
import {PropTypes} from "prop-types";
import "./board.scss";

export default class Board extends Component {
  static propTypes = {
    params: PropTypes.object.isRequired,
    board: PropTypes.object.isRequired,
    getBoard: PropTypes.func.isRequired
  }

  componentDidMount() {
    let accessToken = window.localStorage.getItem("accessToken");
    this.props.getBoard(accessToken, this.props.params.idx);
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
      </div>
    )
  }
}