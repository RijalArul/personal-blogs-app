import react, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  actionDeleteComment,
  actionEditComment,
  actionFetchComment
} from '../store/actions/commentAction'

function CardComment ({ comment }) {
  const dispatch = useDispatch()
  const [editComment, setEditComment] = useState({})
  const { commentUser } = useSelector(state => state.commentState)

  useEffect(() => {
    setEditComment({
      ...commentUser
    })
  }, [commentUser])

  function editClickComment (id) {
    dispatch(actionFetchComment(id))
  }

  function deleteComment (id) {
    dispatch(actionDeleteComment(id))
  }

  function handleEditSubmit (e) {
    e.preventDefault()
    dispatch(actionEditComment(editComment))
  }

  function handleChange (e) {
    setEditComment({
      ...editComment,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
      <div className='mt-2 comment-card'>
        <div class='w-100'>
          <div class='d-flex justify-content-between align-items-center'>
            <div class='d-flex flex-row align-items-center'>
              {' '}
              <span class='mr-2 comment-card-text'>
                <p>
                  {comment.name}, {comment.email}
                </p>
              </span>{' '}
            </div>{' '}
          </div>
          <p class='text-justify comment-text mb-0 comment-card-text'>
            {comment.body}
          </p>
          <div className='d-flex justify-content-end mt-3'>
            <button
              type='button'
              className='btn btn-primary btn-add-todos'
              data-toggle='modal'
              data-target='#editComment'
              style={{ marginRight: '10px' }}
              onClick={() => editClickComment(comment.id)}
            >
              <i class='fas fa-edit' style={{ color: 'white' }}></i>
            </button>

            <div
              class='modal fade'
              id='editComment'
              tabindex='-1'
              role='dialog'
              aria-labelledby='editCommentLabel'
              aria-hidden='true'
            >
              <div class='modal-dialog' role='document'>
                <div class='modal-content'>
                  <div class='modal-header'>
                    <h5 class='modal-title' id='exampleModalLabel'>
                      Edit Posts
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
                      <form onSubmit={handleEditSubmit}>
                        <div class='form-group'>
                          <input
                            type='text'
                            class='form-control'
                            id='body'
                            name='body'
                            placeholder='body'
                            onChange={e => handleChange(e)}
                            value={editComment.body}
                          />
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
            <button
              class='btn btn-danger btn-add-todos'
              style={{ marginRight: '10px' }}
              onClick={() => deleteComment(comment.id)}
            >
              <i class='fas fa-trash-alt' style={{ color: '#FE5320' }}></i>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default CardComment
