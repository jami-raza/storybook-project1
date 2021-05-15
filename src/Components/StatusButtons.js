import React from 'react';
import PropTypes from 'prop-types';
import './StatusButtons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';

/**
 * Primary UI component for user interaction
 */
{/*export const StatusButtons = ({ primary, backgroundColor, size, label, ...props }) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <Button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </Button>
  );
};
*/}

export const StatusButtons = (props) => {
  const {variant = 'primary', children, ...rest} = props 
  return (
    <Button className={`buttons ${variant}`} {...rest}>{children}</Button>
  )
}



