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
    this.setState({ duration: e.target.value * 1 });
  }

  numOfPagesReadChange = (e) => {
    e.preventDefault();
    this.setState({ numOfPagesRead: e.target.value * 1 });
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
      bookId,
      date: new Date(),
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
          <div className="form-row">
            <div className="col-md-12">
              <h1>Record Info</h1>
                <label htmlFor="duration"></label>
                  <input
                    type="text"
                    className="form-control"
                    id="duration"
                    placeholder="Enter Duration"
                    value={duration}
                    onChange={this.durationChange}
                    />
                <label htmlFor="pages-read"></label>
                      <input
                        type="text"
                        className="form-control"
                        id="pages-read"
                        placeholder="Enter Total Pages Read"
                        value={numOfPagesRead}
                        onChange={this.numOfPagesReadChange}
                        />
            </div>
          </div>
            { recordId
              ? <button className="btn btn-primary" onClick={this.editRecordEvent}>Update Record</button>
              : <button className="btn btn-primary" onClick={this.saveRecordEvent}>Save Record</button>
            }
        </div>
            </form>
    );
  }
}

export default RecordForm;
