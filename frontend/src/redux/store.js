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

// import { configureStore, applyMiddleware } from '@reduxjs/toolkit'; //,
// import thunk from 'redux-thunk';
// import { loadingIndicatorMiddleware } from './Middlewere/Middlewere';
// import articlsReducer from './Reducers/articlsReducer';
// import currentArticleReducer from './Reducers/currentArticleReducer';
// import commentReducer from './Reducers/commentReducer';
// import isLoadingReducer from './Reducers/isLoadingReducer'

// const middleware = [thunk, loadingIndicatorMiddleware];

// const store = configureStore({
//   reducer: {
//     articls: articlsReducer,
//     currentArticle: currentArticleReducer,
//     comments: commentReducer,
//     loading: isLoadingReducer,
//   },
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loadingIndicatorMiddleware),
// });

// export default store;
