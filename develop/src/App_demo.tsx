// import React, { useEffect } from 'react';
import { Switch, Route, /* useHistory, useLocation */ } from 'react-router';
import { ThemeProvider } from '@mui/styles';
// import useMediaQuery from '@material-ui/core/useMediaQuery';

import { AuthPage } from 'views/AuthPage';
import { EditPlofilePage } from 'views/EditPlofilePage';
import { TopPage } from 'views/TopPage';
import { RegisterPage } from 'views/RegisterPage';
import { EditProductPage } from 'views/EditProductPage';

import { URL_ITEM } from 'utils/constants/commonConstant';
import { theme } from 'utils/constants/themeConstant';
import { AuthProvider } from 'utils/contexts/auth'
import { ProductProvider } from 'utils/contexts/product';
import { MasterProvider } from 'utils/contexts/master';
import { MessageProvider } from 'utils/contexts/message';

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
    <MessageProvider>
      <AuthProvider>
        <MasterProvider>
          <ProductProvider>
            <Switch>
              <Route exact path={URL_ITEM.SIGNIN}>
                <AuthPage />
              </Route>
              <Route exact path={URL_ITEM.TOP} >
                <TopPage />
              </Route>
              <Route exact path={URL_ITEM.EDIT_PROFILE} >
                <EditPlofilePage />
              </Route>
              <Route exact path={URL_ITEM.REGISTER} >
                <RegisterPage />
              </Route>
              <Route exact path={`${URL_ITEM.EDIT_PRODUCT}`} >
                <EditProductPage />
              </Route>
            </Switch>
          </ProductProvider>
        </MasterProvider>
      </AuthProvider>
    </MessageProvider>
  </ThemeProvider >
)
  ;
export default App;
