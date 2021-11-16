import { SET_POSTS } from '../keys'
const initialState = {
  posts: []
}

function postReducer (state = initialState, action) {
  const { payload, type } = action
  switch (type) {
    case SET_POSTS:
      return { ...state, posts: payload }
    default:
      return state
  }
}

export default postReducer
