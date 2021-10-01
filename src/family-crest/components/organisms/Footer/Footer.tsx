import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Theme } from 'constants/themeConst';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: '5rem',
    background: theme.color.black,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  copyright: {
    fontSize: '1.25rem',
    fontFamily: 'Hiragino Kaku Gothic ProN',
    color: theme.color.white,
    textAlign: 'center',
  },
}));

export type FooterProps = {
  isResponsible: boolean;
};

const Footer: React.FC<FooterProps> = (props) => {
  const classes = useStyles();
  const { isResponsible } = props;

  console.log(isResponsible);

  return (
    <div className={classes.root}>
      <p className={classes.copyright}>
        <small>&copy; xxxxxxxxx All right reserve</small>
      </p>
    </div>
  );
};

export default Footer;
