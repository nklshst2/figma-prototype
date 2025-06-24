import BottomNav from './BottomNav';
import React, { useState } from 'react';
import SearchScreen from './SearchScreen';
import SearchResultsScreen from './SearchResultsScreen';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [showResults, setShowResults] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // Handler for BottomNav tab change
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setShowResults(false);
    setSearchTerm('');
  };

  // Handler for back button in SearchScreen
  const handleBack = () => {
    if (showResults) {
      setShowResults(false);
    } else {
      setActiveTab('home');
    }
  };

  // Handler for search submit
  const handleSearchSubmit = (term) => {
    setSearchTerm(term);
    setShowResults(true);
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        background: '#111',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          flex: 1,
          overflowY: 'auto',
          WebkitOverflowScrolling: 'touch',
          paddingBottom: 64, // Prevent content from being hidden behind BottomNav
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {activeTab === 'search' ? (
          showResults ? (
            <SearchResultsScreen searchTerm={searchTerm} onBack={handleBack} />
          ) : (
            <SearchScreen key={activeTab} onBack={handleBack} onSearchSubmit={handleSearchSubmit} />
          )
        ) : (
          <div style={{ color: '#fff', padding: '2rem 1rem' }}>
            <h2>Home Screen (placeholder)</h2>
          </div>
        )}
      </div>
      <BottomNav activeTab={activeTab} onTabChange={handleTabChange} />
    </div>
  );
}

export default App;
