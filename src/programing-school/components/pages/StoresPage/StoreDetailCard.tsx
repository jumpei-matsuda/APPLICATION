import { makeStyles, Card } from '@material-ui/core';
import { Theme } from 'constants/themeConst';

const useStyles = makeStyles((theme: Theme) => ({
  storeName: {
    fontSize: '1.5rem',
    fontWeight: 900,
    marginBottom: '.5rem',
  },
  image: {
    width: '300px',
    height: '200px',
    margin: '1rem auto',
    background: theme.color.rightGray,
  },
  detail: {
    padding: '1rem',
  },
  tableRow: {
    '& i': {
      padding: '0 1rem 0 .5rem',
    },
    '& td': {
      padding: '.25rem 0',
    },
  },
  '@keyframes fadeIn': theme.animation.fadeIn,
}));

type Props = {
  storeName: string;
  adress: string;
  tel: string;
};

const StoreDetailCard: React.VFC<Props> = (props) => {
  const { storeName, adress, tel } = props;
  const classes = useStyles();

  return (
    <Card>
      <div className={classes.image} />
      <div className={classes.detail}>
        <p className={classes.storeName}>{storeName}</p>
        <table>
          <tbody>
            <tr className={classes.tableRow}>
              <td>
                <i className="fas fa-map-marker-alt" />
              </td>
              <td>{adress}</td>
            </tr>
            <tr className={classes.tableRow}>
              <td>
                <i className="fas fa-phone-alt" />
              </td>
              <td>{tel}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Card>
  );
};

export default StoreDetailCard;
