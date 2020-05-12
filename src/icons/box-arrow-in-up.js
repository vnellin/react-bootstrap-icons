import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const BoxArrowInUp = forwardRef(({ color, size, ...rest }, ref) => {
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
        d="M4.646 7.854a.5.5 0 00.708 0L8 5.207l2.646 2.647a.5.5 0 00.708-.708l-3-3a.5.5 0 00-.708 0l-3 3a.5.5 0 000 .708z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M8 15a.5.5 0 00.5-.5v-9a.5.5 0 00-1 0v9a.5.5 0 00.5.5z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M1.5 2.5A1.5 1.5 0 013 1h10a1.5 1.5 0 011.5 1.5v8A1.5 1.5 0 0113 12h-1.5a.5.5 0 010-1H13a.5.5 0 00.5-.5v-8A.5.5 0 0013 2H3a.5.5 0 00-.5.5v8a.5.5 0 00.5.5h1.5a.5.5 0 010 1H3a1.5 1.5 0 01-1.5-1.5v-8z"
        clipRule="evenodd"
      />
    </svg>
  );
});

BoxArrowInUp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

BoxArrowInUp.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default BoxArrowInUp;
