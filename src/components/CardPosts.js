import { useNavigate } from 'react-router-dom'

function CardPosts ({ post }) {
  const navigate = useNavigate()
  function clickDetailPost (id) {
    navigate(`/posts/${id}`)
  }
  return (
    <>
      <div class='card mt-5'>
        <div class='card-header'>{post.user_id}</div>
        <div class='card-body'>
          <h3>{post.title}</h3>
          <p class='card-text'>{post.body}</p>
          <a class='btn btn-primary' onClick={() => clickDetailPost(post.id)}>
            See the comment
          </a>
        </div>
      </div>
    </>
  )
}

export default CardPosts
