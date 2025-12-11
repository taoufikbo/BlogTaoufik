import React from 'react';

interface ConnectorProps {
  side: 'left' | 'right';
  accent: number;
  width?: number;
}

export const Connector: React.FC<ConnectorProps> = ({ side, accent: _accent, width = 200 }) => {
  return (
    <svg 
      width={width} 
      height={40} 
      viewBox={`0 0 ${width} 40`}
      style={{ overflow: 'visible' }}
    >
      <path
        d={side === 'left' 
          ? `M ${width} 20 C ${width * 0.6} 20, ${width * 0.4} 20, 0 20`
          : `M 0 20 C ${width * 0.4} 20, ${width * 0.6} 20, ${width} 20`
        }
        stroke="rgba(255,255,255,0.06)"
        strokeWidth="2"
        strokeDasharray="6 6"
        fill="none"
      />
    </svg>
  );
};
