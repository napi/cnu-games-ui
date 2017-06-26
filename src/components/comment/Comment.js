import React, {Component} from "react";
import {PropTypes} from "prop-types";
import {browserHistory} from "react-router";
import CommentWriteContainer from "../../containers/CommentWriteContainer";
// import "./board.scss";

export default class Comment extends Component {
  static propTypes = {
    boardIdx: PropTypes.number.isRequired,
    comments: PropTypes.array.isRequired,
    openModal:PropTypes.func.isRequired,    
    getComments:PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
  }

  handleOpenModal (parentIdx) {
    this.props.openModal(parentIdx);
  }
  
  componentDidMount() {
    let accessToken = window.localStorage.getItem("accessToken");
    this.props.getComments(accessToken, this.props.boardIdx);
  }

  render() {
    let comments = this.props.comments;
    if (!comments) {
      return null;
    }

    return (
      <div id="comments">
        <ul>
          {comments.map(comment => this._renderComment(comment))}
        </ul>
        <div>
          <button onClick={this.handleOpenModal.bind(this, 0)}>덧쓰기</button>
        </div>                
        <CommentWriteContainer boardIdx={this.props.boardIdx}/>
        <div>
          <button onClick={this.handleOpenModal.bind(this, 0)}>덧쓰기</button>
        </div>        
      </div>
    )
  }

  _renderComment(comment) {
    return (
      <li key={comment.idx}>
        <p>
          <span>{comment.cnuUser.name}</span><span>{comment.comment}</span><span>작성자 : {comment.cnuUser.name}</span>
        </p>
        <p>
          <span onClick={this.handleOpenModal.bind(this, comment.idx)}>[답글]</span>
        </p>
      </li>
    )
  }}
