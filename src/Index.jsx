// src/Index.js
import React from 'react';
import Post from './Post';

function Index() {
  const contents = () => {
    const posts = [
      { id: 1, title: 'Kömürün Masum Bakışları', content: 'My Dog', image: 'https://picsum.photos/id/237/600/300' },
      { id: 2, title: 'Doğa İle Baş Başa...', content: 'Çimenlerin Muhteşem Kokusu', image: 'https://picsum.photos/id/89/600/300' },
      { id: 2, title: 'Özlenen Kış Tatili', content: 'Uludağ Etekleri', image: 'https://picsum.photos/id/67/600/300' },
      { id: 4, title: 'Kahve Keyfi', content: 'At Coffee Shop', image: 'https://picsum.photos/id/42/600/300' },
    ];

    const handleLike = (postId, isLiked) => {
      
      console.log(`${isLiked ? 'Beğenildi' : 'Beğeni kaldırıldı'} - Post ID: ${postId}`);
    };

    const handleComment = (postId, comment) => {
      
      console.log(`Yorum Eklendi - Post ID: ${postId}, Yorum: ${comment}`);
    };

    return (
      <div className="container mt-4" style={{ maxWidth: '600px',}}> 
      <h1 style={{ fontSize: '2rem' }}>Fotoğraf Paylaşım Uygulaması</h1>
      {posts.map((post) => (
        <Post key={post.id} post={post} onLike={handleLike} onComment={handleComment} />
      ))}
    </div>
    );
  };

  
  return contents();
}

export default Index;
