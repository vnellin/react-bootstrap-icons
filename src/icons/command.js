import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Command = forwardRef(({ color, size, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill={color}
      {...rest}
    >
      <path
        fillRule="evenodd"
        d="M2 3.5A1.5 1.5 0 003.5 5H5V3.5a1.5 1.5 0 10-3 0zM6 6V3.5A2.5 2.5 0 103.5 6H6zm8-2.5A1.5 1.5 0 0112.5 5H11V3.5a1.5 1.5 0 013 0zM10 6V3.5A2.5 2.5 0 1112.5 6H10zm-8 6.5A1.5 1.5 0 013.5 11H5v1.5a1.5 1.5 0 01-3 0zM6 10v2.5A2.5 2.5 0 113.5 10H6zm8 2.5a1.5 1.5 0 00-1.5-1.5H11v1.5a1.5 1.5 0 003 0zM10 10v2.5a2.5 2.5 0 102.5-2.5H10z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M10 6H6v4h4V6zM5 5v6h6V5H5z"
        clipRule="evenodd"
      />
    </svg>
  );
});

Command.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Command.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default Command;
