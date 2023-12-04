import React from 'react';

export default function Title({ title, setTitle, isEditTitle, toggleHandler }) {
  return (
    <div className='titleContainer'>
      {isEditTitle ? (
        <input value={title} onChange={(e) => setTitle(e.target.value)}></input>
      ) : (
        <h2>{title}</h2>
      )}
      <button onClick={toggleHandler}>{isEditTitle ? "Save" : "Edit"}</button>
    </div>
  )
}