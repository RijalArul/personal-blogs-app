import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import ImageAddTodos from '../assets/image/hands-character-writing-letter-desk-with-papers-pencil-envelopes-coffee-cup_74855-10720.jpg'
import CardPosts from '../components/CardPosts'
import { useSelector, useDispatch } from 'react-redux'
import { actionFetchPosts } from '../store/actions/postActions'

function Posts () {
  const dispatch = useDispatch()
  const [addPost, setAddPost] = useState({})
  const { posts } = useSelector(state => state.postState)
  useEffect(() => {
    dispatch(actionFetchPosts())
  }, [dispatch])

  function handleAddPost (e) {
    e.preventDefault()
    dispatch()
  }

  function handleChange (e) {
    setAddPost({
      ...addPost,
      [e.target.name]: e.target.value
    })
  }

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
                  <form onSubmit={handleAddPost}>
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
                    <div class='mb-3'>
                      <textarea
                        className='form-control area-text-post-body'
                        id='exampleFormControlTextarea1'
                        placeholder='body'
                        rows='9'
                        name='body'
                        onChange={e => handleChange(e)}
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
        {posts &&
          posts.map(post => {
            return (
              <>
                <CardPosts post={post} key={post.id} />
              </>
            )
          })}
      </div>
    </>
  )
}

export default Posts
