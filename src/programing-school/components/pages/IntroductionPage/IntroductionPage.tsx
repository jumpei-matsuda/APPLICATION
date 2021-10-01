import { useState } from 'react';
import { makeStyles, Box, Tabs, Tab } from '@material-ui/core';
import { Theme } from 'constants/themeConst';
import { courseSourceDetailList } from 'constants/pageSourceConst';

import Title from 'components/atoms/Title';
import PageContainer from 'components/templates/PageContainer';
import CourseTab from './CourseTab';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    margin: theme.marginHeader,
  },
  tabs: {
    paddingTop: '2rem',
    fontFamily: theme.fontFamily.base,
  },
  indicator: {
    backgroundColor: theme.color.yellow,
  },
  tab: {
    fontSize: '1.2rem',
    color: 'white',
    background: theme.color.navy,
    borderRadius: '5% 5% 0 0',
    width: '30%',
  },
  tabContent: {
    width: '100%',
    boxShadow: '0 0 20px',
  },
  '@keyframes fadeIn': theme.animation.fadeIn,
}));

const IntroductionPage: React.VFC = () => {
  const classes = useStyles();
  const [tab, setTab] = useState<number>(1);

  const handleTabChange = (
    event: React.ChangeEvent<unknown>,
    newValue: number,
  ) => {
    setTab(newValue);
  };

  return (
    <PageContainer>
      <Box className={classes.root}>
        <Title title="コース案内" />
        <Tabs
          className={classes.tabs}
          classes={{ indicator: classes.indicator }}
          value={tab}
          onChange={handleTabChange}
          centered
        >
          {courseSourceDetailList.map((course) => (
            <Tab
              key={course.id}
              value={course.id}
              label={course.title}
              className={classes.tab}
            />
          ))}
        </Tabs>
        {courseSourceDetailList
          .filter((course) => tab === course.id)
          .map((course) => (
            <CourseTab
              key={course.id}
              title={course.title}
              forStudent={course.forStudent}
              detail={course.detail}
              skills={course.skills}
              price={course.price}
            />
          ))}
      </Box>
    </PageContainer>
  );
};

export default IntroductionPage;
