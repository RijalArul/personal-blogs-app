import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { actionFetchPost } from '../store/actions/postActions'
import CardComment from '../components/CardComment'
import {
  actionAddComments,
  actionFetchComments
} from '../store/actions/commentAction'
function PostDetail () {
  const [comment, setComment] = useState({})
  const { id } = useParams()
  const { post } = useSelector(state => state.postState)
  const { comments } = useSelector(state => state.commentState)
  const { currentUser } = useSelector(state => state.userState)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(actionFetchPost(id))
  }, [dispatch])

  useEffect(() => {
    dispatch(actionFetchComments(id))
  }, [])

  function handleAddComment (e) {
    e.preventDefault()
    dispatch(actionAddComments(comment))
  }

  function handleChange (e) {
    setComment({
      ...comment,
      [e.target.name]: e.target.value,
      email: currentUser.email,
      name: currentUser.name,
      post_id: post.id
    })
  }

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
                  <form class='row g-3' onSubmit={handleAddComment}>
                    <div class='col-auto'>
                      <label for='inputComment2' class='visually-hidden'>
                        comment
                      </label>
                      <input
                        type='text'
                        className='form-control comment-text-input'
                        id='inputcomment2'
                        name='body'
                        placeholder='comment'
                        onChange={e => handleChange(e)}
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
                {comments &&
                  comments.map(comment => {
                    return (
                      <>
                        <CardComment comment={comment} key={comment.id} />
                      </>
                    )
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PostDetail
