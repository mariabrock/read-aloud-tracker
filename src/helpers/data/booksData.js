import axios from 'axios';
import apiKeys from '../apiKeys.json';
import 'firebase/auth';

const baseUrl = apiKeys.firebaseKeys.databaseURL;
const getBooksByUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/books.json?orderBy="bookId"&equalTo="${uid}"`)
    .then((response) => {
      const demBooks = response.data;
      const books = [];
      Object.keys(demBooks).forEach((fbId) => {
        demBooks[fbId].id = fbId;
        books.push(demBooks, [fbId]);
      });
      resolve(books);
    })
    .catch((error) => reject(error));
});

export default getBooksByUid;
