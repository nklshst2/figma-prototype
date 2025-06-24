import React from 'react';
import { FiHome, FiSearch, FiPlusSquare, FiBookmark } from 'react-icons/fi';

// Placeholder fox avatar SVG
const FoxAvatar = () => (
  <svg height="32" width="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="16" fill="#222" />
    <text x="16" y="22" textAnchor="middle" fontSize="18" fontFamily="Arial" fill="#FF9900">🦊</text>
  </svg>
);

const navItems = [
  { key: 'home', icon: <FiHome size={28} />, activeIcon: <FiHome size={28} color="#2196F3" />, },
  { key: 'search', icon: <FiSearch size={28} />, activeIcon: <FiSearch size={28} color="#2196F3" />, },
  { key: 'create', icon: <FiPlusSquare size={28} />, },
  { key: 'schoolgpt', icon: <FoxAvatar />, },
  { key: 'library', icon: <FiBookmark size={28} />, },
];

export default function BottomNav({ activeTab = 'home', onTabChange }) {
  return (
    <nav style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      background: '#181818',
      borderTopLeftRadius: 16,
      borderTopRightRadius: 16,
      height: 64,
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      boxShadow: '0 -2px 16px rgba(0,0,0,0.2)',
      zIndex: 100,
    }}>
      {navItems.map((item) => {
        const isActive = item.key === activeTab;
        return (
          <button
            key={item.key}
            onClick={() => onTabChange && onTabChange(item.key)}
            style={{
              background: isActive ? 'rgba(33,150,243,0.15)' : 'none',
              border: isActive ? '2px solid #2196F3' : 'none',
              outline: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: item.key === 'schoolgpt' ? '50%' : 8,
              boxShadow: isActive ? '0 2px 8px 0 #2196F366' : (item.key === 'schoolgpt' ? '0 0 0 2px #333' : 'none'),
              padding: item.key === 'schoolgpt' ? 2 : 0,
              width: 48,
              height: 48,
              marginTop: item.key === 'schoolgpt' ? -16 : 0,
              cursor: 'pointer',
              transition: 'background 0.2s, border 0.2s, box-shadow 0.2s',
            }}
          >
            {isActive && item.activeIcon ? item.activeIcon : item.icon}
          </button>
        );
      })}
    </nav>
  );
} 