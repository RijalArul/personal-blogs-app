import { SET_COMMENTS, SET_COMMENT } from '../keys'

const initialState = {
  comments: [],
  commentUser: JSON.parse(localStorage.getItem('comment'))
}

function commentReducer (state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case SET_COMMENTS:
      return { ...state, comments: payload }
    case SET_COMMENT:
      return {
        ...state,
        commentUser: JSON.parse(localStorage.getItem('comment'))
      }
    default:
      return state
  }
}

export default commentReducer
