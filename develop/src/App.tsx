// import React, { useEffect } from 'react';
import { Switch, Route, /* useHistory, useLocation */ } from 'react-router';
import { ThemeProvider } from '@mui/styles';
// import useMediaQuery from '@material-ui/core/useMediaQuery';

import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import { SignInPage } from 'views/SignInPage';
import { EditPlofilePage } from 'views/EditPlofilePage';
import { TopPage } from 'views/TopPage';

import { theme } from 'utils/constants/themeConstant';
import { AuthProvider } from 'utils/contexts/auth'

const App: React.FC = () => (
  // const { hash, pathname } = useLocation();
  // const { action } = useHistory();

  // スクロール位置リセット
  // useEffect(() => {
  //   if (!hash || action !== 'POP') {
  //     window.scrollTo(0, 0);
  //   }
  // }, [action, hash, pathname]);

  // レスポンシブ対応（ブレークポイント：600px）
  // const isResponsible = useMediaQuery(theme.breakpoints.down('sm'));


  <ThemeProvider theme={theme}>
    <AuthProvider>
      <Switch>
        <Route exact path="/login">
          <SignInPage />
        </Route>
        <PrivateRoute exact path="/" >
          <TopPage />
        </PrivateRoute>
        <PrivateRoute exact path="/edit" >
          <EditPlofilePage />
        </PrivateRoute>
      </Switch>
    </AuthProvider>
  </ThemeProvider>
)
  ;
export default App;
