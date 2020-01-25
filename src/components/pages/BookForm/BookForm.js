import React from 'react';
import './BookForm.scss';

import booksData from '../../../helpers/data/booksData';
import authData from '../../../helpers/data/authData';

class BookForm extends React.Component {
  state = {
    bookTitle: '',
    bookAuthor: '',
    bookGoalDate: '',
    bookNumOfPages: '',
  }

  componentDidMount() {
    const { bookId } = this.props.match.params;
    if (bookId) {
      booksData.getSingleBook(bookId)
        .then((response) => {
          this.setState({
            bookTitle: response.data.title,
            bookImageUrl: response.data.imageUrl,
            bookAuthor: response.data.author,
            bookGoalDate: response.data.goalDate,
            bookNumOfPages: response.data.numOfPages,
          });
        })
        .catch((err) => console.error('error in get single book', err));
    }
  }

  titleChange = (e) => {
    e.preventDefault();
    this.setState({ bookTitle: e.target.value });
  }

  authorChange = (e) => {
    e.preventDefault();
    this.setState({ bookAuthor: e.target.value });
  }

  goalDateChange = (e) => {
    e.preventDefault();
    this.setState({ bookGoalDate: e.target.value });
  }

  numOfPagesChange = (e) => {
    e.preventDefault();
    this.setState({ bookNumOfPages: e.target.value });
  }

  imageUrlChange = (e) => {
    e.preventDefault();
    this.setState({ bookImageUrl: e.target.value });
  }

  saveBookEvent = (e) => {
    e.preventDefault();
    const newBook = {
      title: this.state.bookTitle,
      author: this.state.bookAuthor,
      goalDate: this.state.bookGoalDate,
      numOfPages: this.state.bookNumOfPages,
      imageUrl: this.state.bookImageUrl,
      uid: authData.getUid(),
    };
    booksData.saveBook(newBook)
      .then(() => this.props.history.push('/'))
      .catch((err) => console.error('error from save book', err));
  }

  render() {
    const {
      bookTitle,
      bookAuthor,
      bookGoalDate,
      bookNumOfPages,
      bookImageUrl,
    } = this.state;
    const { bookId } = this.props.match.params;

    return (
      <form className="BookForm">
        <div className="form-group">
          <label htmlFor="book-title">Book Title</label>
            <input
              type="text"
              className="form-control"
              id="book-title"
              placeholder="Enter Book Title"
              value={bookTitle}
              onChange={this.titleChange}
              />
          <label htmlFor="book-author">Book Author</label>
                <input
                  type="text"
                  className="form-control"
                  id="book-author"
                  placeholder="Enter Author Name"
                  value={bookAuthor}
                  onChange={this.authorChange}
                  />
          <label htmlFor="book-author">Goal Date</label>
                <input
                  type="text"
                  className="form-control"
                  id="goal-date"
                  placeholder="Enter Goal Date"
                  value={bookGoalDate}
                  onChange={this.goalDateChange}
                  />
          <label htmlFor="book-author">Number of Total Pages</label>
                <input
                  type="text"
                  className="form-control"
                  id="total-pages"
                  placeholder="Enter Total Pages"
                  value={bookNumOfPages}
                  onChange={this.numOfPagesChange}
                  />
          <label htmlFor="book-image">Book Image Url</label>
                <input
                  type="text"
                  className="form-control"
                  id="book-image"
                  placeholder="Enter Image Url"
                  value={bookImageUrl}
                  onChange={this.imageUrlChange}
                  />
                </div>
                { bookId
                  ? <button className="btn btn-secondary" onClick={this.editBookEvent}>Update Book</button>
                  : <button className="btn btn-secondary" onClick={this.saveBookEvent}>Save Book</button>
                }
            </form>
    );
  }
}

export default BookForm;
