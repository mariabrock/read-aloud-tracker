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
              <p class="card-text">Time: {record.duration}</p>
              <p class="card-text">Pages:{record.numOfPagesRead}</p>
              <p class="card-text"><small class="text-muted">Date: Last updated 3 mins ago</small></p>
            </div>
        </div>
    </div>
    );
  }
}

export default Record;
