import { SET_COMMENTS, SET_COMMENT, SET_EDIT_COMMENT } from '../keys'

const initialState = {
  comments: [],
  commentUser: {}
}

function commentReducer (state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case SET_COMMENTS:
      return { ...state, comments: payload }
    case SET_COMMENT:
      return {
        ...state,
        commentUser: payload
      }
    default:
      return state
  }
}

export default commentReducer
