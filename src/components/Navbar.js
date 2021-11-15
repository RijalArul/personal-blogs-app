import React from 'react'
import ImageNavbar from '../assets/image/409-4090562_smartphone-vector-mobile-screen-icon-png.png'

function Navbar () {
  return (
    <>
      <nav class='navbar navbar-expand-lg navbar-light '>
        <div class='container-fluid'>
          <a class='navbar-brand' href='#'>
            <img
              src={ImageNavbar}
              width='60'
              height='60'
              class='d-inline-block align-top'
              alt=''
            />
          </a>
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
              <a class='nav-link active' aria-current='page' href='#'>
                Posts
              </a>
              <a class='nav-link' href='#'>
                Todos
              </a>
              <a class='nav-link' href='#'>
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
