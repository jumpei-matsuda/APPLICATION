import { Box, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';

import Form from 'components/Form/Form';
import PageTemplate from 'components/PageTemplate/PageTemplate';

import { ProductInputForm, defaultProductValues } from 'utils/constants/commonConstant';
import { theme } from 'utils/constants/themeConstant';
import { useProduct } from 'utils/contexts/product';
import { useMessage } from 'utils/contexts/message';
import { ERROR_PRODUCT_UPDATE_FAILED } from 'utils/constants/messageConstant';

import EditProductForm from './EditProductForm';



/**
 * プロフィール編集ページ コンポーネント
 * @returns 
 */
const EditProductPage: React.FC = () => {
  const { productList, updateProduct } = useProduct();
  const { setMessage } = useMessage();

  const { search, state } = useLocation<{ docId: string }>();
  const queryParams = new URLSearchParams(search);
  const isLoading = !!queryParams.get('loading');

  const editProduct = productList.find(item => item.docId === state?.docId);
  if (!editProduct) {
    setMessage(ERROR_PRODUCT_UPDATE_FAILED, 'error')
  }

  /**
   * 送信ボタン押下処理
   * @param data 
   */
  const onSubmit = (data: ProductInputForm) => {
    // submitする項目を抽出する
    updateProduct(data);
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
            更新
          </Typography>
          <Form position="left" onSubmit={onSubmit} defaultValues={editProduct ?? defaultProductValues} buttonLabel="更新">
            <EditProductForm isLoading={isLoading} />
          </Form>
        </Box>
      </Box>
    </PageTemplate>
  );

};

export default EditProductPage;
