import React from 'react';
import firebase from 'firebase';
import 'firebase/auth';

import './Auth.scss';

class Auth extends React.Component {
  loginClickEvent = (e) => {
    e.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  }

  render() {
    return (
    <div className="Auth">
        <h1>Imagine Out Loud</h1>
        <div className="card text-back col-sm-4" id="quote">
          <div className="col mb-4">
            <div className="card-body">
              <h5 className="card-title">“It's a dangerous business, Frodo, going out your door. You step onto the road, and if you don't keep your feet, there's no knowing where you might be swept off to.”</h5>
              <p className="card-text">― J.R.R. Tolkien, The Lord of the Rings</p>
            </div>
          </div>
        </div>
        <button className="btn btn-success" onClick={this.loginClickEvent}>Login With Google</button>
      </div>
    );
  }
}
export default Auth;
