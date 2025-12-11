import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Icon } from '../components/Icon';

export const Topic: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) {
      setError('No topic specified');
      setLoading(false);
      return;
    }

    const loadContent = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Try to load the markdown file - use relative path that works with base
        const basePath = import.meta.env.BASE_URL || '/';
        const response = await fetch(`${basePath}docs/${slug}.md`);
        if (!response.ok) {
          throw new Error('Topic not found');
        }
        
        const text = await response.text();
        setContent(text);
      } catch (err) {
        console.error('Failed to load topic:', err);
        setError('Failed to load topic content. The documentation may not be available yet.');
      } finally {
        setLoading(false);
      }
    };

    loadContent();
  }, [slug]);

  if (loading) {
    return (
      <div className="topic-page">
        <Link to="/" className="topic-back">
          <Icon name="arrow-right" size={16} style={{ transform: 'rotate(180deg)' }} />
          Back to Roadmap
        </Link>
        <div className="topic-content">
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="topic-page">
        <Link to="/" className="topic-back">
          <Icon name="arrow-right" size={16} style={{ transform: 'rotate(180deg)' }} />
          Back to Roadmap
        </Link>
        <div className="topic-content">
          <h1>Error</h1>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="topic-page">
      <Link to="/" className="topic-back">
        <Icon name="arrow-right" size={16} style={{ transform: 'rotate(180deg)' }} />
        Back to Roadmap
      </Link>
      <div className="topic-content">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
};
