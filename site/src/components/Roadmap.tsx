import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Badge } from './Badge';
import { Connector } from './Connector';
import { Tooltip } from './Tooltip';
import { Icon } from './Icon';
import roadmapData from '../data/roadmap.json';

interface RoadmapItem {
  id: string;
  slug: string;
  title: string;
  desc: string;
  badge: string;
  accent: number;
  side: 'left' | 'right';
  x: number;
  y: number;
  w: number;
  h: number;
  tags?: string[];
  prereqs?: string[];
  links?: Array<{ label: string; url: string; primary?: boolean }>;
  children?: Array<{
    id: string;
    slug: string;
    title: string;
    desc: string;
  }>;
}

interface Lane {
  id: string;
  title: string;
  items: RoadmapItem[];
}

export const Roadmap: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());
  const [visitedItems, setVisitedItems] = useState<Set<string>>(new Set());
  const [showProgress, setShowProgress] = useState(false);
  const [highlightedItem, setHighlightedItem] = useState<string | null>(null);

  // Load progress from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('roadmap-progress');
    if (saved) {
      try {
        const data = JSON.parse(saved);
        setVisitedItems(new Set(data.visited || []));
        setShowProgress(data.enabled || false);
      } catch (e) {
        console.error('Failed to load progress', e);
      }
    }
  }, []);

  // Save progress to localStorage
  useEffect(() => {
    localStorage.setItem(
      'roadmap-progress',
      JSON.stringify({
        visited: Array.from(visitedItems),
        enabled: showProgress,
      })
    );
  }, [visitedItems, showProgress]);

  // Handle hash anchors
  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash) {
      setHighlightedItem(hash);
      setTimeout(() => {
        const element = document.getElementById(`item-${hash}`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
    } else {
      setHighlightedItem(null);
    }
  }, [location.hash]);

  const toggleExpand = (itemId: string) => {
    setExpandedItems((prev) => {
      const next = new Set(prev);
      if (next.has(itemId)) {
        next.delete(itemId);
      } else {
        next.add(itemId);
      }
      return next;
    });
  };

  const handleCardClick = (item: RoadmapItem) => {
    // Mark as visited
    setVisitedItems((prev) => new Set(prev).add(item.id));
    
    // Navigate to internal doc
    navigate(`/docs/${item.slug}`);
  };

  const handleCardKeyPress = (e: React.KeyboardEvent, item: RoadmapItem) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleCardClick(item);
    }
  };

  const toggleProgress = () => {
    setShowProgress(!showProgress);
  };

  const lanes = roadmapData.lanes as Lane[];

  return (
    <div className="roadmap-container">
      <div className="roadmap-spine" aria-hidden="true" />

      {lanes.map((lane) => (
        <div key={lane.id} className="roadmap-lane">
          <h2 className="lane-title">{lane.title}</h2>
          <div className="lane-items">
            {lane.items.map((item) => {
              const isExpanded = expandedItems.has(item.id);
              const isVisited = visitedItems.has(item.id);
              const isHighlighted = highlightedItem === item.slug;

              return (
                <div
                  key={item.id}
                  id={`item-${item.slug}`}
                  className={`roadmap-item side-${item.side}`}
                >
                  {/* Connector - hidden on mobile */}
                  <div className="item-connector" aria-hidden="true">
                    <Connector side={item.side} accent={item.accent} />
                  </div>

                  {/* Dot on spine */}
                  <div
                    className={`spine-dot accent-${item.accent}`}
                    aria-hidden="true"
                  />

                  {/* Card */}
                  <Tooltip title={item.title} desc={item.desc} links={item.links}>
                    <div
                      className={`roadmap-card ${isVisited && showProgress ? 'visited' : ''} ${
                        isHighlighted ? 'highlighted' : ''
                      }`}
                      onClick={() => handleCardClick(item)}
                      onKeyPress={(e) => handleCardKeyPress(e, item)}
                      tabIndex={0}
                      role="button"
                      aria-label={`${item.title}: ${item.desc}`}
                    >
                      <div className="card-header">
                        <h3 className="card-title">{item.title}</h3>
                        <Badge text={item.badge} accent={item.accent} />
                      </div>

                      <p className="card-desc">{item.desc}</p>

                      {item.tags && item.tags.length > 0 && (
                        <div className="card-tags">
                          {item.tags.map((tag) => (
                            <span key={tag} className="card-tag">
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      {item.children && item.children.length > 0 && (
                        <div className="card-children-toggle">
                          <button
                            className="children-toggle-btn"
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleExpand(item.id);
                            }}
                            aria-expanded={isExpanded}
                            aria-controls={`children-${item.id}`}
                          >
                            <Icon name={isExpanded ? 'collapse' : 'expand'} size={16} />
                            {isExpanded ? 'Hide' : 'Show'} sub-topics ({item.children.length})
                          </button>

                          {isExpanded && (
                            <div id={`children-${item.id}`} className="card-children">
                              {item.children.map((child) => (
                                <div key={child.id} className="child-item">
                                  <div className="child-item-title">{child.title}</div>
                                  <div className="child-item-desc">{child.desc}</div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </Tooltip>
                </div>
              );
            })}
          </div>
        </div>
      ))}

      {/* Progress toggle */}
      <button
        className="progress-toggle"
        onClick={toggleProgress}
        aria-label={showProgress ? 'Hide progress tracking' : 'Show progress tracking'}
      >
        <Icon name="check" size={16} />
        {showProgress ? 'Hide Progress' : 'Show Progress'}
      </button>
    </div>
  );
};
