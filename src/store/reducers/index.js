import { combineReducers } from 'redux'
import userReducer from './userReducer'
import todoReducer from './todoReducer'
import postReducer from './postReducer'

const reducer = combineReducers({
  userState: userReducer,
  todoState: todoReducer,
  postState: postReducer
})

export default reducer
