import React, { useState, useEffect } from 'react'
import * as moment from 'moment'
import { useSelector } from 'react-redux'

function CardTodos ({ todo }) {
  const [statusTodo, setStatusTodo] = useState()
  const { status } = useSelector(state => state.todoState)
  useEffect(() => {
    setStatusTodo({
      statusTodo: todo.status
    })
  }, [])

  function handleChange (e) {
    setStatusTodo({
      ...statusTodo,
      statusTodo: e.target.value
    })
  }

  function deleteTodo (id) {
    console.log(id)
  }
  return (
    <>
      <div class='card mt-3 mb-3'>
        <div class='card-body-todos'>
          <h5>
            {`${todo.title}, ${moment(todo.due_on).format(
              `MMMM Do YYYY, h:mm:ss a`
            )}`}{' '}
            <select
              className='select-active'
              value={statusTodo}
              onChange={e => handleChange(e)}
            >
              {status &&
                status.map(status => {
                  return (
                    <>
                      <option value={status.value}>{status.value}</option>
                    </>
                  )
                })}
            </select>
            <button onClick={id => deleteTodo(todo.id)}>Delete</button>
          </h5>
        </div>
      </div>
    </>
  )
}

export default CardTodos
