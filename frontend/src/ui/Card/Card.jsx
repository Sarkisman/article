import React from 'react'
import { useNavigate } from 'react-router-dom'
import './style.css'

export default function Card({ oneCard, isLoading }) {
  const navigate = useNavigate()

  const changeDirectory = (id) => {
    navigate(`/articles/${id}`)
  }
  return (
    <>
      {isLoading ? (
        <div>ЗАГРУЗКА!!!!!!!</div>
      ) : (
        <div className="back" key={oneCard.id} onClick={() => changeDirectory(oneCard?.id)}>
          <div className="oneCard">
            <h4>
              <b>{oneCard?.title}</b>
            </h4>
            <div className="infoBox">
              <i>Подробнее..</i>
              <b>{oneCard?.date.slice(0, 10)}</b>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
