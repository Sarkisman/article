import { GET_ONE } from '../types';

export default function currentArticleReducer(state = [], action) {
  const { type, payload } = action;
  switch (type) {
    case GET_ONE:
      return payload;
    default:
      return state;
  }
}