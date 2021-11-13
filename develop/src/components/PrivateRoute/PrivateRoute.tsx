/* eslint-disable react/jsx-props-no-spreading */
import { Redirect, Route, RouteProps } from 'react-router-dom'
import { useAuth } from 'utils/contexts/auth'

const PrivateRoute: React.FC<RouteProps> = (props) => {
  const auth = useAuth();
  const isAuthenticated = auth.user !== null;

  if (isAuthenticated) {
    return <Route {...props} />
  }
  console.log(`ログインしていないユーザーはアクセスできません`)

  return <Redirect to="/login" />
}

export default PrivateRoute;