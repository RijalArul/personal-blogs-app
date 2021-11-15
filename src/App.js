import './App.css'
import Register from './features/register'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Todos from './features/todos'
import Posts from './features/posts'
import PostDetail from './features/postDetail'
import PrivateRoutes from './routers/PrivateRoutes'
import PublicRoutes from './routers/PublicRoutes'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App () {
  return (
    <div className='App'>
      <ToastContainer autoClose={1500} />
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
