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
      .then((smashObj) => this.setState({
        allBooks: smashObj.allBooks,
        selectedBooks: smashObj.allBooks,
        completeBooks: smashObj.completeBooks,
        wishListBooks: smashObj.wishListBooks,
        inProgressBooks: smashObj.inProgressBooks,
      }))
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

  showCompletedBooks = () => this.setState({ selectedBooks: this.state.completeBooks });

  showInProgressBooks = () => this.setState({ selectedBooks: this.state.inProgressBooks });

  showWishlistBooks = () => this.setState({ selectedBooks: this.state.wishListBooks });

  showAllBooks = () => this.setState({ selectedBooks: this.state.allBooks });

  render() {
    return (
            <div className="Booklist">
                <h1>All Books</h1>
                <Link className="btn btn-secondary" to={'/book/new'}>Add New Book</Link>
                <button className="btn btn-success" onClick={this.showAllBooks}>All Books</button>
                <button className="btn btn-danger" onClick={this.showCompletedBooks}>Complete</button>
                <button className="btn btn-warning" onClick={this.showInProgressBooks}>In-Progress</button>
                <button className="btn btn-primary" onClick={this.showWishlistBooks}>Wishlist</button>
                <div className="booklist d-flex flex-wrap">
                  {this.state.selectedBooks.map((book) => (<List key={book.id} book={book} deleteBook={this.deleteBook} />))}
                </div>
            </div>
    );
  }
}

export default Booklist;
