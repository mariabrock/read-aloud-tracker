import React from 'react';
import './SingleBook.scss';

import bookData from '../../../helpers/data/booksData';

class SingleBook extends React.Component {
  state = {
    book: {},
  }

  componentDidMount() {
    const { bookId } = this.props.match.params;
    console.log(bookId);
    bookData.getSingleBook(bookId)
      .then((response) => {
        this.setState({ book: response.data });
      })
      .catch((err) => console.error('error in get single book', err));
  }

  render() {
    const { book } = this.state;
    return (
      <div className="SingleBook col-4">
      <div className="card">
        <img src={book.imageUrl} className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">{book.title}</h5>
            <p>By {book.author}</p>
            <p>Pages: {book.numOfPages}</p>
            <p>Goal Date: {book.goalDate}</p>
            {/* <button className ="btn btn-danger" onClick={this.deleteBookEvent}>X</button> */}
          </div>
      </div>
    </div>
    );
  }
}

export default SingleBook;
