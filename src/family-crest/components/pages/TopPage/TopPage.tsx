import React from 'react';
import { makeStyles, Box, Grid, Button } from '@material-ui/core';
import { Theme } from 'constants/themeConst';
import { headerIdList, kanaList, shapeList } from 'constants/pageSourceConst';
import topImage from 'images/top.jpg';

import PageTempale from 'components/templates/PageTempale';
import Prefecture from './Prefecture';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    textAlign: 'center',
    margin: '0 5rem',
    background: theme.color.rightGray,
  },
  img: {
    maxWidth: '800px',
    width: 'auto',
    backgroundSize: 'cover',
    margin: '2rem 0',
  },
  title: {
    fontSize: '5rem',
    fontWeight: 900,
    marginBottom: '1rem',
  },
  detail: {
    textAlign: 'left',
    width: '60%',
    maxWidth: '800px',
    margin: 'auto',
    fontSize: '1.75rem',
    lineHeight: '1.5',
    marginBottom: '1rem',
  },
  searchShape: {
    maxWidth: '800px',
    width: 'auto',
    background: theme.color.white,
  },
  gridItem: {
    padding: '.5rem',
  },
  damy: {
    background: theme.color.rightGray,
    height: '10rem',
    width: '10rem',
    marginRight: '2rem',
  },
  crestName: {
    background: theme.color.red,
    color: theme.color.white,
    padding: '.5rem',
    fontSize: '1.25rem',
  },
  conditionArea: {
    marginBottom: '2rem',
    '&:after': {
      content: '""',
      display: 'block',
      height: '3px',
      margin: '1rem 0',
      background: theme.color.rightGray,
    },
  },
  conditionList: {
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
  },
  conditionTitle: {
    fontSize: '1.3rem',
    fontWeight: 'bold',
  },
  ConditionLabel: {
    fontSize: '1.3rem',
  },
  backGroundWhite: {
    background: theme.color.white,
  },
}));

export type TopPageProps = {
  isResponsible: boolean;
};

const TopPage: React.FC<TopPageProps> = (props) => {
  const classes = useStyles();
  const { isResponsible } = props;

  const damyItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  console.log(isResponsible);

  return (
    <PageTempale isResponsible={isResponsible}>
      <Box className={classes.root}>
        <img className={classes.img} src={topImage} alt="top" />
        <Box marginBottom="5rem">
          <h1 className={classes.title}>家紋とは</h1>
          <p className={classes.detail}>
            「源平藤橘（げんぺいとうきつ）」と呼ばれる源氏、平氏、藤原氏、橘氏といった強力な氏族が最も名を馳せていた時代、
            <br />
            地方に移り住んだ氏族の一部が他の同じ氏族の人間と区別を図るため土地の名前などを自分の家名（屋号）とし、
            <br />
            それが後の名字となり、家紋は家の独自性を示す固有の目印的な紋章として生まれ、名字を表す紋章として生まれたと言われている。
          </p>
        </Box>

        <Box
          id={headerIdList.crest}
          margin="0 5rem 5rem"
          className={classes.backGroundWhite}
        >
          <Box className={classes.conditionArea}>
            <Box className={classes.conditionList}>
              <span className={classes.conditionTitle}>【50音から選ぶ】：</span>
              {kanaList.map((kana) => (
                <Button className={classes.ConditionLabel} key={kana.id}>
                  {kana.content}
                </Button>
              ))}
            </Box>
            <Box className={classes.conditionList}>
              <span className={classes.conditionTitle}>【形状から選ぶ】：</span>
              {shapeList.map((shape) => (
                <Button className={classes.ConditionLabel} key={shape.id}>
                  {shape.content}
                </Button>
              ))}
            </Box>
          </Box>
          <Grid container>
            {damyItems.map((item) => (
              <Grid className={classes.gridItem} xs={4} key={item} item>
                <p className={classes.crestName}>形状</p>
                <Box display="flex" justifyContent="start" alignItems="center">
                  <div className={classes.damy} />
                  <span>名前</span>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Prefecture />
      </Box>
    </PageTempale>
  );
};

export default TopPage;
