import react from 'react'

function CardPosts ({ post }) {
  return (
    <>
      <div class='card mt-5'>
        <div class='card-header'>{post.user_id}</div>
        <div class='card-body'>
          <h3>{post.title}</h3>
          <p class='card-text'>{post.body}</p>
          <a href='#' class='btn btn-primary'>
            See the comment
          </a>
        </div>
      </div>
    </>
  )
}

export default CardPosts
