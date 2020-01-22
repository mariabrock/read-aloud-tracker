import React from 'react';
import firebase from 'firebase';

import './App.scss';
import '../styles/index.scss';
import '../styles/_variables.scss';

class App extends React.Component {
state = {
  authed: false,
}

componentDidMount() {
  this.removeListener = firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      this.setState({ authed: true });
    } else {
      this.setState({ authed: false });
    }
  });
}

componentWillUnmount() {
  this.removeListener();
}

render() {
  // const { authed } = this.state;
  return (
      <div className="App">
        <button className="btn btn-danger">Book Tracker Button</button>
      </div>
  );
}
}

export default App;
