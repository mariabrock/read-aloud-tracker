import PropTypes from 'prop-types';

const bookShape = PropTypes.shape({
  id: PropTypes.string,
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  numOfPages: PropTypes.number.isRequired,
  goalDate: PropTypes.string.isRequired,
  isFinished: PropTypes.bool.isRequired,
  uid: PropTypes.string.isRequired,
});

export default { bookShape };
