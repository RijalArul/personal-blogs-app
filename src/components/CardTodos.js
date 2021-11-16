import React from 'react'
import * as moment from 'moment'
import { useSelector } from 'react-redux'

function CardTodos ({ todo }) {
  const { status } = useSelector(state => state.todoState)
  return (
    <>
      <div class='card mt-3 mb-3'>
        <div class='card-body-todos'>
          <h5>
            {`${todo.title}, ${moment(todo.due_on).format(
              `MMMM Do YYYY, h:mm:ss a`
            )}`}{' '}
            <select className='select-active'>
              {status &&
                status.map(status => {
                  return <option value={status.value}>{status.value}</option>
                })}
            </select>
            <button>Delete</button>
          </h5>
        </div>
      </div>
    </>
  )
}

export default CardTodos
