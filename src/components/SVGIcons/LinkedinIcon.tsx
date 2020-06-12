import React from 'react';

const SvgIcon = ({ color }: { color?: string }) => (
  <svg
    width="16"
    height="17"
    viewBox="0 0 16 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.7086 0.625H1.12789C0.505607 0.625 0 1.13477 0 1.76055V15.2395C0 15.8652 0.505607 16.375 1.12789 16.375H14.7086C15.3309 16.375 15.84 15.8652 15.84 15.2395V1.76055C15.84 1.13477 15.3309 0.625 14.7086 0.625ZM4.78736 14.125H2.43964V6.60859H4.79089V14.125H4.78736ZM3.6135 5.58203C2.86039 5.58203 2.25225 4.97383 2.25225 4.22852C2.25225 3.4832 2.86039 2.875 3.6135 2.875C4.36307 2.875 4.97475 3.4832 4.97475 4.22852C4.97475 4.97734 4.36661 5.58203 3.6135 5.58203ZM13.5877 14.125H11.24V10.4688C11.24 9.59688 11.2224 8.47539 10.0202 8.47539C8.79686 8.47539 8.60946 9.42461 8.60946 10.4055V14.125H6.26175V6.60859H8.514V7.63516H8.54582C8.8605 7.04453 9.62775 6.42227 10.7698 6.42227C13.1458 6.42227 13.5877 7.97969 13.5877 10.0047V14.125Z"
      fill={color || 'white'}
    />
  </svg>
);

export default SvgIcon;