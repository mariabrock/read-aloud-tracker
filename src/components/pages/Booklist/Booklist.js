import React from 'react';
import { Link } from 'react-router-dom';
import './Booklist.scss';

import booksData from '../../../helpers/data/booksData';
import List from '../../shared/List/List';
import smash from '../../../helpers/data/smash';

class Booklist extends React.Component {
  state = {
    allBooks: [],
    completeBooks: [],
    wishListBooks: [],
    inProgressBooks: [],
    selectedBooks: [],
  }

  getBooks = () => {
    smash.smash()
      .then((smashObj) => this.setState({ allBooks: smashObj.allBooks, selectedBooks: smashObj.allBooks, records: smashObj.records }))
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
                <button className="btn btn-primary">Complete</button>
                <button className="btn btn-warning">In-Progress</button>
                <button className="btn btn-danger">Wishlist</button>
                <button className="btn btn-success">All Books</button>
                <div className="booklist d-flex flex-wrap">
                  {this.state.selectedBooks.map((book) => (<List key={book.id} book={book} deleteBook={this.deleteBook} />))}
                </div>
            </div>
    );
  }
}

export default Booklist;
