import React, {Component} from "react";
import {PropTypes} from "prop-types";
import {browserHistory} from "react-router";
// import BoardWriteContainer from "../../containers/BoardWriteContainer";
// import "./board.scss";

export default class Comment extends Component {
  static propTypes = {
    comments: PropTypes.array.isRequired,
    // openModal:PropTypes.func.isRequired,    
    getComments:PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    // this.handleOpenModal = this.handleOpenModal.bind(this);    
  }

  // handleOpenModal () {
  //   this.props.openModal();
  // }
  
  componentDidMount() {
    let accessToken = window.localStorage.getItem("accessToken");
    this.props.getComments(accessToken);
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
      </div>
    )
  }

  _renderComment(comment) {
    return (
      <li>
        <span>{comment.cnuUser.name}</span><span>{comment.comment}</span>
      </li>
    )
  }}
