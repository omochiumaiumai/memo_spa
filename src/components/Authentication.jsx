import React, { useContext } from 'react';
import Button from './Button';
import AuthContext from './AuthContext.js';
import PropTypes from 'prop-types';

export default function Authentication({ toggleAuth }) {
  const auth = useContext(AuthContext);

  return <Button onClick={toggleAuth}>{auth ? 'Logout' : 'Login'}</Button>;
}

Authentication.propTypes = {
  toggleAuth: PropTypes.func,
};
