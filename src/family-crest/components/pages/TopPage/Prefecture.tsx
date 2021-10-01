import React, { useMemo } from 'react';
import { makeStyles, Box, Button } from '@material-ui/core';
import { Theme } from 'constants/themeConst';
import {
  headerIdList,
  regionList,
  prefectureList,
} from 'constants/pageSourceConst';
import prefecturesImage from 'images/prefectures.png';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    background: theme.color.white,
    margin: '0 5rem 5rem',
  },
  title: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: theme.color.red,
    textAlign: 'left',
    padding: '1rem',
    '&:after': {
      content: '""',
      display: 'block',
      height: '3px',
      margin: '1rem 0',
      background: theme.color.red,
    },
  },
  conditionList: {
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
  },
  searchPrace: {
    display: 'flex',
    '& img': {
      width: '45%',
      margingLeft: '1rem',
    },
  },
  prefectureList: {
    width: '50%',
    textAlign: 'left',
    padding: '0 1rem',
  },
  region: {
    margin: '.5rem 0',
  },
  regionHead: {
    width: '10px',
    height: '1rem',
    '&.color1': {
      background: '#B6CE90',
    },
    '&.color2': {
      background: '#F8ED98',
    },
    '&.color3': {
      background: '#DBACA3',
    },
    '&.color4': {
      background: '#9C6C84',
    },
    '&.color5': {
      background: '#B4CFE2',
    },
    '&.color6': {
      background: '#E6A56B',
    },
    '&.color7': {
      background: '#DCDE9E',
    },
    '&.color8': {
      background: '#D6B2C4',
    },
    '&.color9': {
      background: '#8999C5',
    },
    '&.color10': {
      background: '#648F74',
    },
  },
  prefectureButton: {
    padding: '.25rem 0',
  },
}));

const Prefecture: React.FC = () => {
  const classes = useStyles();

  const dispPrefectureList = useMemo(
    () =>
      regionList.map((region) => ({
        id: region.id,
        color: region.color,
        content: prefectureList.filter(
          (prefecture) => region.id === prefecture.region,
        ),
      })),
    [],
  );

  return (
    <Box className={classes.root}>
      <p className={classes.title}>全国地図から選ぶ</p>
      <Box id={headerIdList.place} className={classes.searchPrace}>
        <Box className={classes.prefectureList}>
          {dispPrefectureList.map((region) => (
            <Box className={classes.conditionList} key={region.id}>
              <Box
                className={`${classes.regionHead} color${region.id.toString()}`}
              />
              {region.content.map((item) => (
                <Button key={item.id} className={classes.prefectureButton}>
                  {item.content}
                </Button>
              ))}
            </Box>
          ))}
        </Box>
        <img src={prefecturesImage} alt="prefectures" />
      </Box>
    </Box>
  );
};

export default Prefecture;
