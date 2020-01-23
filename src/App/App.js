import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConnection from '../helpers/data/connections';

import Auth from '../components/pages/Auth/Auth';
import Navbar from '../components/shared/Navbar/Navbar';
import Home from '../components/pages/Home/Home';
import Booklist from '../components/pages/Booklist/Booklist';
import BookForm from '../components/pages/BookForm/BookForm';
import SingleBook from '../components/pages/SingleBook/Singlebook';
import RecordForm from '../components/pages/RecordForm/RecordForm';

import './App.scss';
import '../styles/index.scss';
import '../styles/_variables.scss';


const PublicRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = (props) => (authed === false ? <Component {...props} {...rest}/> : <Redirect to={{ pathname: '/', state: { from: props.location } }} />);
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};
const PrivateRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = (props) => (authed === true ? <Component {...props} {...rest}/> : <Redirect to={{ pathname: '/auth', state: { from: props.location } }} />);
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

firebaseConnection();
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
    const { authed } = this.state;
    return (
      <div className="App">
        <Router>
          <Navbar authed={authed} />
          <Switch>
            <PublicRoute path="/auth" exact component={Auth} authed={authed} />
            <PrivateRoute path="/" exact component={Home} authed={authed} />
            <PrivateRoute path="/booklist" exact component={Booklist} authed={authed} />
            <PrivateRoute path="/record" exact component={RecordForm} authed={authed} />
            <PrivateRoute path="/book/:bookId/edit" exact component={BookForm} authed={authed} />
            <PrivateRoute path="/book/:bookId/new" exact component={BookForm} authed={authed} />
            <PrivateRoute path="/book/:bookId" exact component={SingleBook} authed={authed} />
            <PrivateRoute path="/record/:recordId/edit" exact component={RecordForm} authed={authed} />
            <PrivateRoute path="/record/:recordId/new" exact component={RecordForm} authed={authed} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
