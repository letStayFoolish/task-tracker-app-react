import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router';
import Button from './Button';

const Header = ({ title, onToggle, showAdd }) => {
  const location = useLocation();
  return (
    <header className='header'>
      <h1>{title}</h1>
      {location.pathname === '/' && (
        <Button
          onClick={onToggle}
          color={showAdd ? 'black' : 'green'}
          text={showAdd ? 'Close' : 'Add'}
        />
      )}
    </header>
  );
};

export default Header;

Header.defaultProps = {
  title: 'Task Tracker App',
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
