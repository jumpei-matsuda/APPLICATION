import { makeStyles, Box, Grid } from '@material-ui/core';
import { Theme } from 'constants/themeConst';
import { storeList } from 'constants/pageSourceConst';

import Title from 'components/atoms/Title';
import PageContainer from 'components/templates/PageContainer';
import StoreDetailCard from './StoreDetailCard';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    margin: 'auto',
    marginTop: theme.marginHeader,
    width: '80%',
  },
  container: {
    padding: '2rem 0',
  },
  gridItem: {
    padding: '1rem',
  },
  '@keyframes fadeIn': theme.animation.fadeIn,
}));

const IntroductionPage: React.VFC = () => {
  const classes = useStyles();

  return (
    <PageContainer>
      <Box className={classes.root}>
        <Title title="店舗紹介" />
        <Box className={classes.container}>
          <Box>
            <Grid container>
              {storeList.map((store) => (
                <Grid className={classes.gridItem} item xs={6} key={store.id}>
                  <StoreDetailCard
                    storeName={store.storeName}
                    adress={store.adress}
                    tel={store.tel}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Box>
    </PageContainer>
  );
};

export default IntroductionPage;
