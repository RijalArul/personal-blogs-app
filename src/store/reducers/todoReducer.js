import { SET_TODO, SET_TODOS, SET_ERRORS } from '../keys'

const initialState = {
  todos: [],
  todoStatus: {},
  currentTodo: null,
  errors: [],
  status: [
    {
      value: 'completed'
    },
    {
      value: 'pending'
    }
  ]
}

function todoReducer (state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case SET_TODOS:
      return { ...state, todos: payload, errors: null }
    case SET_TODO:
      return { ...state, todoStatus: payload }
    case SET_ERRORS:
      return { ...state, errors: payload }
    default:
      return state
  }
}

export default todoReducer
