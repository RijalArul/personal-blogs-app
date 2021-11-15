import React from 'react'

function CardTodos () {
  return (
    <>
      <div class='card mt-3 mb-3'>
        <div class='card-body-todos'>
          <h5>
            This is some text within a card body, 14 November 2021 08:20:17{' '}
            <select className='select-active'>
              <option>1</option>
              <option>1</option>
              <option>1</option>
            </select>
            <button>Delete</button>
          </h5>
        </div>
      </div>
    </>
  )
}

export default CardTodos
