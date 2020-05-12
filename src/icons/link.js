import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Link = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M6.354 5.5H4a3 3 0 000 6h3a3 3 0 002.83-4H9c-.086 0-.17.01-.25.031A2 2 0 017 10.5H4a2 2 0 110-4h1.535c.218-.376.495-.714.82-1z" />
      <path d="M6.764 6.5H7c.364 0 .706.097 1 .268A1.99 1.99 0 019 6.5h.236A3.004 3.004 0 008 5.67a3 3 0 00-1.236.83z" />
      <path d="M9 5.5a3 3 0 00-2.83 4h1.098A2 2 0 019 6.5h3a2 2 0 110 4h-1.535a4.02 4.02 0 01-.82 1H12a3 3 0 100-6H9z" />
      <path d="M8 11.33a3.01 3.01 0 001.236-.83H9a1.99 1.99 0 01-1-.268 1.99 1.99 0 01-1 .268h-.236c.332.371.756.66 1.236.83z" />
    </svg>
  );
});

Link.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Link.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

export default Link;
