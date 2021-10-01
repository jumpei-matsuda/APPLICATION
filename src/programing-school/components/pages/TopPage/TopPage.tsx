import { makeStyles, Box } from '@material-ui/core';
import topImage from 'images/top_001.jpg';
import { featureSourceList } from 'constants/pageSourceConst';
import { Theme } from 'constants/themeConst';

import PageContainer from 'components/templates/PageContainer';
import Feature from './Feature';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    animation: '$fadeIn 1s',
    fontFamily: 'Sawarabi Mincho, sans-serif',
  },
  img: {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '100%',
  },
  '@keyframes fadeIn': theme.animation.fadeIn,
}));

const TopPage: React.VFC = () => {
  const classes = useStyles();

  return (
    <PageContainer>
      <img className={classes.img} src={topImage} alt="top" />
      <Box>
        {featureSourceList.map((source) => (
          <Feature
            key={source.id}
            title={source.title}
            discription={source.discription}
            image={source.image}
            alt={source.alt}
            reverce={source?.reverce}
          />
        ))}
      </Box>
    </PageContainer>
  );
};

export default TopPage;
