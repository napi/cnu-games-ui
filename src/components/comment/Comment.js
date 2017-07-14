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
    getComments:PropTypes.func.isRequired,
    isLogin:PropTypes.bool.isRequired
  }

  constructor(props) {
    super(props);
  }

  handleOpenModal (parentIdx) {
    this.props.openModal(parentIdx);
  }

  componentWillReceiveProps(nextProp) {
    if (!this.props.isLogin
      && nextProp.isLogin) {
      this.props.getComments(this.props.boardIdx);
    }
  }

  componentWillMount() {
    if (this.props.isLogin) {
      this.props.getComments(this.props.boardIdx);  
    }
  }

  render() {
    let comments = this.props.comments;
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
