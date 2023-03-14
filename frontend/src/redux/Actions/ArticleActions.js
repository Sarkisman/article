import axios from 'axios'
import {
  GET_ARTICLS,
  GET_ONE,
  SAVE_ARTICL,
  DELETE_ARTICL,
  SHOW_LOADING_INDICATOR,
  HIDE_LOADING_INDICATOR,
} from '../types'

export const getAllArticls = (payload) => ({ type: GET_ARTICLS, payload })
export const getOne = (payload) => ({ type: GET_ONE, payload })
export const saveArticle = (payload) => ({ type: SAVE_ARTICL, payload })
export const deleteById = (id) => ({ type: DELETE_ARTICL, payload: id })

export const getArticlsAction = () => (dispatch) => {
  dispatch({ type: SHOW_LOADING_INDICATOR })
  axios('/api/articles')
    .then((res) => {
      dispatch(getAllArticls(res.data))
      dispatch({ type: HIDE_LOADING_INDICATOR })
    })
    .catch((error) => {
      console.log(error)
      dispatch({ type: HIDE_LOADING_INDICATOR })
    })
}

export const getOneArticleAction = (id) => (dispatch) => {
  dispatch({ type: SHOW_LOADING_INDICATOR })
  axios(`/api/articles/${id}`)
    .then((res) => {
      dispatch(getOne(res.data))
      dispatch({ type: HIDE_LOADING_INDICATOR })
    })
    .catch((error) => {
      console.log(error)
      dispatch({ type: HIDE_LOADING_INDICATOR })
    })
}

export const addArticleAction = (inputs) => (dispatch) => {
  axios.post('/api/articles', inputs).then((res) => dispatch(saveArticle(res.data)))
}
