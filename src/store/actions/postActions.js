import { SET_POST, SET_POSTS } from '../keys'
const API_URL = `https://gorest.co.in/public/v1`
const API_KEY = `89952a727d3410c631174eabfa05b6e684aa4cc790b1a15e56bbcc8905c5febe`

export function setPosts (payload) {
  return {
    type: SET_POSTS,
    payload
  }
}

export function setPost (payload) {
  return {
    type: SET_POST,
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

export function actionAddPost (payload) {
  return async function (dispatch, getState) {
    try {
      const response = await fetch(`${API_URL}/posts`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      })

      const { data } = await response.json()
      const { posts } = getState().postState
      const newPosts = [...posts, data]
      dispatch(setPosts(newPosts))
    } catch (err) {
      console.log(err)
    }
  }
}

export function actionFetchPost (payload) {
  return async function (dispatch, getState) {
    try {
      console.log(payload)
    } catch (err) {
      console.log(err)
    }
  }
}
