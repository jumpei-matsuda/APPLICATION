import { Box, makeStyles } from '@material-ui/core';
// import { Theme } from 'constants/themeConstant';

import PageTemplate from 'components/templates/PageTemplate';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    height: '20vh',
    flexDirection: 'column',
  },
}));

const TopPage: React.FC = () => {
  const classes = useStyles();

  return (
    <PageTemplate>
      <Box className={classes.root} />
    </PageTemplate>
  )
}

export default TopPage;