import { Route, Navigate, useLocation } from 'react-router-dom'

function PrivateRoutes ({ children }) {
  // let auth = useAuth()
  let location = useLocation()

  if (!localStorage.getItem('access_token')) {
    return <Navigate to='/register' state={{ from: location }} />
  }

  return children
}

export default PrivateRoutes
