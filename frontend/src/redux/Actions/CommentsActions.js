import axios from 'axios'
import { GET_COMMENTS, ADD_COMMENT, SHOW_LOADING_INDICATOR, HIDE_LOADING_INDICATOR } from '../types' //, SHOW_LOADING_INDICATOR, HIDE_LOADING_INDICATOR

export const getAllComments = (payload) => ({ type: GET_COMMENTS, payload })
export const addComment = (payload) => ({ type: ADD_COMMENT, payload })

export const getAllCommentsAction = (articleId) => (dispatch) => {
  dispatch({ type: SHOW_LOADING_INDICATOR })
  axios(`/api/comments?article=${articleId}`)
    .then((res) => {
      dispatch(getAllComments(res.data))
      dispatch({ type: HIDE_LOADING_INDICATOR })
    })
    .catch((error) => {
      console.log(error)
      dispatch({ type: HIDE_LOADING_INDICATOR })
    })
}

export const addCommentsAction = (data) => (dispatch) => {
  axios.post('/api/comments', data).then((res) => dispatch(addComment(res.data)))
}
