import { SET_USER, SET_ERRORS } from '../keys'
const API_URL = `https://gorest.co.in/public/v1/users`
const API_KEY = `89952a727d3410c631174eabfa05b6e684aa4cc790b1a15e56bbcc8905c5febe`

export function setUser (payload) {
  return {
    type: SET_USER,
    payload
  }
}

export function setErrors (payload) {
  return {
    type: SET_ERRORS,
    payload
  }
}

export function setActionRegister (payload) {
  return async function (dispatch) {
    try {
      const response = await fetch(API_URL, {
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
        throw { name: 'Error_Register', errors: data }
      } else {
        const { data } = await response.json()
        localStorage.setItem('currentUser', data)
        dispatch(setUser())
      }
    } catch (err) {
      if (err.name === 'Error_Register') {
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
