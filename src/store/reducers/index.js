import { combineReducers } from 'redux'
import userReducer from './userReducer'
import todoReducer from './todoReducer'

const reducer = combineReducers({
  userState: userReducer,
  todoState: todoReducer
})

export default reducer
