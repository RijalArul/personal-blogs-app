import { combineReducers } from 'redux'
import userReducer from './userReducer'

const reducer = combineReducers({
  userState: userReducer
})

export default reducer
