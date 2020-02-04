import React from 'react';
import firebase from 'firebase';
import 'firebase/auth';

import './Auth.scss';

class Auth extends React.Component {
  loginClickEvent = (e) => {
    e.preventDefault();
    const provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider);
  }

  render() {
    return (
    <div className="Auth">
        <h1>Auth Page</h1>
        <button className="btn btn-success" onClick={this.loginClickEvent}>Login With Facebook</button>
      </div>
    );
  }
}
export default Auth;
