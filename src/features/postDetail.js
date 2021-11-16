import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { actionFetchPost } from '../store/actions/postActions'
function PostDetail () {
  const { id } = useParams()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(actionFetchPost(id))
  }, [dispatch])

  return (
    <>
      <Navbar />
      <div className='container'>
        <div class='card mt-5 card-post-detail'>
          <div class='card-header'>User</div>
          <div class='card-body'>
            <h3>Title</h3>
            <p class='card-text'>
              With supporting text below as a natural lead-in to additional
              content.
            </p>
          </div>
        </div>

        <div className='container mt-5 mb-5'>
          <div class='row height d-flex justify-content-center align-items-center'>
            <div class='col-md-7'>
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
                        className='form-control comment-text'
                        id='inputcomment2'
                        placeholder='comment'
                      />
                    </div>
                    <div class='col-auto'>
                      <button type='submit' class='btn btn-primary mb-3'>
                        +
                      </button>
                    </div>
                  </form>
                </div>
                <div class='mt-2'>
                  <div class='w-100'>
                    <div class='d-flex justify-content-between align-items-center'>
                      <div class='d-flex flex-row align-items-center'>
                        {' '}
                        <span class='mr-2'>Brian selter</span>{' '}
                        <small class='c-badge'>Top Comment</small>{' '}
                      </div>{' '}
                      <small>12h ago</small>
                    </div>
                    <p class='text-justify comment-text mb-0'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam
                    </p>
                    <div class='d-flex flex-row user-feed'>
                      {' '}
                      <span class='wish'>
                        <i class='fa fa-heartbeat mr-2'></i>24
                      </span>{' '}
                      <span class='ml-3'>
                        <i class='fa fa-comments-o mr-2'></i>Reply
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
