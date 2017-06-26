import React, {Component} from "react";
import {PropTypes} from "prop-types";
import ReactModal from 'react-modal';
// import "./board.scss";

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '0%',
    transform             : 'translate(-50%, -50%)'
  }
};

export default class CommentWrite extends Component {
  static propTypes = {
    boardIdx: PropTypes.number.isRequired,
    parentIdx: PropTypes.number.isRequired,
    setComment: PropTypes.func.isRequired,
    showModal:PropTypes.bool.isRequired,
    closeModal:PropTypes.func.isRequired    
  }

  constructor(props) {
    super(props);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.state = {
      comment: ''
    };
  }
  
  handleCloseModal () {
    this.props.closeModal();
  }

  handleChange(event) {
    var obj = {};
    obj[event.target.name] = event.target.value;
    this.setState(obj);
  }

  _onSubmitBoard(event) {
    let accessToken = window.localStorage.getItem("accessToken");
    this.props.setComment(accessToken, this.props.boardIdx, this.props.parentIdx, this.state.comment);
    this.setState({'comment': ''})
    event.preventDefault();
  }

  render() {
    const style = {
      maxWidth:'400px',
      minWidth:'400px',
      maxHeight:'150px',
      minHeight:'150px',
      resize:'none',
      padding:'9px',
      boxSizing:'border-box',
      fontSize:'15px'
    };
    return (      
      <div id="boardWrite">
        <ReactModal 
           isOpen={this.props.showModal}
           contentLabel="onRequestClose Example"
           onRequestClose={this.handleCloseModal}
           style={customStyles}
        >
          <h3>게시판 덧글쓰기</h3>
          <form action="#" onSubmit={this._onSubmitBoard.bind(this)}>
            <div>
              <textarea name="comment" onChange={this.handleChange.bind(this)} value={this.state.comment} style={style}/>
            </div>            
            <div>
              <input type="submit" value="입력" />
            </div>
          </form>
          
          <button onClick={this.handleCloseModal}>창닫기</button>
        </ReactModal>        
      </div>
    )
  }
}