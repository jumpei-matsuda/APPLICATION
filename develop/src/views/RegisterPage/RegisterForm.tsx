/* eslint-disable react/jsx-props-no-spreading */
import { useFormContext } from 'react-hook-form';
import { useHistory } from 'react-router';
import { Box } from '@mui/material';

import InputText from 'components/InputText/InputText';
import InputTextarea from 'components/InputTextarea/InputTextarea';
import InputSelect from 'components/InputSelect/InputSelect';
import CustomButton from 'components/CustomButton/CustomButton';

import { useMaster } from 'utils/contexts/master';
import { ProductInputForm, PRODUCT_INPUT_ITEM, URL_ITEM } from 'utils/constants/commonConstant';

const RegisterForm: React.FC = () => {
  const { control, register } = useFormContext<ProductInputForm>();
  const history = useHistory();
  const { productTypeList } = useMaster();

  return (
    <>
      <InputText
        name={PRODUCT_INPUT_ITEM.PRODUCT_NAME.NAME}
        title={PRODUCT_INPUT_ITEM.PRODUCT_NAME.LABEL}
        control={control}
        type='text'
        register={register(PRODUCT_INPUT_ITEM.PRODUCT_NAME.NAME, {
          required: true,
        })}
      />
      <Box display="inline">
        <InputSelect
          name={PRODUCT_INPUT_ITEM.PRODUCT_TYPE.NAME}
          title={PRODUCT_INPUT_ITEM.PRODUCT_TYPE.LABEL}
          itemList={productTypeList}
          control={control}
          register={register(PRODUCT_INPUT_ITEM.PRODUCT_TYPE.NAME, {
            required: true,
          })}
        />
        <CustomButton variant="contained" onClick={() => history.push(URL_ITEM.TOP)}>
          種類を追加
        </CustomButton>
      </Box>

      <InputText
        name={PRODUCT_INPUT_ITEM.REQUEST_QUANTITY.NAME}
        title={PRODUCT_INPUT_ITEM.REQUEST_QUANTITY.LABEL}
        control={control}
        type='number'
        register={register(PRODUCT_INPUT_ITEM.REQUEST_QUANTITY.NAME, {
          required: true,
        })}
      />
      <InputText
        name={PRODUCT_INPUT_ITEM.STOCK_QUANTITY.NAME}
        title={PRODUCT_INPUT_ITEM.STOCK_QUANTITY.LABEL}
        control={control}
        type='number'
        register={register(PRODUCT_INPUT_ITEM.STOCK_QUANTITY.NAME, {
          required: true,
        })}
      />
      <InputTextarea
        name={PRODUCT_INPUT_ITEM.MEMO.NAME}
        title={PRODUCT_INPUT_ITEM.MEMO.LABEL}
        control={control}
      />
    </>
  )
}

export default RegisterForm;