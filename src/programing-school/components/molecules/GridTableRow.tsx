import { makeStyles, Grid } from '@material-ui/core';
import GridTableItem from 'components/atoms/GridTableItem';

const useStyles = makeStyles(() => ({
  root: {
    textAlign: 'center',
    alignItems: 'center',
    whiteSpace: 'pre-wrap',
  },
  odd: {
    background: 'beige',
  },
}));

export type GridRowProps = {
  title: string;
  content: string;
  odd?: boolean;
};

const GridRow: React.FC<GridRowProps> = ({ title, content, odd }) => {
  const classes = useStyles();

  return (
    <Grid className={`${classes.root} ${odd ? classes.odd : ''}`} container>
      <GridTableItem label={title} size={4} gridType="title" odd={odd} />
      <GridTableItem label={content} size={8} gridType="content" />
    </Grid>
  );
};
export default GridRow;
