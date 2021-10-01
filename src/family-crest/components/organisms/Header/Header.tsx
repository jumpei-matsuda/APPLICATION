import React, { useState } from 'react';
import { makeStyles, Box, TextField, Button } from '@material-ui/core';
import { Theme } from 'constants/themeConst';
import { useHistory } from 'react-router';
import { conditionList, naviList } from 'constants/pageSourceConst';

import logo from 'images/logo.png';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: 'static',
    background: theme.color.black,
  },
  img: {
    minWidth: '300px',
    width: '20rem',
    backgroundSize: 'cover',
  },
  searchField: {
    display: 'flex',
    height: '100%',
  },
  headerLine: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
  },
  textField: {
    background: theme.color.white,
    height: '100%',
    minWidth: '200px',
    width: '20rem',
  },
  searchIcon: {
    background: theme.color.gray,
    color: theme.color.white,
    fontSize: '1.675rem',
    height: '2rem',
    width: '2rem',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  conditionList: {
    display: 'flex',
    justifyContent: 'start',
  },
  conditionItem: {
    border: 'none',
    margin: '0 1rem',
    color: theme.color.white,
    fontSize: '1.125rem',
    fontWeight: 900,
    fontFamily: 'Hiragino Kaku Gothic ProN',
  },
  naviList: {
    display: 'flex',
    justifyContent: 'end',
  },
  menuButton: {
    border: `1px solid ${theme.color.white}`,
    margin: '0 1rem',
    color: theme.color.white,
    fontSize: '1.125rem',
    fontFamily: 'Hiragino Kaku Gothic ProN',
  },
}));

export type HeaderProps = {
  isResponsible: boolean;
};

const Header: React.FC<HeaderProps> = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const { isResponsible } = props;

  const [keyword, setKeyword] = useState<string>('');

  const movePage =
    (url = '/') =>
    () => {
      history.push(url);
    };

  console.log(isResponsible);

  return (
    <div className={classes.root}>
      <Box className={classes.headerLine}>
        <img className={classes.img} src={logo} alt="logo" />
        <Box className={classes.searchField}>
          <TextField
            placeholder="キーワードから検索"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className={classes.textField}
          />
          <i className={`fas fa-search ${classes.searchIcon}`} />
        </Box>
      </Box>
      <Box className={classes.headerLine}>
        <Box className={classes.conditionList}>
          {conditionList.map((condition) => (
            <Button
              key={condition.id}
              className={classes.conditionItem}
              onClick={movePage(condition.url)}
            >
              {condition.content}
            </Button>
          ))}
        </Box>
        <Box className={classes.naviList}>
          {naviList.map((navi) => (
            <Button key={navi.id} className={classes.menuButton}>
              {navi.content}
            </Button>
          ))}
        </Box>
      </Box>
    </div>
  );
};

export default Header;
