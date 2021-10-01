import { Box, makeStyles } from '@material-ui/core';
import { Theme } from 'constants/themeConst';

import Header from 'components/organisms/Header/Header';
import Footer from 'components/organisms/Footer/Footer';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    animation: '$fadeIn 1s',
    position: 'absolute',
    width: '100%',
    fontFamily: 'Sawarabi Mincho, sans-serif',
  },
  '@keyframes fadeIn': theme.animation.fadeIn,
}));

type Props = {
  children: React.ReactNode;
};

const PageContainer: React.FC<Props> = ({ children }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Header />
      {children}
      <Footer />
    </Box>
  );
};

export default PageContainer;
