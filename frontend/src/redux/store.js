import { configureStore } from '@reduxjs/toolkit'
import articlsReducer from './Reducers/articlsReducer'
import currentArticleReducer from './Reducers/currentArticleReducer'
import commentReducer from './Reducers/commentReducer'
import isLoadingReducer from './Reducers/isLoadingReducer'

const store = configureStore({
  reducer: {
    articls: articlsReducer,
    currentArticle: currentArticleReducer,
    comments: commentReducer,
    loading: isLoadingReducer,
  },
})
export default store

