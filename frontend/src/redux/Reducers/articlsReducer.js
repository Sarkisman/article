import { GET_ARTICLS, SAVE_ARTICL, DELETE_ARTICL } from '../types'

export default function articlsReducer(state = [], action) {
  const { type, payload } = action
  switch (type) {
    case GET_ARTICLS:
      return payload.sort((a, b) => new Date(b.date) - new Date(a.date))
    case SAVE_ARTICL:
      return [...state, payload]
    case DELETE_ARTICL:
      return state.filter((post) => post.id !== payload)
    default:
      return state
  }
}
