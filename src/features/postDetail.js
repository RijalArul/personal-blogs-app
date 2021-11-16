import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { actionFetchPost } from '../store/actions/postActions'
function PostDetail () {
  const { id } = useParams()
  const { post } = useSelector(state => state.postState)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(actionFetchPost(id))
  }, [dispatch])

  return (
    <>
      <Navbar />
      <div className='container'>
        <div class='card mt-5 card-post-detail'>
          <div class='card-header'>{post.user_id}</div>
          <div class='card-body'>
            <h3>{post.title}</h3>
            <p class='card-text'>{post.body}</p>
          </div>
        </div>

        <div className='container mt-5 mb-5'>
          <div class='row height d-flex justify-content-center align-items-center'>
            <div class='col-md-9'>
              <div class='card'>
                <div class='p-3'>
                  <h6>Comments</h6>
                </div>
                <div class='mt-3 d-flex flex-row align-items-center p-3 form-color'>
                  <form class='row g-3'>
                    <div class='col-auto'>
                      <label for='inputComment2' class='visually-hidden'>
                        comment
                      </label>
                      <input
                        type='text'
                        className='form-control comment-text-input'
                        id='inputcomment2'
                        placeholder='comment'
                        style={{ width: '435px', resize: 'vertical' }}
                      />
                    </div>
                    <div class='col-auto'>
                      <button type='submit' class='btn btn-primary mb-3'>
                        +
                      </button>
                    </div>
                  </form>
                </div>
                <div className='mt-2 comment-card'>
                  <div class='w-100'>
                    <div class='d-flex justify-content-between align-items-center'>
                      <div class='d-flex flex-row align-items-center'>
                        {' '}
                        <span class='mr-2 comment-card-text'>
                          Brian selter
                        </span>{' '}
                      </div>{' '}
                      <small>12h ago</small>
                    </div>
                    <p class='text-justify comment-text mb-0 comment-card-text'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam
                    </p>
                    <div class='d-flex flex-row user-feed'>
                      {' '}
                      <span class='wish'>
                        <i class='fa fa-heartbeat mr-2'></i>
                      </span>{' '}
                      <span class='ml-3'>
                        <i class='fa fa-comments-o mr-2'></i>
                      </span>{' '}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PostDetail
