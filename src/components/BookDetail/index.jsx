
import { useParams, Link } from 'react-router-dom';
import React, { useState, useRef } from 'react';
const books = [
  {
    id: 1,
    title: "The Power of Now",
    narrator: "Eckhart Tolle",
    duration: "3h 45m",
    cover: "https://picsum.photos/id/1015/300/420",
    desc: "Transform your life by living in the present moment.",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
  },
  {
    id: 2,
    title: "Atomic Habits",
    narrator: "James Clear",
    duration: "5h 35m",
    cover: "https://picsum.photos/id/201/300/420",
    desc: "Tiny changes, remarkable results.",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
  },
  {
    id: 3,
    title: "Rich Dad Poor Dad",
    narrator: "Robert Kiyosaki",
    duration: "7h 10m",
    cover: "https://picsum.photos/id/30/300/420",
    desc: "What the rich teach their kids about money.",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
  },
  {
    id: 4,
    title: "The Alchemist",
    narrator: "Paulo Coelho",
    duration: "4h 20m",
    cover: "https://picsum.photos/id/1016/300/420",
    desc: "A fable about following your dreams.",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3"
  },
  {
  id: 4,
    title: "The Alchemist",
    narrator: "Paulo Coelho",
    duration: "4h 20m",
    cover: "https://picsum.photos/id/1016/300/420",
    desc: "A fable about following your dreams.",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3"
  },

  {
   id: 5,
    title: "The Power of Now",
    narrator: "Eckhart Tolle",
    duration: "3h 45m",
    cover: "https://picsum.photos/id/1015/300/420",
    desc: "Transform your life by living in the present moment.",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
  },

  {
 id:6,
 title:"the human mind power",
 narrator: "KOTESWARARAO",
 duration: "30sec 40sec",
 cover: "https://m.media-amazon.com/images/I/61biIIo9q1L.jpg",
 desc: "THESE BOOK TEACH IF HOW THE HUMANS BEANES WAS LEAVE IN THE WORLD",
 audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
  },
  
];

const BookDetail = () => {
  const { id } = useParams();
  const book = books.find(b => b.id === parseInt(id));
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  if (!book) {
    return <div style={{ padding: '4rem', textAlign: 'center', fontSize: '1.5rem' }}>Book not found</div>;
  }

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div style={{ padding: '3rem', maxWidth: '1100px', margin: '0 auto' }}>
      <Link 
        to="/" 
        style={{ 
          color: '#22d3ee', 
          fontSize: '1.2rem', 
          textDecoration: 'none',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          
        }}
      >
        ← Back to Home
      </Link>

      <div style={{ display: 'flex', gap: '4rem', marginTop: '3rem', flexWrap: 'wrap' }}>
        <img 
          src={book.cover} 
          alt={book.title}
          style={{ 
            width: '360px', 
            borderRadius: '20px', 
            boxShadow: '0 20px 50px rgba(0,0,0,0.5)' 
          }} 
        />

        <div style={{ flex: 1, minWidth: '400px' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>{book.title}</h1>
          <p style={{ fontSize: '1.4rem', color: '#94a3b8' }}>Narrated by {book.narrator}</p>

          <button 
            onClick={togglePlay}
            style={{
              margin: '2.5rem 0',
              padding: '1rem 3rem',
              fontSize: '1.4rem',
              fontWeight: 'bold',
              backgroundColor: isPlaying ? '#ef4444' : '#22d3ee',
              color: '#0f172a',
              border: 'none',
              borderRadius: '50px',
              cursor: 'pointer'
            }}
          >
            {isPlaying ? '⏸ Pause' : '▶ Play Now'}
          </button>

          <audio ref={audioRef} src={book.audioUrl} />

          <p style={{ lineHeight: '1.8', fontSize: '1.15rem', color: '#cbd5e1' }}>
            {book.desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;