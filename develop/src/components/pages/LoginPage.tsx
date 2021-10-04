import { Box, makeStyles } from '@material-ui/core';

import Form, { InputTextType } from 'components/molecules/Form';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    height: '100vh',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: '2rem',
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
  const items: InputTextType[] = [
    { id: 1, name: 'userId', title: 'ID' },
    { id: 2, name: 'password', title: 'Password', type: 'password' }
  ]

  return (
    <Box className={classes.root}>
      <Form
        items={items}
        position='center' />
    </Box>
  );
};

export default LoginPage;
