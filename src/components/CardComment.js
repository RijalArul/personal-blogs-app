function CardComment ({ comment }) {
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
              <i class='fas fa-edit' style={{ color: 'blue' }}></i>
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
