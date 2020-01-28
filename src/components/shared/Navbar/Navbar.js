import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import firebase from 'firebase/app';
import 'firebase/auth';
import {
  // faHome,
  faList,
  faClock,
  // faBookmark,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Navbar.scss';

class Navbar extends React.Component {
    static propTypes = {
      authed: PropTypes.bool,
    }

    logMeOut = (e) => {
      e.preventDefault();
      firebase.auth().signOut();
    }

    render() {
      const { authed } = this.props;
      const buildNavbar = () => {
        if (authed) {
          return (
            <ul className="navbar-nav ml-auto">
              {/* <li className="nav-item">
                <Link className="nav-link" to="/booklist"><FontAwesomeIcon icon={faHome}/></Link>
              </li> */}
              {/* <li className="nav-item">
                <Link className="nav-link" to="/book/:bookId"><FontAwesomeIcon icon={faBookmark}/></Link> */}
              {/* </li> */}
              <li className="nav-item">
                <Link className="nav-link" to="/record"><FontAwesomeIcon icon={faClock}/></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/"><FontAwesomeIcon icon={faList} /></Link>
              </li>
              <li className="nav-item">
                <button className="nav-link btn btn-primary" onClick={this.logMeOut}>Logout</button>
              </li>
            </ul>
          );
        }
        return (<ul className="navbar-nav ml-auto"></ul>);
      };

      return (
        <div className="MyNavbar">
            <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
              <Link className="navbar-brand" to="/">Imagine Out Loud</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                { buildNavbar() }
                </div>
            </nav>
        </div>
      );
    }
}

export default Navbar;
