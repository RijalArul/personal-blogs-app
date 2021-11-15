import React from 'react'

function Register () {
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
            <form>
              <div class='form-group'>
                <input
                  type='email'
                  class='form-control'
                  id='exampleInputEmail1'
                  aria-describedby='emailHelp'
                  placeholder='Enter email'
                />
              </div>
              <div class='form-group'>
                <input
                  type='text'
                  class='form-control'
                  id='exampleInputname1'
                  placeholder='name'
                />
              </div>
              <div class='form-group'>
                <select class='form-control' id='select-gender'>
                  <option selected disabled>
                    Select Gender
                  </option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
              <div class='form-group mb-5'>
                <select class='form-control' id='select-status'>
                  <option>Active</option>
                  <option>Inactive</option>
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
