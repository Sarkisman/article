import { GET_COMMENTS, ADD_COMMENT } from '../types';

export default function currentArticleReducer(state = [], action) {
  const { type, payload } = action;
  switch (type) {
    case GET_COMMENTS:
      return payload;
      case ADD_COMMENT:
        return [...state, payload];
    default:
      return state;
  }
}