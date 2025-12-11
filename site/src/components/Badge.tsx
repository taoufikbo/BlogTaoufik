import React from 'react';

interface BadgeProps {
  text: string;
  accent: number;
}

export const Badge: React.FC<BadgeProps> = ({ text, accent }) => {
  return (
    <span className={`card-badge accent-${accent}`}>
      {text}
    </span>
  );
};
