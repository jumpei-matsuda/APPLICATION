import { makeStyles, Box } from '@material-ui/core';
import { Theme } from 'constants/themeConstant';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100v%',
    height: '10rem',
    background: theme.color.navy,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
  },
}));

const Footer: React.VFC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <small>&copy; As Engineer All right reserve</small>
    </Box>
  );
};

export default Footer;