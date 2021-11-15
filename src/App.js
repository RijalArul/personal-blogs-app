import './App.css'
import Register from './features/register'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Todos from './features/todos'
import Posts from './features/posts'
import PostDetail from './features/postDetail'
import PrivateRoutes from './routers/PrivateRoutes'
import PublicRoutes from './routers/PublicRoutes'

function App () {
  return (
    <div className='App'>
      <Routes>
        <Route
          path='/register'
          element={
            <PublicRoutes>
              <Register />
            </PublicRoutes>
          }
        />
        <Route
          path='/todos'
          element={
            <PrivateRoutes>
              <Todos />
            </PrivateRoutes>
          }
        />
        <Route
          path='/posts'
          element={
            <PrivateRoutes>
              <Posts />
            </PrivateRoutes>
          }
        />
        <Route
          path='/posts/:id'
          element={
            <PrivateRoutes>
              <PostDetail />
            </PrivateRoutes>
          }
        />
      </Routes>
    </div>
  )
}

export default App
