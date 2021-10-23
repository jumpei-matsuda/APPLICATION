import React from 'react';
import { makeStyles, Box, Button } from '@material-ui/core';
import { useHistory } from 'react-router';

import { Theme } from 'constants/themeConstant';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: 'static',
    background: theme.color.navy,
  },
  headerLine: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
  },
  logo: {
    fontSize: '2rem',
    color: 'white',
  },
  conditionList: {
    display: 'flex',
    justifyContent: 'start',
  },
  conditionItem: {
    color: 'white',
    border: 'none',
    margin: '0 1rem',
    fontSize: '1.125rem',
    fontWeight: 900,
    fontFamily: 'Hiragino Kaku Gothic ProN',
  },
}));

export type HeaderProps = {
  isResponsible: boolean;
  header?: boolean;
};

const Header: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();

  const movePage = (url = '/') => {
    history.push(url);
  };

  return (
    <>
      <div className={classes.root}>
        <Box className={classes.headerLine}>
          <span className={classes.logo}>ヘッダー</span>
          <Box className={classes.conditionList}>
            <Button className={classes.conditionItem} type='button' onClick={() => movePage('/')}>トップページ</Button>
            <Button className={classes.conditionItem} type='button' onClick={() => movePage('/login')}>ログイン</Button>
            <Button className={classes.conditionItem} type='button' onClick={() => movePage('/edit')}>プロフィール編集</Button>
          </Box>
        </Box>
      </div>
    </>
  );
};

export default Header;
