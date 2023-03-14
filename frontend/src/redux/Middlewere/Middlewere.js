import { SHOW_LOADING_INDICATOR, HIDE_LOADING_INDICATOR } from '../types';

export const loadingIndicatorMiddleware = (store) => (next) => (action) => {
  if (action.type.endsWith('SHOW_LOADING_INDICATOR')) {
    store.dispatch({ type: SHOW_LOADING_INDICATOR });
  } else if (action.type.endsWith('HIDE_LOADING_INDICATOR_SUCCESS')) {
    store.dispatch({ type: HIDE_LOADING_INDICATOR });
  } else if (action.type.endsWith('HIDE_LOADING_INDICATOR_ERROR')) {
    store.dispatch({ type: HIDE_LOADING_INDICATOR });
  }

  return next(action);
};