import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import './Record.scss';

import recordShape from '../../../helpers/propz/recordShape';

class Record extends React.Component {
  static propTypes = {
    record: recordShape.recordShape,
    deleteRecord: PropTypes.func,
  }

  deleteRecordEvent = (e) => {
    e.preventDefault();
    const { deleteRecord, record } = this.props;
    deleteRecord(record.id);
  }

  render() {
    const { record } = this.props;
    return (
      <div className="Record">
        <div className="card">
            <div className="card-body">
              <p className="card-text">Time: {record.duration}</p>
              <p className="card-text">Pages: {record.numOfPagesRead}</p>
              <p className="card-text"><small className="text-muted"><p>{moment(record.date).format('MMMM Do YYYY, h:mm:ss a')}</p></small></p>
              <button className ="del-record btn btn-danger" onClick={this.deleteRecordEvent}>X</button>
            </div>
        </div>
    </div>
    );
  }
}

export default Record;
