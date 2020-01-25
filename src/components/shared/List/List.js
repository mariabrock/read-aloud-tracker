import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

import './List.scss';
import listShape from '../../../helpers/propz/listShape';
import bookShape from '../../../helpers/propz/bookShape';

class List extends React.Component {
    static propTypes = {
      book: bookShape.bookShape,
      list: listShape.listShape,
    }

    render() {
      const { book } = this.props;
      return (
    <div className="List col-md-6 col-lg-3">
        <div className="card">
            <div className="card-body">
              {/* <button className="btn btn-danger" onClick={this.deleteBookEvent}>X</button> */}
              <h5 className="card-title">{book.title}</h5>
              <img src={book.imageUrl} className="card-img-top" alt={book.title} />
                <Link className="btn btn-primary" to={`/book/${book.id}`}>View</Link>
            </div>
        </div>
    </div>
      );
    }
}

export default List;
