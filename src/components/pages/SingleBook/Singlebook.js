import React from 'react';
import './SingleBook.scss';

import bookShape from '../../../helpers/propz/bookShape';

class SingleBook extends React.Component {
  static propTypes = {
    book: bookShape.bookShape,
    // deleteBook: this.propTypes.func,
  }

  render() {
    const { book } = this.props;
    return (
      <div className="SingleBook col-4">
      <div className="card">
        <img src={book.imageUrl} className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">{book.title}</h5>
            <p>By {book.author}</p>
            <p>Pages: {book.numOfPages}</p>
            <p>Goal Date: {book.goalDate}</p>
            <button className ="btn btn-danger" onClick={this.deleteBookEvent}>X</button>
          </div>
      </div>
    </div>
    );
  }
}

export default SingleBook;
