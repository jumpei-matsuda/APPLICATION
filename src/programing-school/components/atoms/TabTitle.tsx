import { makeStyles } from '@material-ui/core';
import { Theme } from 'constants/themeConst';

const useStyles = (borderWidth: number) =>
  makeStyles((theme: Theme) => ({
    title: {
      fontSize: '1.5rem',
      fontWeight: 900,
      fontFamily: theme.fontFamily.base,
      textAlign: 'center',
      paddingTop: '1rem',
      '&::after': {
        content: '""',
        display: 'block',
        height: '5px',
        width: `${borderWidth}rem`,
        background: theme.color.yellow,
        margin: 'auto',
      },
    },
  }));

type TabTitleProps = {
  title: string;
};
const TabTitle: React.FC<TabTitleProps> = ({ title }) => {
  // 文字数によってタイトルのボーダーを可変
  const borderWidth = title.split('').length * 1.7;
  const classes = useStyles(borderWidth)();

  return <h1 className={classes.title}>{title}</h1>;
};
export default TabTitle;
