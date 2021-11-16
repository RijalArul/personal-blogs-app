import { SET_COMMENTS } from '../keys'
const API_URL = `https://gorest.co.in/public/v1`
const API_KEY = `89952a727d3410c631174eabfa05b6e684aa4cc790b1a15e56bbcc8905c5febe`

export function setComments (payload) {
  return {
    type: SET_COMMENTS,
    payload
  }
}

export function actionFetchComments (payload) {
  return async function (dispatch, getState) {
    try {
      const response = await fetch(
        `https://gorest.co.in/public/v1/posts/${payload}/comments`,
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${API_KEY}`
          }
        }
      )

      const { data } = await response.json()
      dispatch(setComments(data))
    } catch (err) {
      console.log(err)
    }
  }
}
