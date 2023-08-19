import React from 'react';
import PropTypes from 'prop-types';

const Memo = ({ content, onClick }) => {
  const firstLine = content.split('\n')[0];
  return (
    <div onClick={onClick}>
      <li>{firstLine}</li>
    </div>
  );
};

Memo.propTypes = {
  content: PropTypes.string,
  onClick: PropTypes.func,
};
export default Memo;
