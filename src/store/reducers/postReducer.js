import { SET_POST, SET_POSTS } from '../keys'
const initialState = {
  posts: [],
  post: {}
}

function postReducer (state = initialState, action) {
  const { payload, type } = action
  switch (type) {
    case SET_POSTS:
      return { ...state, posts: payload }
    case SET_POST:
      return { ...state, post: payload }
    default:
      return state
  }
}

export default postReducer
