import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setActionRegister, setErrors } from '../store/actions/userAction'
import { toast } from 'react-toastify'

function Register () {
  const dispatch = useDispatch()
  const navigation = useNavigate()
  const { gender, status, errors } = useSelector(state => state.userState)
  const [user, setUser] = useState({})

  useEffect(() => {
    if (errors) {
      errors.forEach(error => {
        toast.error(error.message)
      })
      dispatch(setErrors(''))
    }

    if (localStorage.getItem('currentUser')) {
      toast.success('Register sucess')
      setTimeout(() => {
        navigation('/todos')
      }, 2000)
    }
  }, [dispatch, errors])

  function handleRegister (e) {
    e.preventDefault()
    dispatch(setActionRegister(user))
  }

  function handleChange (e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }
  return (
    <>
      <div>
        <img
          src='https://uploads-ssl.webflow.com/5c8607099eacd1746f6743c0/5d6be775a3a53e0896ff5931_Teamwork.svg'
          className='register-logo'
          alt='logo'
        />
      </div>
      <div className='register-page'>
        <div className='card-register'>
          <h5 className='card-title'>
            Welcome
            <br />
            <strong className='todo-app-title'> Personal App</strong>
          </h5>

          <div class='card-register-body'>
            <form onSubmit={handleRegister}>
              <div class='form-group'>
                <input
                  type='email'
                  name='email'
                  class='form-control'
                  id='exampleInputEmail1'
                  aria-describedby='emailHelp'
                  placeholder='Enter email'
                  onChange={e => handleChange(e)}
                />
              </div>
              <div class='form-group'>
                <input
                  type='text'
                  name='name'
                  class='form-control'
                  id='exampleInputname1'
                  placeholder='name'
                  onChange={e => handleChange(e)}
                />
              </div>
              <div class='form-group'>
                <select
                  class='form-control'
                  id='select-gender'
                  name='gender'
                  onChange={e => handleChange(e)}
                >
                  <option selected disabled>
                    Select Gender
                  </option>
                  {gender &&
                    gender.map(gen => {
                      return (
                        <>
                          <option value={gen.value} name={gen.value}>
                            {gen.value}
                          </option>
                        </>
                      )
                    })}
                </select>
              </div>
              <div class='form-group mb-5'>
                <select
                  class='form-control'
                  id='select-status'
                  onChange={e => handleChange(e)}
                  name='status'
                >
                  <option selected disabled>
                    Select Status
                  </option>
                  {status &&
                    status.map(status => {
                      return (
                        <>
                          <option value={status.value}>{status.value}</option>
                        </>
                      )
                    })}
                </select>
              </div>
              <button
                type='submit'
                className='btn btn-primary mt-3 submit-register'
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register
