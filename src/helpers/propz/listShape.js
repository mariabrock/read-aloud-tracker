import PropTypes from 'prop-types';

const listShape = PropTypes.shape({
  id: PropTypes.string,
  title: PropTypes.string.isRequired,
  isFinished: PropTypes.bool.isRequired,
  uid: PropTypes.string.isRequired,
});

export default { listShape };
