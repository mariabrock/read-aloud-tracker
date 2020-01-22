import React from 'react';
import firebase from 'firebase';
import 'firebase/auth';

import './Auth.scss';

class Auth extends React.Component {
  loginClickEvent = (e) => {
    e.preventDefault();
    const provider = new firebase.auth.FacebookAuthProvider();
    provider.addScope('user_birthday');
    firebase.auth().signInWithPopup(provider).then((result) {
      // This gives you a Facebook Access Token.
      const token = result.credential.accessToken;
      // The signed-in user info.
      const user = result.user;
    });
  }

  // render() {
  //   return (
  //   <div className="Auth">
  //       <h1>Auth Page</h1>
  //       <button className="btn btn-danger" onClick={this.loginClickEvent}>Login With Google</button>
  //     </div>
  //   );
  // }

export default Auth;
