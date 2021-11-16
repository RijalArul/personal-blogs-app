import { SET_POSTS } from '../keys'

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
