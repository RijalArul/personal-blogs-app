import { SET_POST, SET_POSTS, SET_ERRORS } from '../keys'
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

export function setErrors (payload) {
  return {
    type: SET_ERRORS,
    payload
  }
}

export function actionFetchPosts (payload) {
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

export function actionSearchTitle (payload) {
  return async function (dispatch) {
    try {
      const response = await fetch(`${API_URL}/posts?title=${payload}`, {
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

      if (response.status === 422) {
        const { data } = await response.json()
        throw { name: 'Error_Posts', errors: data }
      } else {
        const { data } = await response.json()
        const { posts } = getState().postState
        const newPosts = [...posts, data]
        dispatch(setPosts(newPosts))
      }
    } catch (err) {
      if (err.name === 'Error_Posts') {
        const errors = err.errors.map(error => {
          return {
            message: `${error.field}: ${error.message}`
          }
        })

        dispatch(setErrors(errors))
      }
    }
  }
}

export function actionFetchPost (payload) {
  return async function (dispatch, getState) {
    try {
      const response = await fetch(`${API_URL}/posts/${payload}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${API_KEY}`
        }
      })
      const { data } = await response.json()
      dispatch(setPost(data))
    } catch (err) {
      console.log(err)
    }
  }
}
