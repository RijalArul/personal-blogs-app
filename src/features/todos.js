import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import ImageAddTodos from '../assets/image/hands-character-writing-letter-desk-with-papers-pencil-envelopes-coffee-cup_74855-10720.jpg'
import DateTimePicker from 'react-datetime-picker'
import * as moment from 'moment'
import CardTodos from '../components/CardTodos'
import { useSelector, useDispatch } from 'react-redux'
import { actionAddTodos, actionFetchTodos } from '../store/actions/todoActions'

function Todos () {
  const dispatch = useDispatch()
  const [value, onChange] = useState(new Date())
  const [todo, setTodo] = useState({})
  const { todos, status } = useSelector(state => state.todoState)
  const { currentUser } = useSelector(state => state.userState)

  useEffect(() => {
    dispatch(actionFetchTodos())
  }, [dispatch])

  function handleAddTodo (e) {
    e.preventDefault()
    dispatch(actionAddTodos(todo))
  }

  function handleChange (e) {
    setTodo({
      ...todo,
      [e.target.name]: e.target.value,
      user_id: currentUser.id
    })
  }

  const handleDateTimeRangePickerChange = _value => {
    onChange(_value)
    handleChange({ target: { name: 'due_on', value: _value } })
  }

  return (
    <>
      <Navbar />
      <div className='container'>
        <div class='jumbotron-todos'>
          <h3 className='text-jumbotron'>T O D O S</h3>
        </div>

        <button
          type='button'
          className='btn btn-primary btn-add-todos'
          data-toggle='modal'
          data-target='#exampleModal'
        >
          Add Todos
        </button>

        <div
          class='modal fade'
          id='exampleModal'
          tabindex='-1'
          role='dialog'
          aria-labelledby='exampleModalLabel'
          aria-hidden='true'
        >
          <div class='modal-dialog' role='document'>
            <div class='modal-content'>
              <div class='modal-header'>
                <h5 class='modal-title' id='exampleModalLabel'>
                  Add Todos
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
                  <img src={ImageAddTodos} className='add-todos-images' />
                  <form onSubmit={handleAddTodo}>
                    <div class='form-group'>
                      <input
                        type='text'
                        class='form-control'
                        id='exampleInputTitle1'
                        placeholder='title'
                        name='title'
                        onChange={e => handleChange(e)}
                      />
                    </div>
                    <div class='form-group'>
                      <DateTimePicker
                        value={value}
                        name='due_on'
                        minDate={moment().toDate()}
                        placeholderText='Select a day'
                        className='add-todos-dates'
                        onChange={handleDateTimeRangePickerChange}
                      />
                    </div>

                    <div class='form-group'>
                      <select
                        class='form-control'
                        id='select-status'
                        name='status'
                        onChange={e => handleChange(e)}
                      >
                        <option selected disabled>
                          Select Status
                        </option>
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
        {todos &&
          todos.map(todo => {
            return <CardTodos key={todo.id} todo={todo} />
          })}
      </div>
    </>
  )
}

export default Todos
