import React, { useEffect } from 'react';
import { Switch, Route, useHistory, useLocation } from 'react-router';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from 'constants/themeConst';

import TopPage from 'components/pages/TopPage/TopPage';
import Introduction from 'components/pages/IntroductionPage/IntroductionPage';
import StoresPage from 'components/pages/StoresPage/StoresPage';
import ContactPage from 'components/pages/ContactPage/ContactPage';

const App: React.FC = () => {
  const { hash, pathname } = useLocation();
  const { action } = useHistory();

  // スクロール位置リセット
  useEffect(() => {
    if (!hash || action !== 'POP') {
      window.scrollTo(0, 0);
    }
  }, [action, hash, pathname]);

  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <Route exact path="/">
          <TopPage />
        </Route>
        <Route path="/introduction">
          <Introduction />
        </Route>
        <Route path="/store">
          <StoresPage />
        </Route>
        <Route path="/contact">
          <ContactPage />
        </Route>
      </Switch>
    </ThemeProvider>
  );
};

export default App;
