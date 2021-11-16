import react, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { actionFetchComment } from '../store/actions/commentAction'
import ImageAddTodos from '../assets/image/hands-character-writing-letter-desk-with-papers-pencil-envelopes-coffee-cup_74855-10720.jpg'

function CardComment ({ comment }) {
  const dispatch = useDispatch()
  const [editComment, setEditComment] = useState({})
  const { commentUser } = useSelector(state => state.commentState)

  console.log(commentUser)
  //   useEffect(() => {
  //     dispatch(
  //       actionFetchComment({
  //         ...commentUser
  //       })
  //     )
  //   }, [dispatch])
  function editClickComment () {
    dispatch(actionFetchComment(comment))
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
          ;
          <div className='d-flex justify-content-end mt-3'>
            <button class='btn' style={{ padding: '10px' }}>
              <i
                class='fas fa-edit'
                style={{ color: 'blue' }}
                onClick={() => editClickComment(comment.id)}
              ></i>

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
                        <form onSubmit={editClickComment}>
                          <div class='form-group'>
                            <input
                              type='text'
                              class='form-control'
                              id='body'
                              placeholder='body'
                              name='body'
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
            </button>
            <button class='btn' style={{ padding: '10px' }}>
              <i class='fas fa-trash-alt' style={{ color: '#FE5320' }}></i>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default CardComment
