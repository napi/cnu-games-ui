import React from "react";
import ReactDOM from "react-dom";
import fetch from "isomorphic-fetch";

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    fetch('http://localhost:8000/example/helloUser')
      .then(response => {
        console.log(response);
        console.log(response.body);
        if (response.status >= 400) {
          throw new Error('Bad response from server');
        }
        return response.json();
      })
      .then(json => {
        console.log('----');
        console.log(json)
        console.log('----');
      });
  }

  render() {
    return (
      <div>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
