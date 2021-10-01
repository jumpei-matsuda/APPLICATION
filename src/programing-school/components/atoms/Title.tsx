import { makeStyles } from '@material-ui/core';
import { Theme } from 'constants/themeConst';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    background: theme.color.rightGray,
  },
  title: {
    fontSize: '1.75rem',
    fontWeight: 900,
    fontFamily: theme.fontFamily.base,
    padding: '1rem',
    borderLeft: `10px ${theme.color.navy} solid`,
  },
}));

type TitleProps = {
  title: string;
};
const Title: React.FC<TitleProps> = ({ title }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1 className={classes.title}>{title}</h1>
    </div>
  );
};
export default Title;
