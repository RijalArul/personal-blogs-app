import { SET_COMMENTS } from '../keys'

const initialState = {
  comments: [],
  comment: {}
}

function commentReducer (state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case SET_COMMENTS:
      return { ...state }
    default:
      return state
  }
}

export default commentReducer
