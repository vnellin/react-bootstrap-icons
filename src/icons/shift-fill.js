import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ShiftFill = forwardRef(({ color, size, ...rest }, ref) => {
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
        d="M7.27 2.047a1 1 0 011.46 0l6.345 6.77c.6.638.146 1.683-.73 1.683H11.5v3a1 1 0 01-1 1h-5a1 1 0 01-1-1v-3H1.654C.78 10.5.326 9.455.924 8.816L7.27 2.047z"
        clipRule="evenodd"
      />
    </svg>
  );
});

ShiftFill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ShiftFill.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default ShiftFill;
