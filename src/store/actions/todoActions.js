import { SET_TODO, SET_TODOS, SET_ERRORS } from '../keys'
const API_URL = `https://gorest.co.in/public/v1`
const API_KEY = `89952a727d3410c631174eabfa05b6e684aa4cc790b1a15e56bbcc8905c5febe`

export function setTodos (payload) {
  return {
    type: SET_TODOS,
    payload
  }
}

export function setTodo (payload) {
  return {
    type: SET_TODO,
    payload
  }
}

export function setErrors (payload) {
  return {
    type: SET_ERRORS,
    payload
  }
}

export function actionFetchTodos () {
  return async function (dispatch, getState) {
    try {
      const { currentUser } = getState().userState
      const response = await fetch(`${API_URL}/users/${currentUser.id}/todos`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${API_KEY}`
        }
      })

      const { data } = await response.json()
      dispatch(setTodos(data))
    } catch (err) {
      console.log(err)
    }
  }
}

export function actionAddTodos (payload) {
  return async function (dispatch, getState) {
    try {
      const response = await fetch(`${API_URL}/todos`, {
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
        throw { name: 'Error_Todos', errors: data }
      } else {
        const { data } = await response.json()
        const { todos } = getState().todoState
        const result = [...todos, data]
        dispatch(setTodos(result))
      }
    } catch (err) {
      if (err.name === 'Error_Todos') {
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

export function actionFetchTodo (payload) {
  return async function (dispatch, getState) {
    try {
      const response = await fetch(`${API_URL}/todos/${payload}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${API_KEY}`
        }
      })

      const { data } = await response.json()
      dispatch(setTodo(data))
    } catch (err) {
      console.log(err)
    }
  }
}

export function actionEditTodo (payload) {
  return async function (dispatch, getState) {
    try {
      const response = await fetch(`${API_URL}/todos/${payload.id}`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      })

      const { data } = await response.json()

      const todos = getState().todoState.todos
      let todo = getState().todoState.todo
      const indexTodo = todos.findIndex(el => el.id === data.id)
      todos[indexTodo] = data
      todo = todos[indexTodo]
      dispatch(setTodo(todo))
    } catch (err) {
      console.log(err)
    }
  }
}

export function actionDeleteTodo (payload) {
  return async function (dispatch, getState) {
    try {
      await fetch(`${API_URL}/todos/${payload}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${API_KEY}`
        }
      })

      const { todos } = getState().todoState
      const newTodos = todos.filter(todo => todo.id !== payload)
      dispatch(setTodos(newTodos))
    } catch (err) {
      console.log(err)
    }
  }
}
