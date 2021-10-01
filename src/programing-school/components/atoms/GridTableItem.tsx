import { makeStyles, Grid, GridSize } from '@material-ui/core';
// import { Theme } from 'constants/themeConst';

const useStyles = (odd: boolean | undefined) =>
  makeStyles(() => ({
    root: {
      lineHeight: 1.5,
      minHeight: '8rem',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '0 10px',
    },
    title: {
      textAlign: 'left',
      borderRight: odd ? 'solid white' : 'solid beige',
    },
    content: {
      textAlign: 'left',
    },
  }));

type GridTypee = 'title' | 'content';
type GridItemProps = {
  label: string;
  size: GridSize;
  gridType: GridTypee;
  odd?: boolean;
};

const GridItem: React.FC<GridItemProps> = ({ label, size, gridType, odd }) => {
  const classes = useStyles(odd)();
  const dispLabel = label.split('/r/n').map((text, i) => (
    // eslint-disable-next-line react/no-array-index-key
    <span key={i}>{text}</span>
  ));

  return (
    <Grid className={`${classes.root} ${classes[gridType]}`} item xs={size}>
      {dispLabel}
    </Grid>
  );
};
export default GridItem;
