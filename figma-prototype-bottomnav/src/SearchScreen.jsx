import React, { useState } from 'react';
import { FiArrowLeft, FiSearch, FiClock, FiFilter } from 'react-icons/fi';

const recentSearches = [
  'AP EURO Period 4 Key Notes',
  'ap world history unit 1',
  'ap physics past paper questions by topic',
];

const allSuggestions = [
  ...recentSearches,
  'mathematics formulas',
  'mathe basics',
  'mathe exercises',
];

export default function SearchScreen({ onBack, onSearchSubmit }) {
  const [query, setQuery] = useState('');

  // Filter suggestions based on query
  const suggestions = query
    ? allSuggestions.filter(s => s.toLowerCase().includes(query.toLowerCase()))
    : recentSearches;

  // Handle Enter key in input
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && query.trim() && onSearchSubmit) {
      onSearchSubmit(query.trim());
    }
  };

  // Handle suggestion click
  const handleSuggestionClick = (s) => {
    if (onSearchSubmit) onSearchSubmit(s);
  };

  return (
    <div
      style={{
        width: '100vw',
        maxWidth: '100vw',
        minWidth: 0,
        height: '100%',
        minHeight: 0,
        background: 'linear-gradient(180deg, #1a1440 0%, #181828 100%)',
        color: '#fff',
        fontFamily: 'system-ui, sans-serif',
        boxSizing: 'border-box',
        overflowX: 'hidden',
      }}
    >
      {/* Top Bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '6vw 4vw 2vw 4vw',
        }}
      >
        <button
          onClick={onBack}
          style={{
            background: 'none',
            border: 'none',
            color: '#fff',
            fontSize: '6vw',
            cursor: 'pointer',
            marginRight: 8,
          }}
          aria-label="Back"
        >
          <FiArrowLeft size={24} />
        </button>
        <button
          onClick={() => alert('Filter options (to be implemented)')}
          style={{
            background: 'none',
            border: 'none',
            color: '#fff',
            fontSize: '6vw',
            cursor: 'pointer',
            marginLeft: 8,
          }}
          aria-label="Filter"
        >
          <FiFilter size={24} />
        </button>
      </div>
      {/* Search Bar */}
      <div style={{ width: '100%', padding: '0 8vw', marginBottom: '2vw', boxSizing: 'border-box' }}>
        <div style={{ width: '100%', maxWidth: 600, margin: '0 auto', position: 'relative', boxSizing: 'border-box' }}>
          <div style={{ display: 'flex', alignItems: 'center', width: '100%', background: 'rgba(255,255,255,0.08)', borderRadius: 12 }}>
            <FiSearch style={{ marginLeft: 16, color: '#aaa', flexShrink: 0 }} size={20} />
            <input
              autoFocus
              value={query}
              onChange={e => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Search"
              style={{
                flex: 1,
                padding: '2.5vw 3vw',
                borderRadius: 12,
                border: 'none',
                background: 'transparent',
                color: '#fff',
                fontSize: '5vw',
                fontWeight: 500,
                outline: 'none',
                boxSizing: 'border-box',
                minWidth: 0,
              }}
            />
          </div>
        </div>
      </div>
      {/* Suggestions List */}
      <div
        style={{
          flex: 1,
          overflowY: 'auto',
          marginTop: 8,
          padding: '0 8vw',
          minHeight: 0,
        }}
      >
        {suggestions.map((s, i) => (
          <div
            key={s}
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '3vw 0',
              borderBottom: '1px solid rgba(255,255,255,0.05)',
              cursor: 'pointer',
            }}
            onClick={() => handleSuggestionClick(s)}
          >
            <FiClock size={18} style={{ color: '#aaa', marginRight: 12 }} />
            <span style={{ fontSize: '4vw', color: '#fff' }}>{s}</span>
          </div>
        ))}
      </div>
    </div>
  );
} 