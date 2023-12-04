import React from 'react'

export default function Contents({ content, setContent, isEditContents }) {
  return (
    <div>
      {isEditContents
        ? <textarea value={content} onChange={(e) => setContent(e.target.value)}></textarea>
        : <div>{content}</div>}
    </div>
  )
}
