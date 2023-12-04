import React, { useState } from 'react';

function Comments() {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState('');

  const addComment = (comment) => {
    const newComment = {
      text: comment,
      time: new Date().toLocaleString()
    };
    setComments([...comments, newComment]);
  };

  const deleteComment = (index) => {
    setComments(comments.filter((_, i) => i !== index));
  };

  return (
    <div>
      {comments.map((comment, index) => (
        <div key={index}>
          <p>{comment.text}</p>
          <p className="comment-time">{comment.time}</p> 
          <button onClick={() => deleteComment(index)}>Delete</button>
        </div>
      ))}
      <input value={comment} onChange={(e) => setComment(e.target.value)}></input>
      <button onClick={() => { addComment(comment); setComment(''); }}>Add Comment</button>
    </div>
  );
}

export default Comments;
