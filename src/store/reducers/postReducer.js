import { SET_POST, SET_POSTS, SET_ERRORS } from '../keys'
const initialState = {
  posts: [],
  post: {},
  errors: []
}

function postReducer (state = initialState, action) {
  const { payload, type } = action
  switch (type) {
    case SET_POSTS:
      return { ...state, posts: payload }
    case SET_POST:
      return { ...state, post: payload }
    case SET_ERRORS:
      return { ...state, errors: payload }
    default:
      return state
  }
}

export default postReducer
