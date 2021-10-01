import React, { useEffect } from 'react';
import { Switch, Route, useHistory, useLocation } from 'react-router';
import { ThemeProvider } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { theme } from 'constants/themeConst';

import { TopPage } from 'components/pages/TopPage/index';
import { LoginPage } from 'components/pages/LoginPage/index';
import { MemberInfoEditPage } from 'components/pages/MemberInfoEditPage/index';

const App: React.FC = () => {
  const { hash, pathname } = useLocation();
  const { action } = useHistory();

  // スクロール位置リセット
  useEffect(() => {
    if (!hash || action !== 'POP') {
      window.scrollTo(0, 0);
    }
  }, [action, hash, pathname]);

  // レスポンシブ対応（ブレークポイント：600px）
  const isResponsible = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <Route exact path="/">
          <TopPage isResponsible={isResponsible} />
        </Route>
        <Route path="/introduction">
          <LoginPage isResponsible={isResponsible} />
        </Route>
        <Route path="/store">
          <MemberInfoEditPage isResponsible={isResponsible} />
        </Route>
      </Switch>
    </ThemeProvider>
  );
};

export default App;
