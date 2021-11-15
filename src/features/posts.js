import React from 'react'
import Navbar from '../components/Navbar'
import ImageAddTodos from '../assets/image/hands-character-writing-letter-desk-with-papers-pencil-envelopes-coffee-cup_74855-10720.jpg'

function Posts () {
  return (
    <>
      <Navbar />
      <div className='container'>
        <div className='jumbotron-posts'>
          <h2> P O S T S</h2>
        </div>
        <button
          type='button'
          className='btn btn-primary btn-add-todos'
          data-toggle='modal'
          data-target='#exampleModal'
        >
          Add Posts
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
                  Add Posts
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
                  <form>
                    <div class='form-group'>
                      <input
                        type='text'
                        class='form-control'
                        id='exampleInputTitle1'
                        placeholder='title'
                      />
                    </div>
                    <div class='mb-3'>
                      <textarea
                        className='form-control area-text-post-body'
                        id='exampleFormControlTextarea1'
                        placeholder='body'
                        rows='9'
                      ></textarea>
                    </div>
                    <button
                      type='submit'
                      class='btn btn-primary mt-3 btn-add-posts'
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
        <div class='card mt-5'>
          <div class='card-header'>User</div>
          <div class='card-body'>
            <h3>Title</h3>
            <p class='card-text'>
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a href='#' class='btn btn-primary'>
              Go somewhere
            </a>
          </div>
        </div>

        <div class='card mt-5'>
          <div class='card-header'>User</div>
          <div class='card-body'>
            <h3>Title</h3>
            <p class='card-text'>
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a href='#' class='btn btn-primary'>
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Posts
