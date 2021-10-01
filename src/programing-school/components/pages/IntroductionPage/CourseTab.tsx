import { makeStyles, Box, Grid } from '@material-ui/core';
import GridTableRow from 'components/molecules/GridTableRow';
import { courseSourceTitleList } from 'constants/pageSourceConst';

import TabTitle from 'components/atoms/TabTitle';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    boxShadow: '0 0 20px',
    padding: '1rem',
  },
  gridContainer: {
    width: '80%',
    margin: 'auto',
    paddingTop: '2rem',
  },
  gridItem: {
    textAlign: 'center',
  },
}));

type CourseTabProps = {
  title: string;
  forStudent: string;
  detail: string;
  skills: string;
  price: string;
};
const CourseTab: React.FC<CourseTabProps> = (props) => {
  const { title, forStudent, detail, skills, price } = props;
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <TabTitle title={title} />
      <Grid className={classes.gridContainer} container>
        <GridTableRow
          title={courseSourceTitleList.forStudent}
          content={forStudent}
          odd
        />
        <GridTableRow title={courseSourceTitleList.detail} content={detail} />
        <GridTableRow
          title={courseSourceTitleList.skills}
          content={skills}
          odd
        />
        <GridTableRow title={courseSourceTitleList.price} content={price} />
      </Grid>
    </Box>
  );
};
export default CourseTab;
