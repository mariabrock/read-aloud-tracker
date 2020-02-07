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
        <h1>Imagine Out Loud</h1>
        <div class="card text-white bg-info col-sm-4" id="quote">
          <div class="col mb-4">
            <div class="card-body">
              <h5 class="card-title">“It's a dangerous business, Frodo, going out your door. You step onto the road, and if you don't keep your feet, there's no knowing where you might be swept off to.”</h5>
              <p class="card-text">― J.R.R. Tolkien, The Lord of the Rings</p>
            </div>
          </div>
        </div>
        <button className="btn btn-success" onClick={this.loginClickEvent}>Login With Facebook</button>
      </div>
    );
  }
}
export default Auth;
