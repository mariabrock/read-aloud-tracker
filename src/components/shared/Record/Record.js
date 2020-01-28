import React from 'react';
import './Record.scss';

import recordShape from '../../../helpers/propz/recordShape';

class Record extends React.Component {
  static propTypes = {
    record: recordShape.recordShape,
  }

  render() {
    const { record } = this.props;
    return (
      <div className="Record">
        <div className="card">
            <div className="card-body">
              <p className="card-text">Time: {record.duration}</p>
              <p className="card-text">Pages: {record.numOfPagesRead}</p>
              <p className="card-text"><small className="text-muted">Date: Last updated 3 mins ago</small></p>
            </div>
        </div>
    </div>
    );
  }
}

export default Record;
