import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import ImageAddTodos from '../assets/image/hands-character-writing-letter-desk-with-papers-pencil-envelopes-coffee-cup_74855-10720.jpg'
import CardPosts from '../components/CardPosts'
import { useSelector, useDispatch } from 'react-redux'
import {
  actionAddPost,
  actionFetchPosts,
  actionSearchTitle
} from '../store/actions/postActions'
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition
const mic = new SpeechRecognition()

mic.continuous = true
mic.interimResults = true
mic.lang = 'in-IDR'

function Posts () {
  const dispatch = useDispatch()
  const [addPost, setAddPost] = useState({})
  const [isListening, setIsListening] = useState(false)
  const [note, setNote] = useState(null)
  const { posts } = useSelector(state => state.postState)
  const { currentUser } = useSelector(state => state.userState)

  useEffect(() => {
    handleListen()
  }, [isListening])

  useEffect(() => {
    dispatch(actionFetchPosts())
  }, [])
  const handleListen = () => {
    if (isListening) {
      mic.start()
      mic.onend = () => {
        console.log('continue..')
        mic.start()
      }
    } else {
      mic.stop()
      mic.onend = () => {
        console.log('Stopped Mic')
      }
    }
    mic.onstart = () => {
      console.log('Mics on ready')
    }

    mic.onresult = event => {
      const transcript = Array.from(event.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('')
      setNote(transcript)
      mic.onerror = event => {
        console.log(event.error)
      }
    }
  }

  const handleSaveNote = () => {
    dispatch(actionSearchTitle(note))
    setNote('')
  }

  function handleAddPost (e) {
    e.preventDefault()
    dispatch(actionAddPost(addPost))
  }

  function handleChange (e) {
    setAddPost({
      ...addPost,
      [e.target.name]: e.target.value,
      user_id: currentUser.id
    })
  }

  return (
    <>
      <Navbar />
      <div className='container'>
        <div className='jumbotron-posts'>
          <h2> P O S T S</h2>
        </div>
        <div
          className='container-speech'
          style={{ margin: '20px', display: 'grid' }}
        >
          <div>
            <h2>Title Search</h2>
            {isListening ? <span>🎙️</span> : <span>🛑🎙️</span>}
            <button
              onClick={handleSaveNote}
              style={{
                height: '10px',
                margin: '30px',
                padding: '20px',
                borderRadius: '5px'
              }}
              disabled={!note}
            >
              Save Search
            </button>
            <button onClick={() => setIsListening(prevState => !prevState)}>
              Start/Stop
            </button>
            <p>{note}</p>
          </div>
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
