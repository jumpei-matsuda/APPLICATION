// import React, { useEffect } from 'react';
import { Switch, Route, /* useHistory, useLocation */ } from 'react-router';
import { ThemeProvider } from '@material-ui/core/styles';
// import useMediaQuery from '@material-ui/core/useMediaQuery';

import PrivateRoute from 'components/common/PrivateRoute';
import { LoginPage } from 'components/pages/LoginPage';
import { EditPlofilePage } from 'components/pages/EditPlofilePage';
import { TopPage } from 'components/pages/TopPage';

import { theme } from 'constants/themeConstant';
import { AuthProvider } from 'contexts/auth'

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
          <LoginPage />
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
