import React from 'react';
import { Link } from 'react-router-dom';
import books from '../../data';

const BookCard = ({ book }) => (
  <Link to={`/book/${book.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
    <div style={{
      backgroundColor: '#1e2937',
      borderRadius: '16px',
      overflow: 'hidden',
      width: '230px',
      transition: 'transform 0.3s ease',
      boxShadow: '0 10px 15px rgba(0,0,0,0.3)'
    }}
    onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.06)'}
    onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
      <img src={book.cover} alt={book.title} style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
      <div style={{ padding: '1rem' }}>
        <h3 style={{ margin: '0 0 0.4rem', fontSize: '1.15rem' }}>{book.title}</h3>
        <p style={{ margin: '0 0 0.6rem', color: '#94a3b8', fontSize: '0.95rem' }}>{book.narrator}</p>
        <span style={{ fontSize: '0.85rem', backgroundColor: '#334155', padding: '4px 10px', borderRadius: '20px' }}>
          {book.duration}
        </span>
      </div>
    </div>
  </Link>
);

const Home = () => {
  return (
    <div style={{ padding: '2rem 1.5rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2.8rem', margin: '0 0 1rem' }}>Listen. Learn. Grow.</h1>
        <p style={{ fontSize: '1.3rem', color: '#cbd5e1' }}>Best Audiobooks • No Ads • Pure Focus</p>
      </div>

      <h2 style={{ marginBottom: '1.5rem', fontSize: '1.6rem' }}>Popular Audiobooks</h2>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(230px, 1fr))',
        gap: '2rem',
        justifyContent: 'center'
      }}>
        {books.map(book => <BookCard key={book.id} book={book} />)}
      </div>
    </div>
  );
};

export default Home;