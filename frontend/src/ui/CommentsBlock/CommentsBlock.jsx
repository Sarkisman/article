import React from 'react'
import Comment from '../Comment/Comment'
import './style.css'

export default function CommentsBlock({ comments }) {
  return (
    <div className="comments dialog">
      <p><h3>Комментарии</h3></p>
      {comments.map((comment) => (
        <Comment key={comment?.id} comment={comment} />
      ))}
    </div>
  )
}
