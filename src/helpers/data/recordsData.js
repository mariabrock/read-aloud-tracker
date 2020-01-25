import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getRecordsByBookId = (bookId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/records.json?orderBy="bookId"&equalTo="${bookId}"`)
    .then((result) => {
      const allRecordsObj = result.data;
      const records = [];
      if (allRecordsObj != null) {
        Object.keys(allRecordsObj).forEach((recordId) => {
          const newRecord = allRecordsObj[recordId];
          newRecord.id = recordId;
          records.push(newRecord);
        });
      }
      resolve(records);
    })
    .catch((err) => {
      reject(err);
    });
});

const getSingleRecord = (recordId) => axios.get(`${baseUrl}/records/${recordId}.json`);

const deleteRecord = (recordId) => axios.delete(`${baseUrl}/records/${recordId}.json`);

const saveRecord = (newRecord) => axios.post(`${baseUrl}/pins.json`, newRecord);

const editRecord = (recordId, pin) => axios.put(`${baseUrl}/pins/${recordId}.json`, pin);

export default {
  getRecordsByBookId,
  getSingleRecord,
  deleteRecord,
  saveRecord,
  editRecord,
};
