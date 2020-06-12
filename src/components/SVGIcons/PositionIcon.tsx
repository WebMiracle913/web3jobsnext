import React from 'react';

const SvgIcon = ({ color }: { color?: string }) => (
  <svg
    width="14"
    height="20"
    viewBox="0 0 14 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.8747 0C3.08395 0 0 3.0844 0 6.87525C0 10.5243 6.23753 19.0497 6.50312 19.4107L6.75099 19.748C6.77998 19.7877 6.82614 19.8109 6.8747 19.8109C6.92401 19.8109 6.96987 19.7877 6.99916 19.748L7.24688 19.4107C7.51262 19.0497 13.75 10.5243 13.75 6.87525C13.75 3.0844 10.6656 0 6.8747 0ZM6.8747 4.41255C8.23294 4.41255 9.3374 5.51706 9.3374 6.87525C9.3374 8.23274 8.23289 9.33796 6.8747 9.33796C5.51726 9.33796 4.412 8.23274 4.412 6.87525C4.412 5.51706 5.51721 4.41255 6.8747 4.41255Z"
      fill={color || 'white'}
    />
  </svg>
);

export default SvgIcon;
