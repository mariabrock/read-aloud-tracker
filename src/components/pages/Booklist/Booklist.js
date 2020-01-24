import React from 'react';
import './Booklist.scss';

import booksData from '../../../helpers/data/booksData';
import authData from '../../../helpers/data/authData';
import Book from '../../shared/Book/Book';

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
                <div className="booklist d-flex flex-wrap">
                  {this.state.books.map((book) => (<Book key={book.id} book={book} deleteBook={this.deleteBook} />))}
                </div>
            </div>
    );
  }
}

export default Booklist;
