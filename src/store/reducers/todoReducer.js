import { SET_TODO, SET_TODOS } from '../keys'

const initialState = {
  todos: [],
  todoStatus: {},
  currentTodo: null,
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
      return { ...state, todos: payload }
    case SET_TODO:
      return { ...state, todoStatus: payload }
    default:
      return state
  }
}

export default todoReducer
