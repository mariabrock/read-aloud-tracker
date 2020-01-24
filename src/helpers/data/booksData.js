import axios from 'axios';
import apiKeys from '../apiKeys.json';
import 'firebase/auth';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getBooksByUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/books.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      const allBooksObj = response.data;
      const books = [];
      if (allBooksObj != null) {
        Object.keys(allBooksObj).forEach((bookId) => {
          const newBook = allBooksObj[bookId];
          newBook.id = bookId;
          books.push(newBook);
        });
      }
      resolve(books);
    })
    .catch((error) => reject(error));
});

const getSingleBook = (bookId) => axios.get(`${baseUrl}/books/${bookId}.json`);

const saveBook = (bookId) => axios.post(`${baseUrl}/books.json`, bookId);

const updateBook = (bookId, newBookInfo) => axios.put(`${baseUrl}/books/${bookId}.json`, newBookInfo);

const deleteBook = (bookId) => axios.delete(`${baseUrl}/boards/${bookId}.json`);

export default {
  getBooksByUid,
  getSingleBook,
  saveBook,
  updateBook,
  deleteBook,
};
