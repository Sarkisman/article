import { SHOW_LOADING_INDICATOR, HIDE_LOADING_INDICATOR } from '../types'

export default function isLoadingReducer(state = false, action) {
  // eslint-disable-next-line no-unused-vars
  const { type, payload } = action
  switch (type) {
    case SHOW_LOADING_INDICATOR:
      return !state
    case HIDE_LOADING_INDICATOR:
      return !state
    default:
      return state
  }
}
