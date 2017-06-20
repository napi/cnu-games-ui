import React, {Component} from "react";
import {PropTypes} from "prop-types";
import ReactModal from 'react-modal';
import "./board.scss";

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

export default class BoardWrite extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    contents: PropTypes.string.isRequired,
    setBoard: PropTypes.func.isRequired,
    showModal:PropTypes.bool.isRequired,
    closeModal:PropTypes.func.isRequired    
  }

  constructor(props) {
    super(props);
    this.handleCloseModal = this.handleCloseModal.bind(this);    
    this.state = {
      title: '', 
      contents: ''
    };
  }

  componentDidMount() {
    let obj = {
      title: this.props.title,
      contents: this.props.contents,
    };
    this.setState(obj);
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
    this.props.setBoard(accessToken, this.state.title, this.state.contents, this.props.idx);
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
          <h3>게시판 글쓰기</h3>
          <form action="#" onSubmit={this._onSubmitBoard.bind(this)}>
            <div>
              <label>제목 : </label><input type="text" name="title" onChange={this.handleChange.bind(this)} value={this.state.title} />
            </div>
            <div>
              <textarea name="contents" onChange={this.handleChange.bind(this)} value={this.state.contents} style={style}/>
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