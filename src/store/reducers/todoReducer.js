import { SET_TODOS } from '../keys'

const initialState = {
  todos: []
}

function todoReducer (state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case SET_TODOS:
      return { ...state }

    default:
      return state
  }
}

export default todoReducer
