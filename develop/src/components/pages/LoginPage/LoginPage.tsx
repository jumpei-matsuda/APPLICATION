import { useEffect } from 'react';
import { Box, makeStyles } from '@material-ui/core';
import Form, { InputTextType } from 'components/molecules/Form';
import { InputForm } from 'constants/commonConstant';
import { Theme } from 'constants/themeConstant';
import PageTemplate from 'components/templates/PageTemplate';

import { useAuth, AuthInfo } from 'contexts/auth';
import { useHistory } from 'react-router';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '2rem',
  },
  border: {
    border: 'solid 1px',
  },
  title: {
    textAlign: 'center',
    fontFamily: theme.fontFamily.english,
    fontSize: '2rem',
    padding: '.5rem',
  },
  textBox: {
    width: '20rem',
    margin: '.5rem',
  },
}));

/**
 * ログインページ コンポーネント
 * @returns 
 */
const LoginPage: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();
  const auth = useAuth();

  const items: InputTextType[] = [
    { id: 1, name: 'userId', title: 'ID' },
    { id: 2, name: 'password', title: 'Password', type: 'password' }
  ]

  useEffect(() => {
    if (auth.user !== null) {
      history.push("/")
    }
  }, [auth.user, history]);

  const onSubmit = (data: InputForm) => {
    if (!data.userId || !data.password) {
      console.log('ユーザーIDまたはパスワードが入力されていません。')

      return;
    }
    // submitする項目を抽出する
    const submitItem: AuthInfo = {
      userId: data.userId,
      password: data.password,
    }

    const result = auth.signin(submitItem);
    if (!result) {
      console.log('error.')
    }
  }

  return (
    <PageTemplate>
      <Box className={classes.root}>
        <Box className={classes.border}>
          <h1 className={classes.title}>Sign In</h1>
          <Form
            items={items}
            position='center'
            onSubmit={onSubmit} />
        </Box>
      </Box>
    </PageTemplate>
  );
};

export default LoginPage;
