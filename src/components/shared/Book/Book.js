import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import bookShape from '../../../helpers/propz/bookShape';
import './Book.scss';

class Book extends React.Component {
  static propTypes = {
    book: bookShape.bookShape,
    viewBook: PropTypes.func,
  }

  // deleteBookEvent = (e) => {
  //   e.preventDefault();
  //   const { deleteBook, book } = this.props;
  //   deleteBook(book.id);
  // }

  viewBookEvent = (e) => {
    e.preventDefault();
    const { viewBook, book } = this.props;
    viewBook(book.id);
  }

  render() {
    const { book } = this.props;
    return (
    <div className="Book col-8 bg-dodger-blue">
      <div className="card">
        <img src={book.imageUrl} className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">{book.title}</h5>
            <Link className="btn btn-primary" to={`/book/${book.Id}`}>View</Link>
            <Link className="btn btn-warning" to={`/book/${book.Id}/edit/`}>Edit</Link>
          </div>
      </div>
    </div>
    );
  }
}

export default Book;
