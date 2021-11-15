import './App.css'
import Register from './features/register'
import { Routes, Route } from 'react-router-dom'
import Todos from './features/todos'
import Posts from './features/posts'
import PostDetail from './features/postDetail'

function App () {
  return (
    <div className='App'>
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/todos' element={<Todos />} />
        <Route path='/posts' element={<Posts />} />
        <Route path='/posts/:id' element={<PostDetail />} />
      </Routes>
    </div>
  )
}

export default App
