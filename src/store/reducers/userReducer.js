const initialState = {
  currentUser: {}
}

function userReducer (state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case 'USER_REGISTER':
      return { ...state }
    default:
      return state
  }
}

export default userReducer
