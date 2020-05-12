import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Watch = forwardRef(({ color, size, ...rest }, ref) => {
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
        d="M4 14.333v-1.86A5.985 5.985 0 012 8c0-1.777.772-3.374 2-4.472V1.667C4 .747 4.746 0 5.667 0h4.666C11.253 0 12 .746 12 1.667v1.86A5.985 5.985 0 0114 8a5.985 5.985 0 01-2 4.472v1.861c0 .92-.746 1.667-1.667 1.667H5.667C4.747 16 4 15.254 4 14.333zM13 8A5 5 0 103 8a5 5 0 0010 0z"
        clipRule="evenodd"
      />
      <rect width="1" height="2" x="13.5" y="7" rx=".5" />
      <path
        fillRule="evenodd"
        d="M8 4.5a.5.5 0 01.5.5v3a.5.5 0 01-.5.5H6a.5.5 0 010-1h1.5V5a.5.5 0 01.5-.5z"
        clipRule="evenodd"
      />
    </svg>
  );
});

Watch.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Watch.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default Watch;
