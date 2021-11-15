import { SET_TODOS } from '../keys'
const API_URL = `https://gorest.co.in/public/v1`
const API_KEY = `89952a727d3410c631174eabfa05b6e684aa4cc790b1a15e56bbcc8905c5febe`

export function setTodos (payload) {
  return {
    type: SET_TODOS,
    payload
  }
}

export function actionFetchTodos (payload) {
  return async function (dispatch, getState) {
    try {
      const { currentUser } = getState().userState
      const response = await fetch(
        `${API_URL}/users/${currentUser.user_id}/todos`,
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${API_KEY}`
          }
        }
      )

      const { data } = await response.json()
      dispatch(setTodos(data))
    } catch (err) {
      console.log(err)
    }
  }
}
