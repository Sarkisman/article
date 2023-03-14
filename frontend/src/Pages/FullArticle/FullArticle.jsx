import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { deleteById, getOneArticleAction } from '../../redux/Actions/ArticleActions'
import { addCommentsAction, getAllCommentsAction } from '../../redux/Actions/CommentsActions'
import CommentsBlock from '../../ui/CommentsBlock/CommentsBlock'
import './style.css'

export default function FullArticle() {
  const [isAdding, setIsAdding] = useState(false)
  const [isShowComments, setIsShowComments] = useState(false)
  const { id } = useParams()
  const navigate = useNavigate()
  const user = useSelector((store) => store?.user)
  const currentArticle = useSelector((store) => store?.currentArticle)
  const currentComments = useSelector((store) => store?.comments)
  // const isLoading = useSelector((store) => store?.loading)
  // console.log(isLoading, 'Загрузка')
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getOneArticleAction(id))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  // useEffect(() => {
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  //   console.log(!isLoading)
  // }, [isLoading])
  const showComments = () => {
    setIsShowComments(!isShowComments)
    dispatch(getAllCommentsAction(id))
  }

  const openFormComment = () => {
    setIsAdding(!isAdding)
  }

  const addComment = (e) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target))
    dispatch(addCommentsAction({ article: id, ...data, user: user || 'Anonimus' }))
    setIsAdding(!isAdding)
  }
  const deleteHendler = () => {
    dispatch(deleteById(id))
    navigate('/')
  }

  const isLoading = useSelector((store) => store?.loading)
  // console.log(isLoading, 'Загрузка')
  return (
    <div className="main">
      <div className="article">
        <div className="title1">{currentArticle?.title}</div>
        <div>{currentArticle?.text}</div>
        <div className="end">
          <h3>{currentArticle?.date?.slice(0, 10)}</h3>
        </div>
      </div>
      {isShowComments ? (
        <>
          {isLoading ? (
            <i>ЗАГРУЗКА.......</i>
          ) : (
            <>
              {' '}
              <CommentsBlock comments={currentComments} />{' '}
              <button type="button" onClick={showComments}>
                Скрыть комментарии
              </button>
            </>
          )}
        </>
      ) : (
        <button type="button" onClick={showComments}>
          показать коментарии
        </button>
      )}

      {isAdding ? (
        <div className="ection">
          <form onSubmit={addComment}>
            <input placeholder="ваш комментарий" name="text" />
            <p>
              <button type="button" onClick={openFormComment}>
                Отмена
              </button>
              <button type="submit"> Отправить </button>
            </p>
          </form>
        </div>
      ) : (
        <div className="ection">
          <button onClick={() => deleteHendler()}> Удалить статью</button>
          <button onClick={openFormComment}> добавить комментарий </button>
        </div>
      )}
    </div>
  )
}
