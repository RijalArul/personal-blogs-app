import { SET_COMMENTS } from '../keys'

export function setComments (payload) {
  return {
    type: SET_COMMENTS,
    payload
  }
}

export function actionFetchComments () {
  return async function (dispatch, getState) {
    console.log('masuk')
  }
}
