import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const AspectRatio = forwardRef(({ color, size, ...rest }, ref) => {
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
        d="M0 3.5A1.5 1.5 0 011.5 2h13A1.5 1.5 0 0116 3.5v9a1.5 1.5 0 01-1.5 1.5h-13A1.5 1.5 0 010 12.5v-9zM1.5 3a.5.5 0 00-.5.5v9a.5.5 0 00.5.5h13a.5.5 0 00.5-.5v-9a.5.5 0 00-.5-.5h-13z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M2 4.5a.5.5 0 01.5-.5h3a.5.5 0 010 1H3v2.5a.5.5 0 01-1 0v-3zm12 7a.5.5 0 01-.5.5h-3a.5.5 0 010-1H13V8.5a.5.5 0 011 0v3z"
        clipRule="evenodd"
      />
    </svg>
  );
});

AspectRatio.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

AspectRatio.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default AspectRatio;
