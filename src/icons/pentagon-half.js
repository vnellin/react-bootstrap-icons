import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const PentagonHalf = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="m8 1.288 6.842 5.56L12.267 15H8V1.288zM16 6.5 8 0 0 6.5 3 16h10l3-9.5z" />
    </svg>
  );
});

PentagonHalf.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

PentagonHalf.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default PentagonHalf;
