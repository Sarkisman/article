import React from 'react'
import './style.css'

export default function Comment({ comment }) {
  return (
    <div className="comment">
      {comment.text}
      <div className="user">{comment.user}</div>
    </div>
  )
}
