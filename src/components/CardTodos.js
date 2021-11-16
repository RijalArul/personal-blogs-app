import React, { useState, useEffect } from 'react'
import * as moment from 'moment'
import { useSelector, useDispatch } from 'react-redux'
import { actionFetchTodo, actionEditTodo } from '../store/actions/todoActions'

function CardTodos ({ todo }) {
  const dispatch = useDispatch()
  const [statusTodo, setStatusTodo] = useState({})
  const { status, todoStatus } = useSelector(state => state.todoState)
  useEffect(() => {
    setStatusTodo({
      ...todoStatus
    })
  }, [todoStatus])

  function handleEditTodo (e) {
    e.preventDefault()
    dispatch(actionEditTodo(statusTodo))
  }

  function handleChange (e) {
    setStatusTodo({
      ...statusTodo,
      [e.target.name]: e.target.value
    })
  }

  function editClick (id) {
    dispatch(actionFetchTodo(id))
  }

  function deleteTodo (id) {}
  return (
    <>
      <div class='card mt-3 mb-3'>
        <div class='card-body-todos'>
          <h5>
            {`${todo.title}, ${moment(todo.due_on).format(
              `MMMM Do YYYY, h:mm:ss a`
            )}`}{' '}
            <button
              type='button'
              className='btn btn-primary btn-edit-todos'
              data-toggle='modal'
              data-target='#editTodos'
              onClick={() => editClick(todo.id)}
            >
              {todo.status}
            </button>
            <div
              class='modal fade'
              id='editTodos'
              tabindex='-1'
              role='dialog'
              aria-labelledby='exampleModalLabel'
              aria-hidden='true'
            >
              <div class='modal-dialog' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>
                      Edit Todos
                    </h5>
                    <button
                      type='button'
                      class='close'
                      data-dismiss='modal'
                      aria-label='Close'
                    >
                      <span aria-hidden='true'>&times;</span>
                    </button>
                  </div>
                  <div class='modal-body'>
                    <div class='float-right'>
                      <form onSubmit={handleEditTodo}>
                        <div class='form-group'>
                          <select
                            class='form-control'
                            id='select-status'
                            name='status'
                            value={statusTodo.status}
                            onChange={e => handleChange(e)}
                          >
                            {status &&
                              status.map(status => {
                                return (
                                  <option value={status.value}>
                                    {status.value}
                                  </option>
                                )
                              })}
                          </select>
                        </div>
                        <button
                          type='submit'
                          className='btn btn-primary submit-add-todos'
                        >
                          Submit
                        </button>
                      </form>
                    </div>
                  </div>
                  <div class='modal-footer'>
                    <button
                      type='button'
                      data-dismiss='modal'
                      class='btn btn-primary'
                    >
                      Back
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <button
              className='btn btn-danger'
              onClick={id => deleteTodo(todo.id)}
            >
              Delete
            </button>
          </h5>
        </div>
      </div>
    </>
  )
}

export default CardTodos
