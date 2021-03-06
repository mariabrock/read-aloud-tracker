import PropTypes from 'prop-types';

const recordShape = PropTypes.shape({
  id: PropTypes.string,
  bookId: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  numOfPagesRead: PropTypes.number.isRequired,
  // date: PropTypes.string.isRequired,
});

export default { recordShape };
