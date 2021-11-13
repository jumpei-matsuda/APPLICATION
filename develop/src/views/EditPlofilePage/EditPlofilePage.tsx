import { useForm } from 'react-hook-form';
import { Box, Typography } from '@mui/material';

import Form from 'components/Form/Form';
import InputText from 'components/InputText/InputText';
import PageTemplate from 'components/PageTemplate/PageTemplate';

import { InputForm, INPUT_ITEM, defaultValues } from 'utils/constants/commonConstant';
import { theme } from 'utils/constants/themeConstant';
import { useAuth, UpdateInfo } from 'utils/contexts/auth';


/**
 * プロフィール編集ページ コンポーネント
 * @returns 
 */
const EditPlofilePage: React.FC = () => {
  const auth = useAuth();
  const { control, register, handleSubmit } = useForm<InputForm>({ defaultValues });

  /**
   * 送信ボタン押下処理
   * @param data 
   */
  const onSubmit = (data: InputForm) => {
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
          <Form position="center" onSubmit={onSubmit} handleSubmit={handleSubmit} buttonLabel="Save">
            <InputText
              name={INPUT_ITEM.DISPLAY_NAME.NAME}
              title={INPUT_ITEM.DISPLAY_NAME.LABEL}
              control={control}
              type='text'
              register={register(INPUT_ITEM.DISPLAY_NAME.NAME, {
                required: true,
              })}
            />
          </Form>
        </Box>
      </Box>
    </PageTemplate>
  );
};

export default EditPlofilePage;
