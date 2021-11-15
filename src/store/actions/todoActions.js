import { SET_TODOS } from '../keys'

export function setTodos (payload) {
  return {
    type: SET_TODOS,
    payload
  }
}

export function actionFetchTodos (payload) {
  return async function (dispatch, getState) {
    console.log(getState)
  }
}
