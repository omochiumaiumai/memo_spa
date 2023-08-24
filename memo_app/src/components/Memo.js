import React from 'react';
import PropTypes from 'prop-types';

export default function Memo({ content, onClick }) {
  const firstLine = content.split('\n')[0];
  return <li onClick={onClick}>{firstLine}</li>;
}

Memo.propTypes = {
  content: PropTypes.string,
  onClick: PropTypes.func,
};
