import { useEffect } from 'react';
import { useHistory } from 'react-router';
import { Box } from '@mui/material';

import LoginImage from 'assets/images/login_top.jpg';

import PageTemplate from 'components/PageTemplate/PageTemplate';

import { theme } from 'utils/constants/themeConstant';
import { URL_ITEM } from 'utils/constants/commonConstant';
import { useAuth } from 'utils/contexts/auth';

import AuthInput from './AuthInput'


/**
 * ログインページ コンポーネント
 * @returns 
 */
const AuthPage: React.FC = () => {
  const history = useHistory();
  const auth = useAuth();

  /**
   * ログイン情報を取得している場合、トップページへ遷移する
   */
  useEffect(() => {
    if (auth.user !== null) {
      history.push(URL_ITEM.TOP)
    }
  }, [auth.user, history]);

  return (
    <PageTemplate>
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        padding: '2rem',
        minHeight: '100vh',
        width: '100%',
        animation: '$fadeIn 1s',
        fontFamily: theme.fontFamily.english,
      }}>
        <Box sx={{
          position: 'fixed',
          backgroundImage: `url(${LoginImage})`,
          backgroundSize: "cover",
          minHeight: '100vh',
          width: '100%',
          zIndex: -1,
          filter: 'blur(2px) brightness(.8)',
        }} />
        <AuthInput auth={auth} />
      </Box>
    </PageTemplate>
  );
};

export default AuthPage;
