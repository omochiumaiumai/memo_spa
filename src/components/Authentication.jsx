import React from 'react';
import Button from './Button';
import useAuth from './useAuth';
import PropTypes from 'prop-types';

export default function Authentication({ toggleAuth }) {
  const auth = useAuth();

  return (
    <Button onClick={toggleAuth} disabled={false}>
      {auth ? 'Logout' : 'Login'}
    </Button>
  );
}

Authentication.propTypes = {
  toggleAuth: PropTypes.func,
};
