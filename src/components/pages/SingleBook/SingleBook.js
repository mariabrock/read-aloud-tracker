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

  getRecordData = (bookId) => {
    recordsData.getRecordsByBookId(bookId)
      .then((records) => this.setState({ records }))
      .catch((err) => console.error('error in get records', err));
  }

  deleteRecord = (recordId) => {
    const { bookId } = this.props.match.params;
    recordsData.deleteRecord(recordId)
      .then(() => this.getRecordData(bookId))
      .catch((err) => console.error('error in get deleteRecord', err));
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
        {/* <h1 className="book-title">{book.title}</h1> */}
        <div className="col-sm-4">
        <div className="card">
        <img src={book.imageUrl} className="card-img-top" id="singleBook-image" alt={book.imageUrl} />
          <div className="card-body">
            <h5 className="card-title">{book.title}</h5>
            <p>By {book.author}</p>
            <p>Total Pages: {book.numOfPages}</p>
            <p>Goal Date: {book.goalDate}</p>
            <Link className="btn btn-warning" to={`/book/${bookId}/edit`}>Edit Book</Link>
            <Link className="btn btn-success" to={`/record/${bookId}/new`}>Add A Record</Link>
          </div>
      </div>
        </div>
        <div className="col-sm-6">
          <div className="d-flex flex-wrap">
            {this.state.records.map((record) => <Record key={record.id} record={record} deleteRecord={this.deleteRecord} />)}
          </div>
        </div>
      </div>
    );
  }
}

export default SingleBook;
