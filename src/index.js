import PropTypes from 'prop-types';
const Conditional = (props) => {
  return(
    !!props.if && props.children
  );
};

Conditional.propTypes = {
  if: PropTypes.object
};

export {
  Conditional
};