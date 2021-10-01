import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    padding: '1rem',
  },
}));

export type MemberInfoEditPageProps = {
  isResponsible: boolean;
};

const MemberInfoEditPage: React.FC<MemberInfoEditPageProps> = (props) => {
  const classes = useStyles();
  const { isResponsible } = props;

  console.log(isResponsible);

  return (
    <div className={classes.root}>
      <p>会員情報入力</p>
    </div>
  );
};

export default MemberInfoEditPage;
