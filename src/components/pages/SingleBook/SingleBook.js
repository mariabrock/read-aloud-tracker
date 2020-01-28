import React from 'react';
import { Link } from 'react-router-dom';
import './SingleBook.scss';

import bookData from '../../../helpers/data/booksData';
import Record from '../../shared/Record/Record';
import recordsData from '../../../helpers/data/recordsData';

class SingleBook extends React.Component {
  state = {
    book: {},
    records: [],
  }

  componentDidMount() {
    const { bookId } = this.props.match.params;
    bookData.getSingleBook(bookId)
      .then((response) => {
        this.setState({ book: response.data });
        recordsData.getRecordsByBookId(bookId)
          .then((result) => this.setState({ records: result }));
      })
      .catch((err) => console.error('error in get single book', err));
  }

  render() {
    const { book } = this.state;
    const { bookId } = this.props.match.params;
    return (
      <div className="SingleBook">
        <div className=" col-md-6">
        <div className="card">
        <img src={book.imageUrl} className="card-img-top" alt={book.imageUrl} />
          <div className="card-body">
            <h5 className="card-title">{book.title}</h5>
            <p>By {book.author}</p>
            <p>Pages: {book.numOfPages}</p>
            <p>Goal Date: {book.goalDate}</p>
            {/* <button className ="btn btn-danger" onClick={this.deleteBookEvent}>X</button> */}
            <Link className="btn btn-secondary" to={`/record/${bookId}/new`}>Add A Record</Link>
          </div>
      </div>
        </div>
        <div className=" col-md-6">
        <div>
      {this.state.records.map((record) => <Record key={record.id} record={record} />)}
      </div>
        </div>
    </div>
    );
  }
}

export default SingleBook;
