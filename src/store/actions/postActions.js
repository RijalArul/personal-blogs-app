import { SET_POSTS } from '../keys'
const API_URL = `https://gorest.co.in/public/v1`
const API_KEY = `89952a727d3410c631174eabfa05b6e684aa4cc790b1a15e56bbcc8905c5febe`

export function setPosts (payload) {
  return {
    type: SET_POSTS,
    payload
  }
}

export function actionFetchPosts () {
  return async function (dispatch) {
    try {
      const response = await fetch(`${API_URL}/posts`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${API_KEY}`
        }
      })

      const { data } = await response.json()
      dispatch(setPosts(data))
    } catch (err) {
      console.log(err)
    }
  }
}
