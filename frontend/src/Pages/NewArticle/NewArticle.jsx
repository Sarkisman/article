import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addArticleAction } from '../../redux/Actions/ArticleActions'
import './style.css'

export default function NewArticle() {
  const dispatch = useDispatch()
  const [inputs, setInputs] = useState({
    title: '',
    text: '',
  })
  const navigate = useNavigate()
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }
  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(addArticleAction(inputs))
    navigate('/')
  }

  return (
    <div className="main">
      <form onSubmit={submitHandler}>
        <div className="inputs">
          <div className="title">
            <input
              name="title"
              type="text"
              className="title"
              placeholder="Заголовок вашей статьи"
              value={inputs?.title}
              onChange={handleChange}
            />
          </div>
          <div>
            <textarea
              name="text"
              placeholder="Ваша статья"
              defaultValue={inputs?.text}
              onChange={handleChange}
            ></textarea>
            <div>
              <button type="submit">Сохранить статью</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
