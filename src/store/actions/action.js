const { SET_USER, SET_ERRORS } = require('../keys')

export function setUser (payload) {
  return {
    type: SET_USER,
    payload
  }
}

export function setActionRegister (payload) {
  return function (dispatch) {
    console.log(payload)
  }
}
