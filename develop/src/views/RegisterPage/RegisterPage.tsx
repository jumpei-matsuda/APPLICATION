import { useHistory } from 'react-router';
import { Box, Typography } from '@mui/material';

import Form from 'components/Form/Form';
import PageTemplate from 'components/PageTemplate/PageTemplate';

import { ProductInputForm, defaultProductValues, URL_ITEM } from 'utils/constants/commonConstant';
import { INFO_PRODUCT_REGISTER_SUCCESS, ERROR_PRODUCT_REGISTER_FAILED } from 'utils/constants/messageConstant';
import { theme } from 'utils/constants/themeConstant';
import { useProduct } from 'utils/contexts/product';
import { useMessage } from 'utils/contexts/message';

import RegisterForm from './RegisterForm';

/**
 * プロフィール編集ページ コンポーネント
 * @returns 
 */
const RegisterPage: React.FC = () => {
  const { addProduct, selectAll } = useProduct();
  const { setMessage } = useMessage();
  const history = useHistory();

  /**
   * 送信ボタン押下処理
   * @param data 
   */
  const onSubmit = (data: ProductInputForm) => {
    // submitする項目を抽出する
    addProduct(data)
      ?.then(() => {
        selectAll();
        history.push(URL_ITEM.TOP);
        setMessage(INFO_PRODUCT_REGISTER_SUCCESS, 'success')
      })
      .catch(() => {
        setMessage(ERROR_PRODUCT_REGISTER_FAILED, 'error')
      })
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
        <Box sx={{
          minWidth: "calc(600px - 4rem)"
        }}>
          <Typography variant='h1' sx={{
            fontSize: '2rem',
            padding: '.5rem 2rem',
            fontFamily: theme.fontFamily.base,
          }}>
            登録
          </Typography>
          <Form position="left" onSubmit={onSubmit} defaultValues={defaultProductValues} buttonLabel="登録">
            <RegisterForm />
          </Form>
        </Box>
      </Box>
    </PageTemplate>
  );
};

export default RegisterPage;
