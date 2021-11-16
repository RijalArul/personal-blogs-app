import { SET_COMMENTS } from '../keys'

const initialState = {
  comments: [],
  comment: {}
}

function commentReducer (state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case SET_COMMENTS:
      return { ...state, comments: payload }
    case SET_COMMENT:
      return { ...state, comment: payload }
    default:
      return state
  }
}

export default commentReducer
