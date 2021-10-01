import { makeStyles, Box, Button } from '@material-ui/core';
import { useHistory } from 'react-router';
import { headerSourceList } from 'constants/pageSourceConst';

const useStyles = makeStyles(() => ({
  root: {
    width: '100v%',
    height: '10rem',
    background: '#061b94',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
  },
  navi: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '1.5rem',
  },
  naviItem: {
    margin: '0 2rem',
    color: 'white',
    fontWeight: 900,
    fontFamily: 'Sawarabi Mincho, sans-serif',
  },
}));

const Footer: React.VFC = () => {
  const classes = useStyles();
  const history = useHistory();

  const movePage = (url: string) => () => {
    history.push(url);
  };

  return (
    <Box className={classes.root}>
      <ul className={classes.navi}>
        {headerSourceList.map((souce) => (
          <Button
            className={classes.naviItem}
            key={souce.id}
            onClick={movePage(souce.url)}
          >
            {souce.content}
          </Button>
        ))}
      </ul>
      <small>&copy; As Engineer All right reserve</small>
    </Box>
  );
};

export default Footer;
