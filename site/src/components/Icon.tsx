import React from 'react';

interface IconProps {
  name: string;
  className?: string;
  size?: number;
  style?: React.CSSProperties;
}

export const Icon: React.FC<IconProps> = ({ name, className = '', size = 20, style }) => {
  return (
    <svg className={`icon ${className}`} width={size} height={size} style={style}>
      <use href={`#icon-${name}`} />
    </svg>
  );
};
