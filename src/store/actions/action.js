import { SET_USER, SET_ERRORS } from '../keys'

export function setUser (payload) {
  return {
    type: SET_USER,
    payload
  }
}

export function setActionRegister (payload) {
  return function (dispatch) {
    try {
      dispatch(setUser(payload))
    } catch (err) {
      console.log(err)
    }
  }
}
