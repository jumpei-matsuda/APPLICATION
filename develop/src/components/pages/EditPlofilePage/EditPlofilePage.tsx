import { Box, makeStyles } from '@material-ui/core';
import Form, { InputTextType } from 'components/molecules/Form';
import { InputForm } from 'constants/commonConstant';
import { Theme } from 'constants/themeConstant';
import PageTemplate from 'components/templates/PageTemplate';

import { useAuth, UpdateInfo } from 'contexts/auth';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '2rem',
  },
  border: {
    border: 'solid 1px',
  },
  title: {
    textAlign: 'center',
    fontFamily: theme.fontFamily.english,
    fontSize: '2rem',
    padding: '.5rem',
  },
  textBox: {
    width: '20rem',
    margin: '.5rem',
  },
}));

/**
 * プロフィール編集ページ コンポーネント
 * @returns 
 */
const EditPlofilePage: React.FC = () => {
  const classes = useStyles();
  const items: InputTextType[] = [
    { id: 1, name: 'displayName', title: '名前' },
  ]
  const auth = useAuth();
  const onSubmit = (data: InputForm) => {
    // submitする項目を抽出する
    const submitItem: UpdateInfo = {
      displayName: data.displayName,
    }

    auth.updateProfile(submitItem);
  }

  return (
    <PageTemplate>
      <Box className={classes.root}>
        <Box className={classes.border}>
          <h1 className={classes.title}>プロフィール編集</h1>
          <Form
            items={items}
            position='center'
            onSubmit={onSubmit} />
        </Box>
      </Box>
    </PageTemplate>
  );
};

export default EditPlofilePage;
