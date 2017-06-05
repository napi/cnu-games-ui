import React from "react";
import ReactDOM from "react-dom";
import client from './client';
import follow from './follow';

import {register} from './websocket-listener';

import SockJS from 'sockjs-client';
import Stomp from 'stompjs';
// import {browserHistory} from "react-router";
// import {syncHistoryWithStore} from "react-router-redux";
// import RootContainer from "./containers/RootContainer";
// import configureStore from "./store/configureStore";

// const store = configureStore();
// const history = syncHistoryWithStore(browserHistory, store);


// render(
//   <RootContainer store={store} history={history}/>,
//   document.getElementById('root')
// )

var root = 'http://localhost:8000/api';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {employees: []};
    this.stompClient;
  }

  componentDidMount() {
    this.loadFromServer(this.state.pageSize);

/*
    var socket = new SockJS('http://localhost:8000/gs-guide-websocket');
    var stompClient = Stomp.over(socket);
    stompClient.connect({}, function (frame) {
        console.log('Connected: ' + frame);
        stompClient.subscribe('/topic/greetings', function (greeting) {
            console.log(JSON.parse(greeting.body).content);
        });
        stompClient.subscribe('/topic/hello', function (greeting) {
            console.log("subscribe /topic/hello");
            console.log(JSON.parse(greeting.body).content);
        });
    });
    this.stompClient = stompClient;
*/

/*
    register([
      {
        route:'/topic/newEmployee', 
        callback : (message) => {
          console.log(message);
          stompClient.send("/app/hello2", {}, JSON.stringify({'name':JSON.parse(message.body).firstName}));
        }
      }
    ]);
*/
  }

  loadFromServer(pageSize) {
    follow(client, root, [
      {rel: 'employees', params: {size: pageSize}}]
    ).then(employeeCollection => {
      return client({
        method: 'GET',
        path: employeeCollection.entity._links.profile.href,
        headers: {'Accept': 'application/schema+json'}
      }).then(schema => {
        this.schema = schema.entity;
        return employeeCollection;
      });
    }).then(employeeCollection => {
      this.setState({
        employees: employeeCollection.entity._embedded.employees,
        attributes: Object.keys(this.schema.properties),
        pageSize: pageSize,
        links: employeeCollection.entity._links});
    });
  }

  sendMessage() { 
    console.log("sendMessage");
    console.log(this.stompClient);
    this.stompClient.send("/app/hello", {}, JSON.stringify({'name':document.getElementById('messageInput').value}));
  }

  connectServer() {
    var username = document.getElementById('connectServer').value;

    var socket = new SockJS('http://localhost:8000/gs-guide-websocket');
    var stompClient = Stomp.over(socket);
    stompClient.connect({'username':username}, function (frame) {
        console.log('Connected: ' + frame);
        stompClient.subscribe('/topic/greetings', function (greeting) {
            console.log(JSON.parse(greeting.body).content);
        });
        stompClient.subscribe('/topic/hello', function (greeting) {
            console.log("subscribe /topic/hello");
            console.log(JSON.parse(greeting.body).content);
        });
    });
    this.stompClient = stompClient;
  }

  render() {
    return (
      <div>
        <EmployeeList employees={this.state.employees}/>
        <input type="text" id="connectServer" />
        <input type="button" value="CONNECT" onClick={this.connectServer.bind(this)} />
        <input type="text" id="messageInput" />
        <input type="button" value="CLICK" onClick={this.sendMessage.bind(this)} />
      </div>
    )
  }
}

class EmployeeList extends React.Component{
  render() {
    var employees = this.props.employees.map(employee =>
      <Employee key={employee._links.self.href} employee={employee}/>
    );
    return (
      <table>
        <tbody>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Description</th>
          </tr>
          {employees}
        </tbody>
      </table>
    )
  }
}

class Employee extends React.Component{
  render() {
    return (
      <tr>
        <td>{this.props.employee.firstName}</td>
        <td>{this.props.employee.lastName}</td>
        <td>{this.props.employee.description}</td>
      </tr>
    )
  }
}

ReactDOM.render(
  <App />, 
  document.getElementById('root')
)
