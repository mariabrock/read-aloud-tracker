import React from 'react';
import { Link } from 'react-router-dom';
import './Booklist.scss';

import Smash from '../../shared/Smash/Smash';
import booksData from '../../../helpers/data/booksData';
import authData from '../../../helpers/data/authData';
import List from '../../shared/List/List';

class Booklist extends React.Component {
  state = {
    books: [],
  }

  getBooks = () => {
    booksData.getBooksByUid(authData.getUid())
      .then((books) => this.setState({ books }))
      .catch((err) => console.error('error from get books', err));
  }

  componentDidMount() {
    this.getBooks();
  }

  deleteBook =(bookId) => {
    booksData.deleteBook(bookId)
      .then(() => this.getBooks())
      .catch((err) => console.error('error deleting book', err));
  }

  render() {
    return (
            <div className="Booklist">
                <h1>All Books</h1>
                <Link className="btn btn-secondary" to={'/book/new'}>Add New Book</Link>
                <div className="booklist d-flex flex-wrap">
                  <Smash></Smash>
                  {this.state.books.map((book) => (<List key={book.id} book={book} deleteBook={this.deleteBook} />))}
                </div>
            </div>
    );
  }
}

export default Booklist;
