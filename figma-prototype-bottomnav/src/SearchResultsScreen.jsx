import React, { useState } from 'react';
import { FiArrowLeft, FiFilter } from 'react-icons/fi';
import { FaCalculator, FaGraduationCap } from 'react-icons/fa';
import ReactMarkdown from 'react-markdown';

const filters = [
  { label: 'Top', key: 'top' },
  { label: 'Notes', key: 'notes' },
  { label: 'Practice', key: 'practice' },
  { label: 'Study Set', key: 'studyset' },
  { label: 'Folders', key: 'folders' },
  { label: 'Users', key: 'users' },
];

const mockResults = [
  {
    id: 1,
    title: 'Kunst Gruppe Sample name long one, with two lines',
    description: 'Description of the document goes here.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=100&h=100',
    subject: 'AP Calculus AB/BC',
    grade: '5–13',
  },
  {
    id: 2,
    title: 'Another Document with a Longer Name for Testing Purposes',
    description: 'Short description for this document.',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=100&h=100',
    subject: 'AP Biology',
    grade: '9–12',
  },
  {
    id: 3,
    title: 'Sample Document',
    description: 'A brief description.',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=100&h=100',
    subject: 'AP Chemistry',
    grade: '10–12',
  },
  {
    id: 4,
    title: 'Kunst Gruppe Sample name long one, with two lines',
    description: 'Description',
    image: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=facearea&w=100&h=100',
    subject: 'AP Calculus AB/BC',
    grade: '5–13',
  },
];

const fakeDocs = [
  {
    id: 1,
    title: 'Kunst Gruppe Sample name long one, with two lines',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=100&h=100',
    markdown: `# Kunst Gruppe\n\nThis is a sample markdown document for Kunst Gruppe.\n\n- Point 1\n- Point 2\n- Point 3\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam massa nisl quis neque.\n\n## Section 1\n\nSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.\n\n### Subsection\n\nUt enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.\n\n- More bullet 1\n- More bullet 2\n- More bullet 3\n\nCurabitur pretium tincidunt lacus. Nulla gravida orci a odio.\n\nVestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;\n\nMauris sollicitudin fermentum libero.`,
  },
  {
    id: 2,
    title: 'Another Document with a Longer Name for Testing Purposes',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=100&h=100',
    markdown: `# AP Biology\n\nThis is a sample markdown document for AP Biology.\n\n**Description:** Short description for this document.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit.\n\n## Biology Section\n\nVivamus luctus urna sed urna ultricies ac tempor dui sagittis. In condimentum facilisis porta.\n\n- Cell Structure\n- Genetics\n- Evolution\n\n### More Content\n\nPhasellus ultrices nulla quis nibh. Quisque a lectus.\n\nDonec consectetuer ligula vulputate sem tristique cursus.\n\nNam nulla quam, gravida non, commodo a, sodales sit amet, nisi.`,
  },
  {
    id: 3,
    title: 'Sample Document',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=100&h=100',
    markdown: `# AP Chemistry\n\nA brief description.\n\n*This is a fake markdown preview.*\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit.\n\n## Chemistry Section\n\nAliquam erat volutpat.\n\n- Atoms\n- Molecules\n- Reactions\n\n### Even More\n\nMorbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam.\n\nSed arcu. Cras consequat.`,
  },
  {
    id: 4,
    title: 'Kunst Gruppe Sample name long one, with two lines',
    image: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=facearea&w=100&h=100',
    markdown: `# AP Calculus AB/BC\n\nDescription for Calculus.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit.\n\n## Calculus Section\n\nInteger nec odio. Praesent libero. Sed cursus ante dapibus diam.\n\n- Derivatives\n- Integrals\n- Limits\n\n### More Calculus\n\nSuspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet.\n\nVestibulum sapien. Proin quam. Etiam ultrices.`,
  },
];

export default function SearchResultsScreen({ searchTerm = 'AP Biology', onBack }) {
  const [activeFilter, setActiveFilter] = useState('top');
  const [openDoc, setOpenDoc] = useState(null);

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
      {/* Search Term/Title Bar */}
      <div style={{ width: '100%', padding: '0 4vw', marginBottom: '2vw' }}>
        <div
          style={{
            width: '100%',
            maxWidth: 600,
            margin: '0 auto',
            textAlign: 'center',
            fontSize: '6vw',
            fontWeight: 600,
            letterSpacing: -0.2,
            color: '#F9F9F9',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {searchTerm}
        </div>
      </div>
      {/* Quick Filters */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '2vw',
          padding: '0 0 0 4vw',
          marginBottom: '2vw',
          overflowX: 'auto',
        }}
      >
        {filters.map(f => (
          <button
            key={f.key}
            onClick={() => setActiveFilter(f.key)}
            style={{
              padding: '0 3vw',
              height: '9vw',
              minHeight: 32,
              borderRadius: 28,
              border: 'none',
              fontWeight: 600,
              fontSize: '3.5vw',
              letterSpacing: 0.5,
              background: activeFilter === f.key ? '#fff' : 'rgba(255,255,255,0.1)',
              color: activeFilter === f.key ? '#0E0E0E' : '#fff',
              cursor: 'pointer',
              transition: 'background 0.2s',
              boxShadow: 'none',
            }}
          >
            {f.label}
          </button>
        ))}
      </div>
      {/* Results List */}
      <div
        style={{
          flex: 1,
          overflowY: 'auto',
          marginTop: 8,
          padding: '0 4vw',
          minHeight: 0,
          boxSizing: 'border-box',
        }}
      >
        {mockResults.map((doc, i) => (
          <div
            key={doc.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '3vw 0',
              borderBottom: '1px solid rgba(255,255,255,0.05)',
              cursor: 'pointer',
              width: '100%',
              boxSizing: 'border-box',
              gap: '3vw',
              overflow: 'hidden',
            }}
            onClick={() => setOpenDoc(fakeDocs.find(d => d.id === doc.id))}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                flex: 1,
                minWidth: 0,
                gap: '2vw',
                boxSizing: 'border-box',
              }}
            >
              <div
                style={{
                  fontSize: '4.2vw',
                  fontWeight: 600,
                  lineHeight: '5vw',
                  letterSpacing: 0.4,
                  color: '#F9F9F9',
                  maxHeight: '10vw',
                  overflow: 'hidden',
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  whiteSpace: 'normal',
                  boxSizing: 'border-box',
                }}
              >
                {doc.title}
              </div>
              <div
                style={{
                  fontSize: '3.5vw',
                  fontWeight: 450,
                  color: 'rgba(255,255,255,0.72)',
                  lineHeight: '5vw',
                  maxHeight: '10vw',
                  overflow: 'hidden',
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  whiteSpace: 'normal',
                  boxSizing: 'border-box',
                }}
              >
                {doc.description}
              </div>
              <div style={{ display: 'flex', flexDirection: 'row', gap: '2vw', boxSizing: 'border-box' }}>
                <span style={{ display: 'flex', alignItems: 'center', padding: '1vw 2vw', gap: 4, background: 'rgba(255,255,255,0.1)', borderRadius: 28, fontSize: '2.2vw', color: '#fff', fontWeight: 450, boxSizing: 'border-box' }}>
                  <FaCalculator size={12} style={{ marginRight: 3 }} />
                  {doc.subject}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', padding: '1vw 2vw', gap: 4, background: 'rgba(255,255,255,0.1)', borderRadius: 28, fontSize: '2.2vw', color: '#fff', fontWeight: 450, boxSizing: 'border-box' }}>
                  <FaGraduationCap size={12} style={{ marginRight: 3 }} />
                  {doc.grade}
                </span>
              </div>
            </div>
            <img
              src={doc.image}
              alt="thumbnail"
              style={{
                width: '22vw',
                maxWidth: 80,
                minWidth: 40,
                height: '22vw',
                maxHeight: 80,
                minHeight: 40,
                borderRadius: 12,
                objectFit: 'cover',
                background: '#222',
                marginLeft: 8,
                flexShrink: 0,
                boxSizing: 'border-box',
              }}
            />
          </div>
        ))}
      </div>
      {/* Modal for document preview */}
      {openDoc && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(0,0,0,0.45)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onClick={() => setOpenDoc(null)}
        >
          <div
            style={{
              background: '#fff',
              color: '#222',
              borderRadius: 18,
              maxWidth: '98vw',
              width: '98vw',
              height: '96vh',
              maxHeight: '96vh',
              overflow: 'hidden',
              boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
              position: 'relative',
              padding: 0,
            }}
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setOpenDoc(null)}
              style={{
                position: 'absolute',
                top: 12,
                right: 12,
                background: 'none',
                border: 'none',
                fontSize: 24,
                color: '#222',
                cursor: 'pointer',
                zIndex: 2,
              }}
              aria-label="Close"
            >
              ×
            </button>
            <img
              src={openDoc.image}
              alt="thumbnail"
              style={{
                width: '100%',
                maxHeight: 180,
                objectFit: 'cover',
                borderTopLeftRadius: 18,
                borderTopRightRadius: 18,
                background: '#eee',
              }}
            />
            <div style={{ padding: 24, overflowY: 'auto', height: 'calc(96vh - 180px - 24px)' }}>
              <h2 style={{ marginTop: 0 }}>{openDoc.title}</h2>
              <ReactMarkdown>{openDoc.markdown}</ReactMarkdown>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 