import React, { useState, useRef, useEffect } from 'react';

interface TooltipProps {
  children: React.ReactNode;
  title: string;
  desc: string;
  links?: Array<{ label: string; url: string; primary?: boolean }>;
}

export const Tooltip: React.FC<TooltipProps> = ({ children, title, desc, links = [] }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState<{ left?: string; right?: string; transform: string }>({
    transform: 'translateX(-50%) translateY(-12px)',
  });
  const triggerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isVisible && contentRef.current && triggerRef.current) {
      const triggerRect = triggerRef.current.getBoundingClientRect();
      const contentRect = contentRef.current.getBoundingClientRect();
      
      // Adjust position if tooltip goes off screen
      if (triggerRect.left + contentRect.width / 2 > window.innerWidth) {
        setPosition({ left: undefined, right: '0', transform: 'translateY(-12px)' });
      } else if (triggerRect.left - contentRect.width / 2 < 0) {
        setPosition({ left: '0', right: undefined, transform: 'translateY(-12px)' });
      } else {
        setPosition({ left: undefined, right: undefined, transform: 'translateX(-50%) translateY(-12px)' });
      }
    }
  }, [isVisible]);

  const displayLinks = links.slice(0, 3);

  return (
    <div
      ref={triggerRef}
      className="tooltip-trigger"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onFocus={() => setIsVisible(true)}
      onBlur={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div 
          ref={contentRef} 
          className="tooltip-content" 
          role="tooltip"
          style={position}
        >
          <div className="tooltip-title">{title}</div>
          <div className="tooltip-desc">{desc}</div>
          {displayLinks.length > 0 && (
            <div className="tooltip-links">
              {displayLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tooltip-link"
                  onClick={(e) => e.stopPropagation()}
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
