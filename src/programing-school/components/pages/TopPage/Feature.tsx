import { makeStyles, Box, Grid } from '@material-ui/core';
import { FatureSource } from 'constants/pageSourceConst';

const useStyles = makeStyles(() => ({
  root: {
    padding: '5rem 10%',
    margin: 'auto',
    animation: '1s fadeIn',
  },
  '@keyframes fadeIn': {
    '0%': {
      opacity: 0,
    },
    '100%': {
      opacity: 1,
    },
  },
  title: {
    margin: '0 0 2rem',
    fontSize: '2rem',
    fontWeight: 'bold',
  },
  img: {
    width: '100%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  discription: {
    fontSize: '1.2rem',
    lineHeight: 1.7,
  },
}));

const Feature: React.FC<Omit<FatureSource, 'id'>> = (props) => {
  const classes = useStyles();
  const { title, discription, image, alt, reverce } = props;

  return (
    <Box className={classes.root}>
      <Grid container spacing={5} direction={reverce ? 'row-reverse' : 'row'}>
        <Grid item xs={5}>
          <img className={classes.img} src={image} alt={alt} />
        </Grid>
        <Grid item xs={7}>
          <h1 className={classes.title}>{title}</h1>
          <p className={classes.discription}>{discription}</p>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Feature;
