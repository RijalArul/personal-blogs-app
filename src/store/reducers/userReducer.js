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
    case 'USER_REGISTER':
      return { ...state }
    default:
      return state
  }
}

export default userReducer
