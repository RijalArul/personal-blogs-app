import React from 'react'
import ImageNavbar from '../assets/image/409-4090562_smartphone-vector-mobile-screen-icon-png.png'
import { useNavigate } from 'react-router-dom'

function Navbar () {
  const navigation = useNavigate()

  function navigatePosts () {
    navigation('/posts')
  }

  function navigationTodos () {
    navigation('/todos')
  }

  return (
    <>
      <nav class='navbar navbar-expand-lg navbar-light '>
        <div class='container-fluid'>
          <button
            class='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNavAltMarkup'
            aria-controls='navbarNavAltMarkup'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span class='navbar-toggler-icon'></span>
          </button>
          <div class='collapse navbar-collapse' id='navbarNavAltMarkup'>
            <div class='navbar-nav'>
              <a
                className='nav-link active'
                href='#'
                style={{ color: 'white' }}
                onClick={() => navigatePosts()}
              >
                Posts
              </a>
              <a
                class='nav-link'
                href='#'
                style={{ color: 'white' }}
                onClick={() => navigationTodos()}
              >
                Todos
              </a>
              <a class='nav-link' href='#' style={{ color: 'white' }}>
                Notification
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
