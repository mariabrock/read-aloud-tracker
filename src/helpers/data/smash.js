import booksData from './booksData';
import authData from './authData';
import recordsData from './recordsData';

const smash = () => new Promise((resolve, reject) => {
  recordsData.getRecordsByUid(authData.getUid())
    .then((records) => {
      booksData.getBooksByUid(authData.getUid())
        .then((books) => resolve({ allBooks: books, records }));
    })
    .catch((err) => reject(err));
});

// get array of books
// loop through array of books
// {this.state.books.map((book) => ())}  ?????
// map will return a new array
// determine which have a total number of records that add up to the total page number (math)
// return those books as Completed
// then return the books with records that don't add up to the total pages as In Progress (more math?)
// Finally, all books without any records will show on the Wishlist

export default { smash };
