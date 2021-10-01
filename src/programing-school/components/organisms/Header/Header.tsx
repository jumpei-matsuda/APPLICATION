import { makeStyles, Box, Button } from '@material-ui/core';
import { useHistory } from 'react-router';
import { headerSourceList } from 'constants/pageSourceConst';
import logo from 'images/logo.svg';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    height: '5rem',
    background: 'white',
    zIndex: 2,
    display: 'flex',
    position: 'fixed',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 5%',
    transition: '0.5s',
  },
  '@keyframes fadeIn': {
    '0%': {
      opacity: 0,
    },
    '100%': {
      opacity: 0.8,
    },
  },
  navi: {
    display: 'flex',
    flexDirection: 'row',
  },
  logo: {
    width: '15rem',
    height: 'fit-content',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  naviItem: {
    margin: '0 2rem',
    color: '#061b94',
    fontWeight: 900,
    fontFamily: 'Sawarabi Mincho, sans-serif',
  },
  button: {
    backgroundColor: '#061b94',
    color: '#fff',
    border: 'solid #061b94',
    borderRadius: '30px',
    padding: '.5rem',
    '&:hover': {
      color: '#061b94',
      background: '#f3f3f3',
    },
  },
}));

const TopPage: React.VFC = () => {
  const classes = useStyles();
  const history = useHistory();

  const movePage = (url: string) => () => {
    history.push(url);
  };

  return (
    <Box className={classes.root}>
      <Box display="flex" justifyContent="start">
        <img
          className={classes.logo}
          src={logo}
          alt="logo"
          role="presentation"
          onClick={movePage('/')}
        />
        <ul className={classes.navi}>
          {headerSourceList.map((source) => (
            <Button
              className={classes.naviItem}
              key={source.id}
              onClick={movePage(source.url)}
            >
              {source.content}
            </Button>
          ))}
        </ul>
      </Box>
      <Button className={classes.button}>無料体験レッスン</Button>
    </Box>
  );
};

export default TopPage;
