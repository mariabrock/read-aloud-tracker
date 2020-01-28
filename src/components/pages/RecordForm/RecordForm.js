import React from 'react';
import './RecordForm.scss';

import recordsData from '../../../helpers/data/recordsData';
import authData from '../../../helpers/data/authData';

class RecordForm extends React.Component {
  state = {
    duration: '',
    numOfPagesRead: '',
  }

  componentDidMount() {
    const { recordId } = this.props.match.params;
    if (recordId) {
      recordsData.getSingleRecord(recordId)
        .then((response) => {
          const record = response.data;
          this.setState({
            duration: record.duration,
            numOfPagesRead: record.numOfPagesRead,
          });
        })
        .catch((err) => console.error('error in get single record', err));
    }
  }

  durationChange = (e) => {
    e.preventDefault();
    this.setState({ duration: e.target.value });
  }

  numOfPagesReadChange = (e) => {
    e.preventDefault();
    this.setState({ numOfPagesRead: e.target.value });
  }

  editRecordEvent = (e) => {
    e.preventDefault();
    const { bookId, recordId } = this.props.match.params;
    const editRecord = {
      duration: this.state.duration,
      numOfPagesRead: this.state.numOfPagesRead,
      uid: authData.getUid(),
      bookId,
    };
    recordsData.editRecord(recordId, editRecord)
      .then(() => this.props.history.push(`/book/${bookId}`))
      .catch((err) => console.error('error from edit record', err));
  }

  saveRecordEvent = (e) => {
    e.preventDefault();
    const { bookId } = this.props.match.params;
    const newRecord = {
      duration: this.state.duration,
      numOfPagesRead: this.state.numOfPagesRead,
      uid: authData.getUid(),
    };
    recordsData.saveRecord(newRecord)
      .then(() => this.props.history.push(`/book/${bookId}`))
      .catch((err) => console.error('error from save record', err));
  }

  render() {
    const {
      duration,
      numOfPagesRead,
    } = this.state;
    const { recordId } = this.props.match.params;

    return (
      <form className="RecordForm">
        <div className="form-group">
          <label htmlFor="duration">How Long Did You Read?</label>
            <input
              type="text"
              className="form-control"
              id="duration"
              placeholder="Enter Duration"
              value={duration}
              onChange={this.durationChange}
              />
          <label htmlFor="pages-read">Number of Total Pages Read</label>
                <input
                  type="text"
                  className="form-control"
                  id="pages-read"
                  placeholder="Enter Total Pages Read"
                  value={numOfPagesRead}
                  onChange={this.numOfPagesReadChange}
                  />
                </div>
                { recordId
                  ? <button className="btn btn-secondary" onClick={this.editRecordEvent}>Update Record</button>
                  : <button className="btn btn-secondary" onClick={this.saveRecordEvent}>Save Record</button>
                }
            </form>
    );
  }
}

export default RecordForm;
