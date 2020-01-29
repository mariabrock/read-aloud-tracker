import React from 'react';
import { Link } from 'react-router-dom';

class Smash extends React.Component {
  render() {
    return (
        <div className="btn-group">
            <button type="button" className="btn btn-warning dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            All Books
        </button>
        <div className="dropdown-menu">
            <Link className="dropdown-item" to="#">All Books</Link>
            <Link className="dropdown-item" to="#">Wishlist</Link>
            <Link className="dropdown-item" to="#">In Progress</Link>
            <Link className="dropdown-item" to="#">Completed</Link>
        </div>
        </div>
    );
  }
}

export default Smash;
