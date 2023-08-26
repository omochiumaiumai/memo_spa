import React from 'react';
import PropTypes from 'prop-types';

export default function Header({ children, level }) {
  const Tag = `h${level}`;
  return <Tag>{children}</Tag>;
}

Header.propTypes = {
  children: PropTypes.string,
  level: PropTypes.number,
};
