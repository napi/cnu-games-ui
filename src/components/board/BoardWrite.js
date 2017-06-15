import React, {Component} from "react";
import {PropTypes} from "prop-types";
import "./board.scss";

export default class BoardWrite extends Component {
  static propTypes = {
    setBoard: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      title: '', 
      contents: ''
    };
  }

  handleChange(event) {
    var obj = {};
    obj[event.target.name] = event.target.value;
    this.setState(obj);
  }

  _onSubmitBoard(event) {
    let accessToken = window.localStorage.getItem("accessToken");        
    this.props.setBoard(accessToken, this.state.title, this.state.contents);
    event.preventDefault();
  }

  render() {
    return (
      <div id="boardWrite">
        <h3>게시판 글쓰기</h3>
        <form action="#" onSubmit={this._onSubmitBoard.bind(this)}>
          <label>제목 : <input type="text" name="title" onChange={this.handleChange.bind(this)} /> </label>

          <textarea name="contents" onChange={this.handleChange.bind(this)}/>
          <input type="submit" value="입력" />
        </form>
      </div>
    )
  }
}