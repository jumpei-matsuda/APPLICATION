import { authContext, useProvideAuth } from './AuthHooks';

const AuthProvider: React.FC = (props) => {
  const { children } = props;
  const auth = useProvideAuth();

  return (
    <authContext.Provider value={auth} >
      {children}
    </authContext.Provider>
  )
};
export default AuthProvider;
