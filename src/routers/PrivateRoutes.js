import { Navigate, useLocation } from 'react-router-dom'

function PrivateRoutes ({ children }) {
  let location = useLocation()

  if (!localStorage.getItem('currentUser')) {
    return <Navigate to='/register' state={{ from: location }} />
  }

  return children
}

export default PrivateRoutes
