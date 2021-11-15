import React, { useState, useEffect } from 'react'

function Register () {
  const [user, setUser] = useState({})
  const [gender, setGender] = useState([])
  const [status, setStatus] = useState([])

  useEffect(() => {
    setGender([
      {
        value: 'male'
      },
      {
        value: 'female'
      }
    ])
  }, [])

  useEffect(() => {
    setStatus([
      {
        value: 'active'
      },
      {
        value: 'inactive'
      }
    ])
  }, [])

  function handleRegister (e) {
    e.preventDefault()
    console.log(user)
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
