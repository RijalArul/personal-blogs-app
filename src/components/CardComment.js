function CardComment ({ comments }) {
  return (
    <>
      <div className='mt-2 comment-card'>
        <div class='w-100'>
          <div class='d-flex justify-content-between align-items-center'>
            <div class='d-flex flex-row align-items-center'>
              {' '}
              <span class='mr-2 comment-card-text'>
                <p>{comments.name}</p>
              </span>{' '}
            </div>{' '}
            <small>12h ago</small>
          </div>
          <p class='text-justify comment-text mb-0 comment-card-text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
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
