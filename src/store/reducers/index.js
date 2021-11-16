import { combineReducers } from 'redux'
import userReducer from './userReducer'
import todoReducer from './todoReducer'
import postReducer from './postReducer'
import commentReducer from './commentReducer'

const reducer = combineReducers({
  userState: userReducer,
  todoState: todoReducer,
  postState: postReducer,
  commentState: commentReducer
})

export default reducer
