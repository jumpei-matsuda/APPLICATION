import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    padding: '1rem',
  },
}));

export type LoginPageProps = {
  isResponsible: boolean;
};

const LoginPage: React.FC<LoginPageProps> = (props) => {
  const classes = useStyles();
  const { isResponsible } = props;

  console.log(isResponsible);

  return (
    <div className={classes.root}>
      <p>ログイン</p>
    </div>
  );
};

export default LoginPage;
