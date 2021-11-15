import { SET_USER, SET_ERRORS } from '../keys'
const initialState = {
  currentUser: {},
  gender: [
    {
      value: 'male'
    },
    {
      value: 'female'
    }
  ],
  status: [
    {
      value: 'active'
    },
    {
      value: 'inactive'
    }
  ]
}

function userReducer (state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case SET_USER:
      return { ...state, currentUser: payload }
    default:
      return state
  }
}

export default userReducer
