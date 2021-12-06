import { Box, Typography } from '@mui/material';

import Form from 'components/Form/Form';
import PageTemplate from 'components/PageTemplate/PageTemplate';

import { UserInputForm, defaultUserValues } from 'utils/constants/commonConstant';
import { theme } from 'utils/constants/themeConstant';
import { useAuth, UpdateInfo } from 'utils/contexts/auth';

import EditProfileForm from './EditProfileForm';

/**
 * プロフィール編集ページ コンポーネント
 * @returns 
 */
const EditPlofilePage: React.FC = () => {
  const auth = useAuth();

  /**
   * 送信ボタン押下処理
   * @param data 
   */
  const onSubmit = (data: UserInputForm) => {
    // submitする項目を抽出する
    const submitItem: UpdateInfo = {
      displayName: data.displayName,
    }
    auth.updateProfile(submitItem);
  }

  return (
    <PageTemplate header footer>
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        padding: '2rem',
      }}>
        <Box>
          <Typography variant='h1' sx={{
            textAlign: 'center',
            fontSize: '2rem',
            padding: '.5rem',
            fontFamily: theme.fontFamily.base,
          }}>
            プロフィール編集
          </Typography>
          <Form position="center" onSubmit={onSubmit} defaultValues={defaultUserValues} buttonLabel="Save">
            <EditProfileForm />
          </Form>
        </Box>
      </Box>
    </PageTemplate>
  );
};

export default EditPlofilePage;
