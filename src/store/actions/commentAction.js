import { SET_COMMENTS, SET_COMMENT } from '../keys'
const API_URL = `https://gorest.co.in/public/v1`
const API_KEY = `89952a727d3410c631174eabfa05b6e684aa4cc790b1a15e56bbcc8905c5febe`

export function setComments (payload) {
  return {
    type: SET_COMMENTS,
    payload
  }
}

export function setComment (payload) {
  return {
    type: SET_COMMENT,
    payload
  }
}

export function actionFetchComments (payload) {
  return async function (dispatch, getState) {
    try {
      const response = await fetch(`${API_URL}/posts/${payload}/comments`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${API_KEY}`
        }
      })

      const { data } = await response.json()
      dispatch(setComments(data))
    } catch (err) {
      console.log(err)
    }
  }
}

export function actionAddComments (payload) {
  return async function (dispatch, getState) {
    try {
      const response = await fetch(
        `${API_URL}/posts/${payload.post_id}/comments`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${API_KEY}`,
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        }
      )

      const { comments } = getState().commentState
      const { data } = await response.json()
      const newComments = [...comments, data]

      dispatch(setComments(newComments))
    } catch (err) {
      console.log(err)
    }
  }
}

export function actionFetchComment (payload) {
  return async function (dispatch, getState) {
    try {
      const response = await fetch(`${API_URL}/comments/${payload}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${API_KEY}`
        }
      })

      const { data } = await response.json()
      dispatch(setComment(data))
    } catch (err) {
      console.log(err)
    }
  }
}

export function actionEditComment (payload) {
  return async function (dispatch, getState) {
    try {
      const response = await fetch(`${API_URL}/comments/${payload.id}`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      })

      const { data } = await response.json()
      const comments = getState().commentState.comments
      let comment = getState().commentState.comment
      const indexComment = comments.findIndex(comment => comment.id === data.id)
      comments[indexComment] = data
      comment = comments[indexComment]
      dispatch(setComment(comment))
    } catch (err) {
      console.log(err)
    }
  }
}

export function actionDeleteComment (payload) {
  return async function (dispatch, getState) {
    try {
      await fetch(`${API_URL}/comments/${payload}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      })

      const { comments } = getState().commentState
      const newComments = comments.filter(comment => comment.id !== payload)
      dispatch(setComments(newComments))
    } catch (err) {
      console.log(err)
    }
  }
}
